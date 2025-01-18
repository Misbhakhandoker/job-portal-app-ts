"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import PostForm from "../forms/PostForm";
import { ScrollArea } from "../ui/scroll-area";

function PostNewJob() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setDialogOpen(true)}>PostNewJob</Button>
      <Dialog
        open={dialogOpen}
        onOpenChange={() => {
          setDialogOpen(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Post New Job</DialogTitle>
            <div className="grid gap-4 py-4">
            <ScrollArea className="h-[400px] px-2" >
            <PostForm />
            </ScrollArea>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PostNewJob;
