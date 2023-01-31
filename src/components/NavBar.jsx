import React, { useState } from 'react'
import './NavBar.css'
function NavBar() {
    const [navMobilleIsHidden, setNavMobilleIsHidden] = useState(true);

    return (
        <div className='navBar'>
            <div className="navBar-left">
                <a href="https://hesman.net/">
                    <img src="https://hesman.net/wp-content/uploads/2022/02/hesman-logo.svg" alt="" />
                </a>
            </div>
            <div className="navBar-midd">
                <ul>
                    <li><a href="">Trang chủ</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="#gioithieu">Giới thiệu</a></li>
                    <li><a href="">TOKENOMICS</a></li>
                    <li><a href="">Lộ trình</a></li>
                    <li><a href="">Dapp</a></li>
                    <li><a href="">Đối tác</a></li>
                    <li><a href="">Liên hệ</a></li>
                </ul>
            </div>
            <div className="navBar-right">
                <div className="navBar-right-img">
                    <img src="https://hesman.net/wp-content/uploads/2022/03/Header-JoinNow.png.webp" alt="" />
                </div>
                <div className='navBar-mobile-button' onClick={()=>setNavMobilleIsHidden(!navMobilleIsHidden)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>

                </div>
            </div>
            {!navMobilleIsHidden &&
                <div className="navBar-mobile-item" >
                    <ul>
                        <li><a href="">Trang chủ</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="#gioithieu">Giới thiệu</a></li>
                        <li><a href="">TOKENOMICS</a></li>
                        <li><a href="">Lộ trình</a></li>
                        <li><a href="">Dapp</a></li>
                        <li><a href="">Đối tác</a></li>
                        <li><a href="">Liên hệ</a></li>
                    </ul>
                </div>
            }

        </div>
    )
}

export default NavBar