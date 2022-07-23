import './Home.scss'

import Collection from "../components/Collections"
import Ranking from "../components/Ranking"
import StudyRooms from "../components/StudyRooms/StudyRooms"

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