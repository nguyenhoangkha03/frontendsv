import { useNavigate } from 'react-router-dom'
import { InfoStudent } from '../../Common/GetInfoStudent' 
import Logo from '../../../assets/imgs/logo.png'

function Header(){

    const navigate = useNavigate()
    const infoStudent = InfoStudent(null)

    return (
        <header class="bg-white shadow fixed left-0 top-0 right-0 z-10">
            <div class="container mx-auto px-8 py-4 flex justify-between items-center">
                <div class="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                    <img alt="University Logo" class="h-10 object-cover" height="60" src={Logo} width="60"/>
                    <div class="ml-4">
                        <h1 class="text-xl font-bold text-pink-600">
                            TRƯỜNG ĐẠI HỌC HARVARD
                        </h1>
                        <p class="text-sm text-gray-500">
                            HARVARD UNIVERSITY
                        </p>
                    </div>
                </div>
                <div class="flex items-center border rounded-full px-4 py-2">
                    <input class="border-none outline-none text-gray-500" placeholder="Tìm kiếm..." type="text"/>
                    <i class="fas fa-search ml-2 text-gray-500 cursor-pointer"></i>
                </div>
                <div class="flex items-center justify-between w-64 text-gray-500">
                    <span class="cursor-pointer">
                        <i class="fa-solid fa-house-chimney"></i>
                        <a class="mx-4" href="#">Trang chủ</a>
                    </span>
                    <span class="cursor-pointer">
                        <i class="fa-regular fa-bell"></i>
                        <a class="mx-4" href="#">Tin tức</a>
                    </span>
                </div>
                <div class="flex items-center cursor-pointer">
                    <img alt="User Avatar" class="h-10 w-10 rounded-full object-cover" height="40" src={infoStudent.imageBase64} width="40"/>
                    <span class="ml-2 text-gray-600 hover:text-blue-500 transition">
                        {infoStudent.ho_ten}
                    </span>
                    <i class="fa fa-caret-down user-account-name-caret-down text-gray-500 mx-3"></i>
                </div>
            </div>
        </header>
    )
}

export default Header