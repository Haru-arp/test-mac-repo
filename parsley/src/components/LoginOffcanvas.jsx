import './LoginOffcanvas.scss'; 
import Ddaywidget from './Ddaywidget';
import Studywidget from './Studywidget';
import { Link } from 'react-router-dom'


function LoginOffcanvas({sidebar}) {

  return (
      <div className={sidebar ? "loginsidebar loginsidebar--open" :"loginsidebar"}>
        <div className="header">
          <div className="user-sley">('유저슬리') <span>SLEY</span></div>
          <div className="login-profile"><i className='bx bxs-user-circle'></i></div>
        </div>
        <div className="header-p">
          <div>
            (사용자) 님 <br/>
            항상 잘 하고 있어요!
          </div>
        </div>
        <div className="header-btn">
          <Link to="/mypage" className="my-btn">마이페이지</Link>
          <button className="logout-btn">로그아웃</button>
        </div>
        {/* =================위젯============== */}
        <Ddaywidget />
        <Studywidget />
      </div>
  )
}

export default LoginOffcanvas;