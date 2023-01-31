import React from 'react'
import './Intro.css'
function Intro() {
    return (
        <div className='intro' id='gioithieu'>
            <div className="intro-top">
                <div className="intro-top-item">
                    <img src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-1.jpg.webp" alt="" />
                </div>
                <div className="intro-top-item intro-top-item-midd" style={{ padding: "10px" }}>
                    <img src="https://hesman.net/wp-content/uploads/2022/03/Hero-7-2-768x919.jpg.webp" alt="" />
                    <div className="mask">
                        <h2>Dũng sĩ
                            <br />
                            <span style={{ color: "#3B62FF" }}>HESMAN</span>
                        </h2>
                        <h2>
                            Dũng sĩ Hesman là bộ truyện tranh dài tập về siêu anh hùng đầu tiên của Việt Nam, được xuất bản vào năm 1993.
                        </h2>
                        <p>
                            Hesman Legend là dự án được xây dựng để hướng tới kỷ niệm 30 năm, nhằm mục đích làm sống lại tác phẩm kinh điển này và kết nối giá trị văn hóa của cộng đồng đến thế hệ trẻ.
                        </p>
                        <div className="mask-btnGroup">
                            <button>WHITEPAPER</button>
                            <button>PITCH DECK</button>
                        </div>
                    </div>
                </div>
                <div className="intro-top-item">
                    <img src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-2.jpg.webp" alt="" />
                </div>
                <img className='intro-top-imgSmoke' src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-3-2.png.webp" alt="" />
                <img className='intro-top-imgMan' src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-4-721x1024.png.webp" alt="" />
            </div>
            <div className="intro-bottom">
                <div className="intro-bottom-item-left">
                    <img src="https://hesman.net/wp-content/uploads/2022/03/Frame.png.webp" alt="" />
                    <div className="mask">
                        <h2>Sứ mệnh</h2>
                        <h2 style={{ color: "#3B62FF" }}>TIÊN PHONG</h2>
                        <h2 >Cho các sự án</h2>
                        <h2 style={{ color: "#3B62FF" }}>NFT</h2>
                        <h2>TRONG NƯỚC, ĐƯA CÁC TÁC PHẨM NGHỆ THUẬT VIỆT RA THỊ TRƯỜNG QUỐC TẾ</h2>
                    </div>
                </div>
                <div className="intro-bottom-item-right">
                    <img src="https://hesman.net/wp-content/uploads/2022/03/Frame2.png.webp" alt="" />
                    <div className="mask">
                        <h2>Tầm nhìn</h2>
                        <h2>ĐƯA HESMAN LEGEND</h2>
                        <h2 style={{ color: "#3B62FF" }}>thành dự án NFT đầu tiên</h2>
                        <h2 style={{ color: "#3B62FF" }}>PHÓNG TÁC TỪ TRUYỆN TRANH</h2>
                        <h2>Việt Nam</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro