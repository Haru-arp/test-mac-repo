import './TodayStudy.scss'
import moment from "moment"
import "moment/locale/ko"

function TodayStudy() {
  return(
    <div className="TodayStudy-container">
      <div className="TodayStudy-header">
        <div className="header-p">
          <div className="TodayStudy-title">오늘의 스터디</div>
          <div className="TodayStudy-date">
            {moment().format("YYYY. M. D (ddd)")}
          </div>
        </div>
        <button className="TodayStudy-btn">
            목표 설정하기
        </button>

      </div>
    </div>
  )
}

export default TodayStudy