import React, { useRef } from 'react';

const ImageComparison: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLDivElement | null>(null);

    const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (sliderRef.current && imgRef.current) {
            const slider = sliderRef.current;
            const img = imgRef.current;
            const rect = slider.getBoundingClientRect();
            const offset = e.clientX - rect.left;
            const width = rect.width;
            const percentage = Math.max(0, Math.min(1, offset / width));
            img.style.width = `${percentage * 100}%`;
        }
    };

    return (
        <div
            className="diff aspect-[16/9]"
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '800px',
                height: '450px',
                overflow: 'hidden',
            }}
        >
            <div
                className="diff-item-1"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <img
                    alt="background"
                    src="/bg5.png"
                    style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div
                className="diff-item-2"
                ref={imgRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%', // Initial width for comparison
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <img
                    alt="background"
                    src="/bg5.jpg"
                    style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)', // Example effect for comparison
                    }}
                />
            </div>
            <div
                className="diff-resizer"
                ref={sliderRef}
                onMouseMove={handleSliderMove}
                onMouseDown={handleSliderMove}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: '2px',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    cursor: 'ew-resize',
                    zIndex: 10,
                }}
            />
        </div>
    );
};

export default ImageComparison;
