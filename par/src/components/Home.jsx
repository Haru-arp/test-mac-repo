import './Home.scss'

import Collection from "./Collections"
import Ranking from "./Ranking"
import StudyRooms from "./StudyRooms"

function Home() {
  return(
    <div className="container mx-auto">
     <div className="contents">
      <Collection />
      <Ranking />
     </div>
     <StudyRooms />
    </div>
    )
}

export default Home