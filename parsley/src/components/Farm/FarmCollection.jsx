import './FarmCollection.scss'

function FarmCollection() {
  return (
    <div className="collection-container">
      <div className="collection-title">
        도감
      </div>
      <div className="collection-header">
        <div className="sley-pic"></div>
        <div className="header-2">
          <div className="header-title">
            [     ] 슬리
          </div>
          <div className="cultivation">
            YYYY.MM.DD 재배
          </div>
          <div className="header-contents">
            근육으로 똘똘 뭉친 ...
          </div>
        </div>
      </div>
      <div className="sley-num">
            파슬리 ( 4 / 100 )
      </div>
    </div>
  )
}

export default FarmCollection