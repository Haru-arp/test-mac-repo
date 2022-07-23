
import './Navbar.scss'
import './LogoutOffcanvas'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavbarDM from './NavbarDM';
import Logo from './Logo';

function Navbar({openSidebar}) {

  const [openDrop, setOpenDrop] = useState(false)
  const openDm = () => {
    setOpenDrop((prevState) => !prevState)
  }
  console.log(openDrop)
  return (
    <>
    <nav className="container mx-auto">
      <Link to='/' className="logo">
        <Logo />
      </Link>
      {openDrop ? <NavbarDM /> : null}
      <div className="btn-group">
        <button onClick={openDm} className="noti-icon">
          <i class='bx bx-bell'></i>
        </button>     
        <button className="bg-main make-study-btn">스터디룸 생성</button>
        <div className="mag-icon">
          <i className="bx bx-search"></i>
        </div>
        <button onClick={openSidebar} className="menu-icon">
          <i className="bx bx-menu" ></i> 
        </button>
      </div>
    </nav>
  </>
  )
}

export default Navbar;