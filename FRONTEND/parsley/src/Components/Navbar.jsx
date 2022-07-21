import '../Components/Navbar.scss'



function Navbar() {
    return(
        <header>
            <div className="logo">PARSLEY</div>
            <div className="btngroup">
                <button className="btn btn-sub2">스터디룸 생성</button>
                <div className="magicon">
                    <i className="bx bx-search"></i>
                </div>
                <div className="menuicon">
                    <i className="bx bx-menu" ></i>    
                </div>                  
            </div>
        </header>
    )
}

export default Navbar;