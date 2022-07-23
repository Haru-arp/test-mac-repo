import { useState } from 'react';
import Backdrop from './components/Backdrop';
import Home from './pages/Home';
import LoginOffcanvas from './components/LoginOffcanvas';
import LogoutOffcanvas from './components/LogoutOffcanvas';
import Navbar from './components/Navbar';
import EnterStudy from './pages/EnterStudy';

import { Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage';
import Farmpage from './pages/Farmpage';

function App() {

  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  console.log(sidebar)

  const [isLogin, setIsLogin] = useState(true)

  return (
        <div className="App">
          <Navbar openSidebar={toggleSidebar} />
          <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
          {isLogin ? <LoginOffcanvas sidebar={sidebar} /> : <LogoutOffcanvas sidebar={sidebar}/>}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/enterstudy" element={<EnterStudy />} />
            <Route path="/farm" element={<Farmpage />} />
          </Routes>
          
        </div>
  );
}

export default App;


<Navbar>

</Navbar>