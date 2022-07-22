import './Dday.scss';
import moment from "moment"
import "moment/locale/ko"


function Dday() {
  return (
    <div className="dday-container">
      <div className="dday-date">
        {moment().format("YYYY. M. D (ddd)")}
      </div>
      <div className="dday-content">
        두근두근 코테
      </div>
      <div className="dday-dday">
        D-40
      </div>
      <button className="dday-btn">
        <i class='bx bx-cog'></i><span>D-Day 설정</span>
      </button>
    </div>
  )
}

export default Dday