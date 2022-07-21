import '../Components/Home.scss'
import Collections from '../Components/Collections'
import Ranking from '../Components/Ranking'
import Studyrooms from '../Components/Studyrooms'

function Home(){
    return(
        <div className="main-container">
            <div className="contents">
                <Collections />
                <Ranking />
            </div>
            <Studyrooms />
        </div>
            
        
        
    )
}

export default Home;