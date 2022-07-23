import { Link } from 'react-router-dom';
import './Collections.scss';

function Collection() {
  return (
    <div className="collection">
      <div className="header">
        <div className="username">유교보이 님의 도감</div>
        <Link to="/farm" className="gofarm bg-main">내 농장 가기</Link>
      </div>
    </div>
  )
}

export default Collection;