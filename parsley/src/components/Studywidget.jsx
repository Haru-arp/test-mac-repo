import './Studywidget.scss'

function Studywidget() {
  return(
    <div className="studywidget-container">
      <div className="widget">
        <div className="widget-word">
          <div className="widget-title">
            오늘의 스터디
          </div>
          <div className="widget-p">
            스터디 목표시간을 <br />
            설정해주세요
          </div>
        </div>
      </div>
      <div className="stt">
        <button className="setting-btn">목표 설정</button>
      </div>
    </div>
  )
}

export default Studywidget