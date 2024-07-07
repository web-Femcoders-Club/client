import { createPortal } from "react-dom";

function QrCodeModal({ showQr, onClose, qrCode }: { showQr: boolean, onClose: () => void, qrCode: string }) {
  return (
    <div>
      {showQr ?
        <>
          {createPortal(
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
              <div className="relative w-[960px] h-[700px] flex flex-col items-center gap-3 justify-center bg-primary rounded-[24px] px-24 overflow-hidden">
                <button className="absolute right-3 top-2 text-secondary font-bold text-2xl place-self-end" onClick={() => onClose()}>(x)</button>
                <img src={qrCode} className="w-[300px]" alt='' />
                <h1 className="text-3xl text-secondary font-bold">¡Se ha confirmado tu reserva!</h1>
                <p className="text-contrast w-[360px] text-center">No te olvides de tener a mano tu código QR cuando llegues al evento.</p>
                <p className="text-contrast">¡Nos vemos!</p>
                <button className="bg-orange-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-[250px] mt-2" onClick={() => onClose()}>Aceptar</button>
                <a href={qrCode} download className="bg-purple-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded w-[250px] mt-2 flex items-center justify-center" onClick={() => onClose()}>Descargar código QR</a>
              </div>
            </div>,
            document.body
          )}
        </>
        :
        <></>
      }
    </div>
  )
}

export default QrCodeModal;

