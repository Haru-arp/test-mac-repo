import { useState } from 'react';
import StudyRoom from './StudyRoom';
import './Studyrooms.scss';


function StudyRooms() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle:(
          <div className={activeIndex===0 ? "is-active" : "no-active"} onClick={()=>tabClickHandler(0)}> 전체 공부방 </div>
      ),
      tabCont:(
          <StudyRoom />
      )
  },
  {
      tabTitle:(
          <div className={activeIndex===1 ? "is-active" : "no-active"} onClick={()=>tabClickHandler(1)}> 나의 공부방 </div>
      ),
      tabCont:(
          <div> 나의 공부방 </div>
      )
  },
  {
    tabTitle:(
        <div className={activeIndex===2 ? "is-active" : "no-active"} onClick={()=>tabClickHandler(2)}> 관심 공부방 </div>
    ),
    tabCont:(
        <div> 관심 공부방 </div>
    )
  }
]

  return (
    <div className="studyroom">
      <div className="tabs">
        <div className ="box">
          {tabContArr.map((section)=>{
            return <button>{section.tabTitle}</button>
          })}
        </div>
      </div>
      <div>
        {tabContArr[activeIndex].tabCont}
      </div>
    </div>
  )
}

export default StudyRooms;