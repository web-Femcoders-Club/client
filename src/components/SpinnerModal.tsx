import { createPortal } from "react-dom";
import Spinner from "./FemSpinner";

export const SpinerModal = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          <Spinner />
        </div>,
        document.body
      )}
    </>
  );
};

export default SpinerModal;
