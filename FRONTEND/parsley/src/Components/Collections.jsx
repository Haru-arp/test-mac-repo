import '../Components/Collections.scss'

function Collections() {
    return (
        <div className="collection me-3" style={{width:'67%'}}>
            <div className="header">
                <div className="userName" style={{fontSize:'20px', fontWeight:'bold'}}>username 님의 도감</div>
                <div type="button" className="goFarm">내 농장 가기</div>
            </div>
        </div>
    )
}

export default Collections;