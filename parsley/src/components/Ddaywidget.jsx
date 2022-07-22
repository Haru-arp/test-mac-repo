import moment from "moment"
import "moment/locale/ko"
import './Ddaywidget.scss'

function Ddaywidget() {
  return (
    <div className="widget-container">
      <div className="date-widget">{moment().format("YYYY. M. D (ddd)")}</div>
      <div className="dday">D-Day</div>
    </div>
  )
}

export default Ddaywidget