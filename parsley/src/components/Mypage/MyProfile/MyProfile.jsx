import './MyProfile.scss'

function MyProfile() {
  return (
    <div className="myprofile">
      <div className="imgprofile"></div>
      <div className="data">
        <div className="name">
          <div className="name-header">닉네임</div>
          <div className="name-username">(사용자 이름)</div>
        </div>
        <div className="email">
          <div className="email-header">이메일</div>
          <div className="email-address">(사용자 이메일)</div>
        </div>
        <div className="message">
          <div className="message-header">상태 메세지</div>
          <div className="message-p">(사용자 메세지)</div>
        </div>
      </div>
      <div className="btn-complex">  
        <button className="btn-cancel">취소</button>
        {/* {isEdit ? <div className="btn-save">프로필 저장</div> : <div className="btn-edit">프로필 편집</div> } */}
        <button className="btn-edit">프로필 편집</button>
        {/* <button className="btn-save">프로필 저장</button>  */}
      </div>
    </div>
  )
}

export default MyProfile