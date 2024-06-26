import { MonitorX } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AdAlert() {
  return (
    <Alert>
      <MonitorX className="h-4 w-4" />
      <AlertTitle>Please disable your AdBlocker if not working.</AlertTitle>
      <AlertDescription>
        Maximum 2 ads will be shown you can close the ad as they come.
      </AlertDescription>
    </Alert>
  );
}
