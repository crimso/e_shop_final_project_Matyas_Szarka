import { addToast, ToastProvider, Button } from "@heroui/react";
import React from "react";

export function AddToast() {
  const [placement, setPlacement] = React.useState("bottom-right");

  return (
    <>
      <div className="fixed z-[100]">
        <ToastProvider
          placement={placement}
          toastOffset={placement.includes("top") ? 60 : 0}
          toastProps={{
            variant: "bordered",
          }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          key={"top-right"}
          variant={"solid"}
          color={"success"}
          onPress={() => {
            setPlacement("top-right");
            addToast({
              title: "Toast title",
              description: "Toast displayed successfully",
              color: "success",
            });
          }}
        >
          Top Right
        </Button>
      </div>
    </>
  );
}
