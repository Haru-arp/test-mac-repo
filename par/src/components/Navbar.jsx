import { useState } from 'react';
import './Navbar.scss'
import './LogoutOffcanvas'
import LogoutOffcanvas from './LogoutOffcanvas';
import Backdrop from './Backdrop';
import LoginOffcanvas from './LoginOffcanvas';

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  console.log(sidebar)

  const [isLogin, setIsLogin] = useState(false)
 

  return (
    <nav className="container mx-auto">
      <div className="logo">PARSLEY</div>
      <div className="btn-group">
        <button className="bg-main make-study-btn">스터디룸 생성</button>
        <div className="mag-icon">
          <i className="bx bx-search"></i>
        </div>
        <button onClick={toggleSidebar} className="menu-icon">
          <i className="bx bx-menu" ></i> 
        </button>
      </div>
      {isLogin ? <LoginOffcanvas sidebar={sidebar} /> : <LogoutOffcanvas sidebar={sidebar}/>}
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
    </nav>
    
  )
}

export default Navbar;