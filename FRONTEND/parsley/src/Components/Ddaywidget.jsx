import './Ddaywidget.scss';
import moment from 'moment';
import "moment/locale/ko";

function ddaywidget() {
  console.log(moment())

  return (
    <div className="widget-container">
      <div className="date-widget">{moment().format("YYYY. M. D (ddd)")}</div>
      <div className="dday">D-Day</div>
    </div>
  )
}

export default ddaywidget