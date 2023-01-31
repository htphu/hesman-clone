import React, { useRef,useEffect, useState } from 'react'
import Banner from './Banner'
import Video from './Video'
import './Content.css'
import Intro from './Intro'
import Members from './Members'
import Carousel from './Carousel'

function Content() {
  const containerRef = useRef(null);
  const [widthValue, setWidthValue] = useState(0);

  useEffect(() => {
    setWidthValue(containerRef.current.offsetWidth);
    
  }, [])
  
  return (
    <div className='content'>
        <Banner/>
        <Video/>
        <Intro/>
        <Members/>
        <div ref={containerRef} className="heSinhThai">
          <div className="heSinhThai-header">
            <h2>
            <img src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp" alt="" />
              Hệ Sinh Thái
            <img src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp" alt="" />
            </h2>
          </div>
          <Carousel button width={widthValue} >
            <div className='heSinhThai-slideItem'>
              <img src="https://hesman.net/wp-content/uploads/2022/03/slide-2-2.png.webp" alt="" />
            </div >
            <div className='heSinhThai-slideItem'>
              <img src="https://hesman.net/wp-content/uploads/2022/04/slide-pc-1-10.jpg.webp" alt="" />
            </div>
            <div className='heSinhThai-slideItem'>
              <img src="https://hesman.net/wp-content/uploads/2022/04/slide-2-3.png.webp" alt="" />
            </div>
          </Carousel>
        </div>
    </div>
  )
}

export default Content