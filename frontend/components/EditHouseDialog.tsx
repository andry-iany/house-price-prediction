import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type EditHouseDialogProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const EditHouseDialog = (props: EditHouseDialogProps) => {
  const { isOpen, onOpenChange } = props

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="xl:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary-foreground">
            Detail
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditHouseDialog
