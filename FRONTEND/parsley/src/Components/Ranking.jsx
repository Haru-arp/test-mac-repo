import '../Components/Ranking.scss'
import RankingItem from './RankingItem';

function Ranking() {
    return (
        <div className="ranking" style={{ width: '33%', height: '450px'}}>
            <p id="rankingTitle" style={{ marginBottom: '27px'}}>오늘의 농부왕</p>
            <RankingItem />
        </div>
    )
}

export default Ranking;