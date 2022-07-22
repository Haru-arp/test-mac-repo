
import './Navbar.scss'
import './LogoutOffcanvas'
import { Link } from 'react-router-dom';

function Navbar({openSidebar}) {

 

  return (
    <nav className="container mx-auto">
      <Link to='/' className="logo">PARSLEY</Link>
      <div className="btn-group">
        <button className="bg-main make-study-btn">스터디룸 생성</button>
        <div className="mag-icon">
          <i className="bx bx-search"></i>
        </div>
        <button onClick={openSidebar} className="menu-icon">
          <i className="bx bx-menu" ></i> 
        </button>
      </div>
    </nav>
    
  )
}

export default Navbar;