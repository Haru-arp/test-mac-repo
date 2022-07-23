import './NavbarDM.scss'
import moment from "moment"
import "moment/locale/ko"


function NavbarDM() {
    return (
        <div className="noti-container">
            <div className="noti-header">
                <div className="noti-today">
                    {moment().format("YYYY. M. D (ddd)")}
                </div>
                <button className="noti-deletebtn">모두 지우기</button>
            </div>
            <div className="noti-title">
                알림
            </div>

        </div>       
    )

}
export default NavbarDM