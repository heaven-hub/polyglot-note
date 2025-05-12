import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { MyFile } from './type'
type Props = {
    visible: boolean,
    errFileList: MyFile[]
}
export default function ErrorFileDialog({ visible }: Props) {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        setOpen(visible)
    }, [visible])
    return (
        <Dialog open={open}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
