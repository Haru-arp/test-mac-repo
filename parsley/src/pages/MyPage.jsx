import './MyPage.scss';
import Dday from '../components/Mypage/D-day/Dday';
import MyProfile from '../components/Mypage/MyProfile/MyProfile'
import TodayStudy from '../components/Mypage/TodayStudy/TodayStudy';
import Todayamount from '../components/Mypage/TodayAmount/Todayamount';
import Weekamount from '../components/Mypage/WeekAmount/Weekamount';

function MyPage() {
  return (
    <div className="container mx-auto">
      <div className="contents-1">
        <MyProfile />
        <Dday /> 
      </div>
      <div className="contents-2">
        <TodayStudy />
        <Todayamount />
      </div>
      <div className="contents-3">
        <Weekamount />
      </div>
    </div>
  )
}

export default MyPage;