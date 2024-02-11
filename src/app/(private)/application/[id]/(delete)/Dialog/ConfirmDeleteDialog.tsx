import { AlertDialog } from "@/components/ui/alert-dialog";
import { ConfirmDeleteButton } from "./ConfirmDeleteButton";
import { ConfirmDeleteDialogContent } from "./ConfirmDeleteDialogContent";

interface Props {
  id: string;
}

export const ConfirmDeleteDialog = ({ id }: Props) => {
  return (
    <AlertDialog>
      <ConfirmDeleteButton />
      <ConfirmDeleteDialogContent id={id} />
    </AlertDialog>
  );
};
