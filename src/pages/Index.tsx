import { useState } from "react";
import { GoalInput } from "@/components/GoalInput";
import { ActionSteps } from "@/components/ActionSteps";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const [steps, setSteps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateSteps = async (goal: string) => {
    setIsLoading(true);
    try {
      const { data: { origin } } = await supabase.functions.invoke("generate-steps", {
        body: { goal },
      });

      if (!origin?.choices?.[0]?.message?.content) {
        throw new Error("Invalid response format from OpenAI");
      }

      const content = origin.choices[0].message.content;
      const parsedSteps = content
        .split(/\d+\./)
        .filter(Boolean)
        .map((step: string) => step.trim());

      setSteps(parsedSteps);
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
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Transform Your Goals Into Action
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your New Year's resolution or any goal, and get personalized, actionable steps to achieve it.
          </p>
        </div>

        <GoalInput onSubmit={generateSteps} isLoading={isLoading} />
        
        <ActionSteps 
          steps={steps} 
          onRegenerate={() => generateSteps(steps.length ? "Same goal, but different steps" : "")}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}