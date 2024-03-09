import { ChevronRight } from "lucide-react";

import { Button as ButtonShadcn } from "@/components/ui/button";

export const ArrowButton = () => {
  return (
    <ButtonShadcn variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </ButtonShadcn>
  );
};
