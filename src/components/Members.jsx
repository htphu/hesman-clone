import React, { useRef,useEffect } from 'react'
import Carousel from './Carousel'
import './Members.css'

function Members() {
    const membersRef = useRef(null);

    return (
        <div className='members'>
            <div className="members-left">
                <h2>Đội ngủ</h2>
                <p>
                    Họa sĩ Nguyễn Hùng Lân sinh năm 1956, là một trong số rất ít họa sĩ vẽ truyện tranh Việt đạt được nhiều thành tựu to lớn trong sự nghiệp
                </p>
                <p>
                    Ngoài Dũng sĩ Hesman làm mưa làm gió thị trường truyện tranh Việt, độc giả còn quen thuộc với truyện tranh “Siêu nhân Việt Nam”, Cô Tiên Xanh và những đầu sách mà ông tham gia vẽ tranh minh họa như Võ sĩ đạo Samurai, Nghìn lẻ một đêm, Gương sáng tuổi xanh, v.v. Số đầu truyện tranh của ông đã xuất bản tính từ năm 1987 đến nay đã gần 700 tập đủ mọi thể loại.
                </p>
            </div>
            <div className="members-right">
                <div ref={membersRef} style={{width:"1000px",height:"600px"}}>

                    <Carousel dots width={300} >
                        <div className="slider-item">
                            <img src="https://hesman.net/wp-content/uploads/2022/03/Group-68.png.webp" alt="" />
                            <div className="slider-item-name">
                                <img src="https://hesman.net/wp-content/uploads/2022/03/Team-hung-lan-2-300x264.png.webp" alt="" />
                            </div>
                        </div>
                        <div className="slider-item">
                            <img src="https://hesman.net/wp-content/uploads/2022/03/Group-67.png.webp" alt="" />
                            <div className="slider-item-name">
                                <img src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-4-300x282.png.webp" alt="" />
                            </div>
                        </div>
                        <div className="slider-item">
                            <img src="https://hesman.net/wp-content/uploads/2022/03/Group-66.png.webp" alt="" />
                            <div className="slider-item-name">
                                <img src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-2-300x271.png.webp" alt="" />
                            </div>
                        </div>
                        <div className="slider-item">
                            <img src="https://hesman.net/wp-content/uploads/2022/03/Group-65.png.webp" alt="" />
                            <div className="slider-item-name">
                                <img src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3-300x282.png.webp" alt="" />
                            </div>
                        </div>
                    </Carousel>

                </div>

            </div>
        </div>
    )
}

export default Members