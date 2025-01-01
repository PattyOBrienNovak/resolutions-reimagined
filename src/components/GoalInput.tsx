import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface GoalInputProps {
  onSubmit: (goal: string) => void;
  isLoading: boolean;
}

export function GoalInput({ onSubmit, isLoading }: GoalInputProps) {
  const [goal, setGoal] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim().length < 3) {
      toast({
        title: "Goal is too short",
        description: "Please enter a more detailed goal",
        variant: "destructive",
      });
      return;
    }
    onSubmit(goal);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
      <Textarea
        placeholder="Enter your goal here... (e.g., 'I want to learn to play the guitar')"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="min-h-[100px] text-lg"
      />
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="w-full"
      >
        {isLoading ? "Generating steps..." : "Get Action Steps"}
      </Button>
    </form>
  );
}