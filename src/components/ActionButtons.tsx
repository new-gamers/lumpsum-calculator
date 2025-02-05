import { Button } from "@/components/ui/button";
import { RefreshCw, Share2, Undo } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import ShareDialog from "./ShareDialog";
import { CurrencyType } from "./CurrencySelector";

interface ActionButtonsProps {
  onReset: () => void;
  previousValues: {
    totalInvestment: number;
    returnRate: number;
    timePeriod: number;
    inflationEnabled: boolean;
    inflationRate: number;
  };
  currentValues: {
    totalInvestment: number;
    returnRate: number;
    timePeriod: number;
    currency: CurrencyType;
    inflationEnabled: boolean;
    inflationRate: number;
  };
  onRestore: (values: {
    totalInvestment: number;
    returnRate: number;
    timePeriod: number;
    inflationEnabled: boolean;
    inflationRate: number;
  }) => void;
}

const ActionButtons = ({
  onReset,
  previousValues,
  currentValues,
  onRestore,
}: ActionButtonsProps) => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isResetDisabled, setIsResetDisabled] = useState(false);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleReset = () => {
    const valuesToRestore = { ...currentValues };

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    setIsResetDisabled(true);
    onReset();

    toast({
      title: "Reset Complete",
      description: "All values reset to default",
      duration: 7000,
      action: (
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => {
            onRestore(valuesToRestore);
            setIsResetDisabled(false);

            toast({
              title: "Values Restored",
              description: "Previous values have been restored",
              duration: 5000,
            });
          }}
        >
          <Undo className="h-4 w-4" />
          Undo
        </Button>
      ),
    });

    resetTimeoutRef.current = setTimeout(() => {
      setIsResetDisabled(false);
    }, 7000);
  };

  return (
    <div className="flex justify-center gap-4">
      <Button
        onClick={handleReset}
        variant="outline"
        className="gap-2"
        disabled={isResetDisabled}
      >
        <RefreshCw className="h-4 w-4" />
        Reset
      </Button>
      <Button
        onClick={() => setIsShareDialogOpen(true)}
        variant="outline"
        className="gap-2"
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>
      <ShareDialog
        open={isShareDialogOpen}
        onOpenChange={setIsShareDialogOpen}
        {...currentValues}
      />
    </div>
  );
};

export default ActionButtons;