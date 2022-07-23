import logo from '../Assets/파슬리 로고.png';
import './Logo.scss'

function Logo() {
  return (
    <div className="logo">
      PARSLEY
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Logo