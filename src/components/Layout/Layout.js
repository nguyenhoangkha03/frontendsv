import { useNavigate, Routes, Route } from 'react-router-dom'
import Header from '../Layout/Header/Header'
import Home from '../../pages/Home/Home'
import RegisterSection from '../../pages/RegisterSection/RegisterSection'
import Profile from '../../pages/Profile/Profile'
import Schedule from '../../pages/Schedule/Schedule'

function Layout(){

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register-section' element={<RegisterSection />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/schedule' element={<Schedule />} />
            </Routes>
        </>
    )
}

export default Layout