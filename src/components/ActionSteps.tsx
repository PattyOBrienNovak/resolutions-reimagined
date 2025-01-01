import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ActionStepsProps {
  steps: string[];
  onRegenerate: () => void;
  isLoading: boolean;
}

export function ActionSteps({ steps, onRegenerate, isLoading }: ActionStepsProps) {
  if (!steps.length) return null;

  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="grid gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <span className="text-primary font-bold">{index + 1}.</span>
                <p className="text-foreground">{step}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <Button 
        onClick={onRegenerate} 
        variant="outline" 
        disabled={isLoading}
        className="w-full"
      >
        Generate New Steps
      </Button>
    </div>
  );
}