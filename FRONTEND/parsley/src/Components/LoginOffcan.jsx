import '../Components/LoginOffcan.scss'
import Ddaywidget from './Ddaywidget'
import Studywidget from './Studywidget';

function LogoutOffcan() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-body">
      <div className="header">
        <div className="user-sley">10000 <span>SLEY</span></div>
        <div className="login-profile"><i className='bx bxs-user-circle'></i></div>
      </div>
      <div className="header-p">
        <div>(사용자) 님 <br />
            항상 잘하고 있어요!
        </div>
      </div>
      <div className="header-btn">
        <button className="btn btn-default">마이페이지</button>
        <button className="btn btn-default">로그아웃</button>
      </div>
      {/* =================위젯============== */}
      <Ddaywidget />
      <Studywidget />
    </div>
</div>            
  )
}

export default LogoutOffcan;