import React, { useState } from 'react'
import './Banner.css'
function Banner() {
    const cardImg_1 = "https://hesman.net/wp-content/uploads/2022/03/Hero-1.svg";
    const cardImg_2 = "https://hesman.net/wp-content/uploads/2022/03/HuyHung.png.webp";
    const cardImg_3 = "https://hesman.net/wp-content/uploads/2022/03/Gasco.png.webp";
    const [bottomImg, setbottomImg] = useState(cardImg_1);

    function handleClickCard(url){
        setbottomImg(url);
    }
  return (
    <div className='Banner'>
        <div className="Banner-top">
            <div className="bti-1">
                <img src="https://hesman.net/wp-content/uploads/2022/03/Vision.png.webp" alt="" />
            </div>
            <div className="bti-2">
                <img src="https://hesman.net/wp-content/uploads/2022/03/Hero-4.svg" alt="" />
            </div>
            <div className="bti-3">
                <img src="https://hesman.net/wp-content/uploads/2022/03/Hero-5.svg" alt="" />
            </div>
        </div>
        <div className="Banner-bottom">
            <div className="Banner-bottom-img">
                <img src={bottomImg} alt="" />
            </div>
            <div className="Banner-card">
                <div className="Banner-card-item" onClick={()=>handleClickCard(cardImg_1)}>
                    <img src="https://hesman.net/wp-content/uploads/2022/03/hero-1.png.webp" alt="" />
                </div>
                <div className="Banner-card-item" onClick={()=>handleClickCard(cardImg_2)}>
                    <img src="https://hesman.net/wp-content/uploads/2022/03/Hero-2.png.webp" alt="" />
                </div>
                <div className="Banner-card-item" onClick={()=>handleClickCard(cardImg_3)}>
                    <img src="https://hesman.net/wp-content/uploads/2022/03/Hero-3.png.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner