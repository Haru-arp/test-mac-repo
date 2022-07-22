import './Ranking.scss'
import RankingItems from './RankingItems';

function Ranking() {
  return (
    <div className="ranking">
      <div className="ranking-title">
        오늘의 농부왕
      </div>
      <RankingItems />
    </div>
  )
}

export default Ranking;