
import './App.css'
import Allpost from './component/AllPost/Allpost'
import LoggedPost from './component/AllPost/LoggedPost'
import Hero from './component/Hero/Hero'
import Hero2 from './component/Hero/Hero2'
import Navbar from './component/Navbar/Navbar'
import Tabs from './component/Tabs/Tabs'
import UserNavbar from './component/UserNavbar/UserNavbar'
import Usertab from './component/Usertab/Usertab'
import pen from './assets/pen.svg'
import Loggedpost2 from './component/AllPost/Loggedpost2'
function App() {


  return (
    <div className='position-relative'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Tabs></Tabs>
      <Allpost></Allpost>
      <div className='d-block d-sm-none' style={{ position: 'fixed', right: '10%', top: "85%", zIndex: '1' }}>
        <img src={pen} alt="" srcset="" />
      </div>
      <UserNavbar></UserNavbar>
      <Hero2></Hero2>
      <Usertab></Usertab>
      <LoggedPost></LoggedPost>
      <UserNavbar></UserNavbar>
      <Usertab></Usertab>
      <Loggedpost2></Loggedpost2>
      

    </div>
  )
}

export default App
