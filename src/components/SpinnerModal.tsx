import { createPortal } from "react-dom";
import Spinner from "./Spinner";

export const SpinerModal = ({ isVisible}: { isVisible: boolean}) => {
    if ( !isVisible ) {
        return null;
    }

    return (
        <>
            {createPortal(
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[50]'>
                    <Spinner />
                </div>,
                document.body
            )}
        </>
    )
}
export default SpinerModal;