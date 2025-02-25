import { useEffect, useState, useRef, use } from 'react'
import { getSemesters } from '../../service/semesterService'
import { getAllSectionClassesByIdSemester, getAllJoinSectionClassesByIdSemesterAndIdStudent, getSectionClassById } from '../../service/sectionClassService'
import { InfoStudent } from '../../components/Common/GetInfoStudent'
import CellTeacherMSGV from '../../components/Common/TeacherGetMSGV'
import CellTeacherName from '../../components/Common/TeacherGetName'
import CellSemesterName from '../../components/Common/SemesterGetName'
import CellSubject from '../../components/Common/SubjectGetName'
import CellClass from '../../components/Common/ClassGetName'
import Button from '../../components/Common/Button/Button'

function RegisterSection(){

    const [semesters, setSemesters] = useState([])
    const [sectionClasses, setSectionClasses] = useState([])
    const [registeredSectionClasses, setRegisteredSectionClasses] = useState([])
    const infoStudent = InfoStudent()
    const sectionInfoRef = useRef(null)
    const [sectionInfo, setSectionInfo] = useState({})

    let count = 0
    let countSTT = 0

    useEffect(() => {
        async function getDataSemesters() {
            const data = await getSemesters()
            setSemesters(data)
        }
        getDataSemesters()
    }, [])

    const handleSelect = (e) => {
        if(e.target.value !== '0'){
            async function getSectionClasses() {
                const data = await getAllSectionClassesByIdSemester(e.target.value)
                setSectionClasses(data)
            }
            getSectionClasses()

            async function getRegisterSectionClasses() {
                const data = await getAllJoinSectionClassesByIdSemesterAndIdStudent(e.target.value, infoStudent.id_sinh_vien)
                console.log(data)
                setRegisteredSectionClasses(data)
            }
            getRegisterSectionClasses()
        }
        else {
            setSectionClasses([])
            setRegisteredSectionClasses([])
        }
    }

    const handleRadio = (e) => {
        sectionInfoRef.current.classList.remove('hidden')
        async  function sectionClassById(){
            const data = await getSectionClassById(e.target.value)
            setSectionInfo(data)
        }
        sectionClassById()
    }

    const handleRegister = (e) => {

        // console.log(sectionInfo.id_lop_hoc_phan, ' ' , infoStudent.id_sinh_vien)
        const today = new Date().toISOString().split('T')[0]
        console.log(today)

    }

    return (
        <main class="container mx-auto px-10 py-3 mt-20">
            <div class="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 class="text-2xl font-bold mb-4">Đăng ký học phần</h1>
                <div class="flex justify-center gap-8">
                    <div class="mb-4">
                        <select id="semester" onChange={handleSelect} class="border border-gray-300 rounded-md p-2 w-72 outline-none">
                            <option value="0">Chọn học kỳ đăng ký</option>
                            {semesters && semesters.map(semester => (
                                <option value={semester.id_hoc_ky}>{semester.ten_hoc_ky} ({semester.nien_khoa})</option>
                            ))}
                        </select>
                    </div>
                    <div class="flex items-center mb-4">
                        <label class="mr-4 cursor-pointer">
                            <input defaultChecked type="radio" name="type" class="mr-2" /> Học mới
                        </label>
                        <label class="mr-4 cursor-pointer">
                            <input type="radio" name="type" class="mr-2" /> Học lại
                        </label>
                        <label class="cursor-pointer">
                            <input type="radio" name="type" class="mr-2" /> Học cải thiện
                        </label>
                    </div>
                </div>
                {sectionClasses.length !== 0 ?
                ( 
                    <>
                <div class="mb-6">
                    <h2 class="text-xl font-bold text-red-600 mb-2">Môn học/học phần đang chờ đăng ký</h2>
                    <table class="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="border border-gray-300 px-4 py-2">STT</th>
                                <th class="border border-gray-300 px-4 py-2">Mã học phần</th>
                                <th class="border border-gray-300 px-4 py-2">Tên môn học/học phần</th>
                                <th class="border border-gray-300 px-4 py-2">TC</th>
                                <th class="border border-gray-300 px-4 py-2">Bắt buộc</th>
                                <th class="border border-gray-300 px-4 py-2">học phần: học trước (a), tiên quyết (b), song hành (c)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {sectionClasses.map(sectionClass => (
                            <tr>
                                <td class="border border-gray-300 px-4 py-2 text-center">
                                    <input onChange={handleRadio} value={sectionClass.id_lop_hoc_phan} type="radio" name="choose" />
                                </td>
                                <td class="border border-gray-300 px-4 py-2 text-center">{++count}</td>
                                <td class="border border-gray-300 px-4 py-2 text-center">{sectionClass.ms_lop_hoc_phan}</td>
                                <td class="border border-gray-300 px-4 py-2"><CellSubject Id={sectionClass.id_mon_hoc} /></td>
                                <td class="border border-gray-300 px-4 py-2 text-center">{sectionClass.tong_so_tiet / 15 + sectionClass.tong_so_tiet_th / 30}</td>
                                <td class="border border-gray-300 px-4 py-2 text-center"><i class="fas fa-check text-green-600"></i></td>
                                <td class="border border-gray-300 px-4 py-2"></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between mt-4 mb-4">
                    <div>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Hoàn Thành</button>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Hủy</button>
                    </div>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md"><i class="fas fa-print"></i></button>
                </div>
                {registeredSectionClasses.length === 0 
                ?      
                <div>
                    <h2 class="text-xl font-bold text-red-600 mb-2">Lớp HP đã đăng ký trong học kỳ này</h2>
                    <table class="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th class="border border-gray-300 px-4 py-2">Thao tác</th>
                                <th class="border border-gray-300 px-4 py-2">STT</th>
                                <th class="border border-gray-300 px-4 py-2">Mã lớp HP</th>
                                <th class="border border-gray-300 px-4 py-2">Tên môn học/HP</th>
                                <th class="border border-gray-300 px-4 py-2">Lớp học dự kiến</th>
                                <th class="border border-gray-300 px-4 py-2">TC</th>
                                <th class="border border-gray-300 px-4 py-2">Nhóm TH</th>
                                <th class="border border-gray-300 px-4 py-2">Học phí</th>
                                <th class="border border-gray-300 px-4 py-2">Hạn nộp</th>
                                <th class="border border-gray-300 px-4 py-2">Thu</th>
                                <th class="border border-gray-300 px-4 py-2">Trạng thái ĐK</th>
                                <th class="border border-gray-300 px-4 py-2">Ngày ĐK</th>
                                <th class="border border-gray-300 px-4 py-2">TT lớp HP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registeredSectionClasses.map(registeredSectionClass => (
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2 text-center"><i class="fas fa-bars"></i></td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{++countSTT}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{registeredSectionClass.ms_lop_hoc_phan}</td>
                                    <td class="border border-gray-300 px-4 py-2"><CellSubject Id={registeredSectionClass.id_mon_hoc} /></td>
                                    <td class="border border-gray-300 px-4 py-2 text-center"><CellClass Id={registeredSectionClass.id_lop} /></td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{registeredSectionClass.tong_so_tiet / 15 + registeredSectionClass.tong_so_tiet_th / 30}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{registeredSectionClass.tong_so_tiet_th > 0 ? 2 : ''}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{registeredSectionClass.hoc_phi}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{new Date(registeredSectionClass.ngay_dang_ky).toLocaleDateString('vi-VN')}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-center"><i class="fas fa-check text-green-600"></i></td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">Đăng ký mới</td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{new Date(registeredSectionClass.ngay_dang_ky).toLocaleDateString('vi-VN')}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-center">{registeredSectionClass.trang_thai === 1 ? 'Mở' : 'Khóa'}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="5" class="border border-gray-300 px-4 py-2 text-right font-bold">Tổng</td>
                                <td class="border border-gray-300 px-4 py-2 text-center font-bold">12</td>
                                <td colspan="2" class="border border-gray-300 px-4 py-2 text-center font-bold">7.500.000</td>
                                <td colspan="6" class="border border-gray-300 px-4 py-2"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div> 
                :
                    <h1></h1>
                }
                </>
                )
                :
                (
                    <h1></h1>
                )
                }
                
            </div>
            <div ref={sectionInfoRef} class="h-screen w-screen fixed bg-black/20 top-0 left-0 z-10 flex justify-center items-center hidden">
                <div class="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md fixed z-20">
                    <h1 class="font-bold text-xl text-center text-red-600">CHI TIẾT LỚP HỌC PHẦN</h1>
                    <div class="container flex justify-between gap-10 mt-5 mb-5">
                        <div>
                            <p class="font-bold mt-2">Mã lớp học phần: <span class="font-normal italic">{sectionInfo.ms_lop_hoc_phan}</span></p>
                            <p class="font-bold mt-2">Tên học phần: <span class="font-normal italic"><CellSubject Id={sectionInfo.id_mon_hoc} /></span></p>
                            <p class="font-bold mt-2">Tổng Số tiết LT: <span class="font-normal italic">{sectionInfo.tong_so_tiet}</span></p>
                            <p class="font-bold mt-2">Tổng Số tiết TH: <span class="font-normal italic">{sectionInfo.tong_so_tiet_th}</span></p>
                        </div>
                        <div>
                            <p class="font-bold mt-2">Mã số giảng viên: <span class="font-normal italic"><CellTeacherMSGV Id={sectionInfo.id_giang_vien} /></span></p>
                            <p class="font-bold mt-2">Tên giảng viên: <span class="font-normal italic"><CellTeacherName Id={sectionInfo.id_giang_vien} /></span></p>
                            <p class="font-bold mt-2">Học kỳ: <span class="font-normal italic"><CellSemesterName Id={sectionInfo.id_hoc_ky} /></span></p>
                            <p class="font-bold mt-2">Học phí: <span class="font-normal italic">{sectionInfo.hoc_phi}</span ></p>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3">
                        <Button
                            onClick={() => sectionInfoRef.current.classList.add('hidden')}
                        >Hủy</Button>
                        <Button
                            onClick={handleRegister}
                        >Đăng Ký</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterSection