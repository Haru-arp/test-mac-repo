import './StudyInfo.scss'

function StudyInfo() {
  return (
    <div className="container mx-auto">
      <div className="study-container">
        <div className="study-image">
          스터디이미지
        </div>
        <div className="study-contents">
          <div className="study-header">
             모각코 스터디 모여라!
          </div>
          <div className="study-membernum">
            인원: 4/6 
          </div>
          <div className="study-hash">
            <span>#모각코</span>
            <span>#취뽀</span>
            <span>#개발자</span>
           </div>
          <div className="study-rule">
            <div className="rule-header">
              스터디 규칙 안내
            </div>
            <div className="rule-list">
              <li>1. 오전 9시부터 오후 6시까지 필참!</li>
              <li>2. 방장 말이 곧 법이다.</li>
              <li>3. 지각 시 1분당 1000원</li>
            </div>
          </div>
          <div className="button-group">
            <button className="enter-btn">
              참가하기
            </button>
            <button className="link-btn">
              <i class='bx bx-link' ></i>
            </button>
            <button className="like-btn">
              <i class='bx bx-heart'></i>
            </button>
            {/* axios처리할거 */}
            <button className="like-btn-click">
              <i class='bx bxs-heart' ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyInfo;