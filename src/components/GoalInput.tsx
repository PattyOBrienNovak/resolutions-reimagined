import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface GoalInputProps {
  onSubmit: (goal: string, stepCount: number) => void;
  isLoading: boolean;
}

export function GoalInput({ onSubmit, isLoading }: GoalInputProps) {
  const [goal, setGoal] = useState("");
  const { toast } = useToast();

  const handleSubmit = (stepCount: number) => {
    if (goal.trim().length < 3) {
      toast({
        title: "Goal is too short",
        description: "Please enter a more detailed goal",
        variant: "destructive",
      });
      return;
    }
    onSubmit(goal, stepCount);
  };

  return (
    <div className="w-full max-w-xl space-y-4">
      <Textarea
        placeholder="Enter your goal here... (e.g., 'I want to learn to play the guitar')"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="min-h-[100px] text-lg focus-within:border-[#D946EF] transition-colors"
      />
      <div className="flex gap-4">
        <Button 
          onClick={() => handleSubmit(5)} 
          disabled={isLoading} 
          className="flex-1 hover:bg-[#D946EF] transition-colors"
        >
          {isLoading ? "Generating steps..." : "Get 5 Action Steps"}
        </Button>
        <Button 
          onClick={() => handleSubmit(10)} 
          disabled={isLoading} 
          className="flex-1 hover:bg-[#D946EF] transition-colors"
        >
          {isLoading ? "Generating steps..." : "Get 10 Action Steps"}
        </Button>
      </div>
    </div>
  );
}