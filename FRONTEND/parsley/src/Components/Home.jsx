import '../Components/Home.scss'
import Collections from '../Components/Collections'
import Ranking from '../Components/Ranking'
import Studyrooms from '../Components/Studyrooms'

function Home(){
    return(
        <div className="container d-flex flex-column w-100 content-height" style={{paddingLeft: 0, paddingRight: 0}}>
            {/* <div className="d-flex w-100 mb-5 h-25"> */}
            <div className="d-flex" style={{marginBottom: '110px'}}>
                <Collections />
                <Ranking />
            </div>
            <Studyrooms />
        </div>
    )
}

export default Home;