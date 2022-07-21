import '../Components/Navbar.scss';

import LoginOffcan from '../Components/LoginOffcan'
import kakao_oauth from '../Assets/kakao_login_large_narrow.png';
import naver_oauth from '../Assets/btnG_완성형.png';
import { useState } from 'react';


function Navbar() {

    const [isLogin, setIsLogin] = useState(false);
    const onClick = () => setIsLogin((current) => !current);
    console.log(isLogin)
    
    return(
        <header>
            <div className="logo">PARSLEY</div>
            <div className="btngroup">
                <button className="btn btn-main">스터디룸 생성</button>
                <div className="magicon">
                    <i className="bx bx-search"></i>
                </div>
                <div className="menuicon" type="button"
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasRight" 
                    aria-controls="offcanvasRight">
                    <i className="bx bx-menu" ></i>    
                </div>
                {isLogin ? <LoginOffcan /> : 
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-body">
                        <div className="profile"><i className='bx bxs-user-circle'></i></div>
                        <div className="title">로그인</div>
                        <div className="title-paragraph">Lorem ipsum, dolor sit amet consectetur</div>
                        <div className="oauth">                     
                            <div type="button" onClick={onClick}>
                                <img src={kakao_oauth} alt="카카오" className="kakao" />
                            </div>
                            <div type="button" onClick={onClick}>
                                <img src={naver_oauth} alt="네이버" className="naver" />
                            </div>
                        </div>
                    </div>
                </div>
                }         
            </div>
        </header>
    )
}

export default Navbar;