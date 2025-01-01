import { useState } from "react";
import { GoalInput } from "@/components/GoalInput";
import { ActionSteps } from "@/components/ActionSteps";
import { useToast } from "@/components/ui/use-toast";

export default function Index() {
  const [steps, setSteps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateSteps = async (goal: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are a helpful goal achievement assistant. Provide 5-7 specific, actionable steps for achieving the user's goal. Each step should be unique and practical.",
            },
            {
              role: "user",
              content: `My goal is: ${goal}`,
            },
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("OpenAI API Error:", errorData);
        throw new Error(errorData.error?.message || "Failed to generate steps");
      }

      const data = await response.json();
      if (!data.choices?.[0]?.message?.content) {
        throw new Error("Invalid response format from OpenAI");
      }

      const content = data.choices[0].message.content;
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