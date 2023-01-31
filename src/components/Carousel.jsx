import React, { useEffect, useRef, useState } from 'react'
import './Carousel.css'

const Carousel = (props) => {
    const { children, button, dots, width } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    const time = 4000;
    const intervalRef = useRef(null);
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === length - 1 ? 0 : prevIndex + 1);
        }, time);
        return () => clearInterval(intervalRef.current);
    }, [])

    const next = () => {

            setCurrentIndex((prevIndex) => prevIndex === length - 1 ? 0 : prevIndex + 1);

    }

    const prev = () => {

            setCurrentIndex((prevIndex) => prevIndex === 0 ? length-1 : prevIndex - 1);

    }
    const handleClickDot = (index) => {
        setCurrentIndex(index);
    }
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">

                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * width}px)` }}>
                        {children}
                    </div>
                    {
                        dots && 
                        <div className="dots">
                        {Array(length).fill(0).map(
                            (e, index) => {
                                const classValue = currentIndex == index ? "dot" : "dot active";
                                return (<div className={classValue} onClick={() => handleClickDot(index)}></div>)
                            }
                        )
                        }
                    </div>
                    }
                    
                    {
                        button &&
                        <>
                            <button onClick={prev} className="left-arrow">
                                &lt;
                            </button>
                            <button onClick={next} className="right-arrow">
                                &gt;
                            </button>
                        </>

                    }

                </div>

            </div>
        </div>
    )
}

export default Carousel