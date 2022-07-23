import './StudyRoom.scss'

function StudyRoom() { 
    return (
        <div className="studyroom-container">
            <div className="studyroom-like">
                <i class='bx bx-heart'></i>
            </div>
            <div className="studyroom-content">
                <div className="studyroom-box">
                    <div className="studyroom-theme">
                        자격증
                    </div>
                    <div className="studyroom-name">
                        CPA 꾸공방(꾸준히 공...)
                    </div>
                    <div className="studyroom-p">
                        CPA 꾸공방(꾸준히 공부하...)
                    </div>
                </div>
                <div className="studyroom-membernum">
                    3명
                </div>
            </div>
        </div>

    )
}

export default StudyRoom;