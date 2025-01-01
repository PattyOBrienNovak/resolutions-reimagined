import { useState } from "react";
import { GoalInput } from "@/components/GoalInput";
import { ActionSteps } from "@/components/ActionSteps";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const [steps, setSteps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateSteps = async (goal: string, stepCount: number) => {
    setIsLoading(true);
    try {
      console.log('Sending goal to edge function:', goal, 'with step count:', stepCount);
      const { data, error } = await supabase.functions.invoke("generate-steps", {
        body: { goal, stepCount },
      });

      console.log('Edge function response:', data);

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (!data?.origin?.choices?.[0]?.message?.content) {
        console.error('Invalid response format:', data);
        throw new Error("Invalid response format from AI");
      }

      const content = data.origin.choices[0].message.content;
      console.log('Parsed content:', content);
      
      const parsedSteps = content
        .split(/\d+\./)
        .filter(Boolean)
        .map((step: string) => step.trim());

      console.log('Parsed steps:', parsedSteps);
      setSteps(parsedSteps);
      
      // Show success message in lime green
      toast({
        title: "Steps Generated!",
        description: "Your action plan is ready.",
        className: "bg-[#ecfccb] border-[#84cc16] text-[#365314]",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate steps. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen gradient-bg">
      <div className="container py-12 px-4 flex flex-col items-center gap-12">
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D946EF]">
            Resolutions Reimagined
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your New Year's resolution or any goal.
          </p>
          <p className="text-lg text-muted-foreground">
            Get personalized, actionable steps to achieve it.
          </p>
        </div>

        <GoalInput onSubmit={generateSteps} isLoading={isLoading} />
        
        <ActionSteps 
          steps={steps} 
          onRegenerate={() => generateSteps(steps.length ? "Same goal, but different steps" : "", steps.length || 5)}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}