import './LogoutOffcanvas.scss'

import kakao_oauth from '../Assets/kakao_login_large_narrow.png';
import naver_oauth from '../Assets/btnG_완성형.png';
import { useState } from 'react';

function LogoutOffcanvas({sidebar}) {

  const [isLogin, setIsLogin] = useState(true);
  const onClick = () => setIsLogin((current) => !current);
  console.log(isLogin)

  



  return (
      <div className={sidebar ? "sidebar sidebar--open" :"sidebar"}>
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
  )
}

export default LogoutOffcanvas;