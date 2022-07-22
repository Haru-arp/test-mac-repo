import { useState } from 'react';
import './Studyking.scss';

function Studyking() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle:(
          <div className={activeIndex===0 ? "is-active" : "no-active"} onClick={()=>tabClickHandler(0)}> 공부왕 </div>
      ),
      tabCont:(
          <div>공부왕</div>
      )
  },
  {
      tabTitle:(
          <div className={activeIndex===1 ? "is-active" : "no-active"} onClick={()=>tabClickHandler(1)}> 농부왕 </div>
      ),
      tabCont:(
          <div>농부왕</div> 
      )
  }
]

  return (
    <div className="studyking-container">
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

export default Studyking;