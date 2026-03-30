import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mic, MicOff } from "lucide-react";

interface GoalInputProps {
  onSubmit: (goal: string, stepCount: number) => void;
  isLoading: boolean;
}

export function GoalInput({ onSubmit, isLoading }: GoalInputProps) {
  const [goal, setGoal] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setGoal((prev) => (prev ? prev + " " + transcript : transcript));
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === "not-allowed") {
          toast({
            title: "Microphone access denied",
            description: "Please allow microphone access to use voice input.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Voice input error",
            description: "Could not capture audio. Please try again.",
            variant: "destructive",
          });
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [toast]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

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
      <div className="relative">
        <Textarea
          placeholder="Enter your goal here... (e.g., 'I want to learn to play the guitar')"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="min-h-[100px] text-lg focus-within:border-[#D946EF] transition-colors pr-14"
        />
        {speechSupported && (
          <button
            type="button"
            onClick={toggleListening}
            disabled={isLoading}
            aria-label={isListening ? "Stop recording" : "Start voice input"}
            className={`absolute bottom-3 right-3 p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D946EF] ${
              isListening
                ? "bg-[#D946EF] text-white animate-pulse"
                : "bg-muted text-muted-foreground hover:bg-[#D946EF] hover:text-white"
            }`}
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
        )}
      </div>
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
