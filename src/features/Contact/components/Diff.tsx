// Diff.tsx
import React, { useRef, useEffect } from 'react';


const Diff: React.FC = () => {
  const resizerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizer = resizerRef.current;
    const left = resizer?.previousElementSibling as HTMLElement;
    const right = resizer?.nextElementSibling as HTMLElement;

    const handleMouseDown = () => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (resizer && left && right) {
        const dx = e.movementX;
        const newLeftWidth = ((left.offsetWidth + dx) / resizer.parentElement!.offsetWidth) * 100;
        const newRightWidth = 100 - newLeftWidth;
        left.style.width = `${newLeftWidth}%`;
        right.style.width = `${newRightWidth}%`;
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    resizer?.addEventListener('mousedown', handleMouseDown);

    return () => {
      resizer?.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="diff aspect-[16/9] my-8">
      <div className="diff-item-1">
        <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
          {/* Puedes poner cualquier contenido aquí */}
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 grid place-content-center text-9xl font-black">
          {/* Puedes poner cualquier contenido aquí */}
        </div>
      </div>
      <div className="diff-resizer" ref={resizerRef}></div>
    </div>
  );
};

export default Diff;
