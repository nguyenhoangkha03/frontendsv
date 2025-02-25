import { Link } from 'react-router-dom'
import { InfoStudent } from '../../components/Common/GetInfoStudent' 

function Home() {

  const infoStudent = InfoStudent()

  return (
    <main class="container mx-auto px-10 py-6 mt-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="flex items-center">
            <img
              alt="Student Photo"
              class="h-24 w-24 rounded-lg object-cover"
              height="100"
              src={infoStudent.imageBase64}
              width="100"
            />
            <div class="ml-4">
              <h2 class="text-xl font-bold">Thông tin sinh viên</h2>
              <div class="flex items-center mt-2">
                <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  2023-2024
                </span>
                <span class="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs ml-2">
                  2022-2023
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4 flex">
            <div className="flex-1">
                <p>
                    <strong>MSSV: </strong>
                    {infoStudent.mssv}
                </p>
                <p class="my-1">
                    <strong>Họ tên: </strong>
                    {infoStudent.ho_ten}
                </p>
                <p>
                    <strong>Giới tính: </strong>
                    {infoStudent.gioi_tinh === 1 ? 'Nam' : 'Nữ'}
                </p>
            </div>
            <div className="flex-1">
                <p>
                    <strong>Ngày sinh: </strong>
                    {infoStudent && infoStudent.ngay_sinh 
                    ? new Date(infoStudent.ngay_sinh).toLocaleDateString('vi-VN') 
                    : "Loading..."}
                </p>
                <p class="my-1">
                    <strong>Nơi sinh: </strong>
                    {infoStudent.dia_chi}
                </p>
                <p>
                    <strong>Trạng thái: </strong>
                    Đang học
                </p>
            </div>
          </div>
          <div className="text-blue-500 mt-2 cursor-pointer" >
            <Link to="/profile">
              Xem chi tiết
            </Link>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-xl font-bold">Nhắc nhở mới, chưa xem</h2>
          <div class="mt-1">
            <p class="text-5xl font-bold mt-4">5</p>
            <p className="mt-4 text-justify">
              TRƯỜNG ĐẠI HỌC HARVARD - Thông báo lịch học thay đổi - Lập trình
              web với PHP và MYSQL - Ngày 11/03/2025, Tiết 12-14, Phòng CR_VT12
            </p>
            <a class="text-blue-500 inline-block mt-5" href="#">
              Xem chi tiết
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-2">
            <Link to="/schoolSchedule" class="flex-1">
              <div class="cursor-pointer px-4 rounded-lg h-full shadow bg-[#e0fbff] flex-1 flex flex-col justify-center relative">
                  <h2 class="text-xl font-bold">Lịch học trong tuần</h2>
                  <div class="mt-2">
                      <p class="text-3xl font-bold">5</p>
                      <span class="text-blue-500 inline-block mt-1" href="#">
                          Xem chi tiết
                      </span>
                  </div>
                  <div class="absolute right-4 text-blue-500 h-8 w-8 rounded-[50%] flex items-center justify-center border border-blue-500">
                      <i class="fa fa-calendar"></i>
                  </div>
              </div>
            </Link>
            <Link to="/examSchedule" class="flex-1">
            <div class="cursor-pointer bg-[#fff2d4] px-4 rounded-lg h-full shadow flex-1 flex flex-col justify-center relative">
                <h2 class="text-xl font-bold">Lịch thi trong tuần</h2>
                <div class="mt-1">
                    <p class="text-3xl font-bold">0</p>
                    <span class="text-orange-500 inline-block mt-1" href="#">
                        Xem chi tiết
                    </span>
                </div>
                <div class="absolute right-4 text-orange-500 h-8 w-8 rounded-[50%] flex items-center justify-center border border-orange-500">
                    <i class="fa-regular fa-calendar-check"></i>
                </div>
            </div>
            </Link>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-6 gap-6 mt-6">
        <div class="bg-white p-4 rounded-lg shadow text-center cursor-pointer">
          <i class="fas fa-chart-bar text-2xl text-blue-500"></i>
          <p class="mt-2">Kết quả học tập</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow text-center cursor-pointer">
          <i class="fas fa-calendar-alt text-2xl text-blue-500"></i>
          <p class="mt-2">Lịch theo tuần</p>
        </div>
        <Link to="/register-section">
          <div class="bg-white p-4 rounded-lg shadow text-center cursor-pointer">
            <i class="fas fa-book text-2xl text-blue-500"></i>
            <p class="mt-2">Đăng ký học phần</p>
          </div>
        </Link>
        <div class="bg-white p-4 rounded-lg shadow text-center cursor-pointer">
          <i class="fas fa-tasks text-2xl text-blue-500"></i>
          <p class="mt-2">Lịch theo tiến độ</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow text-center cursor-pointer">
          <i class="fas fa-dollar-sign text-2xl text-blue-500"></i>
          <p class="mt-2">Tra cứu công nợ</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow text-center cursor-pointer">
          <i class="fas fa-credit-card text-2xl text-blue-500"></i>
          <p class="mt-2">Thanh toán trực tuyến</p>
        </div>
        {/* <div class="bg-white p-4 rounded-lg shadow text-center">
          <i class="fas fa-receipt text-2xl text-blue-500"></i>
          <p class="mt-2">Phiếu thu tổng hợp</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow text-center">
          <i class="fas fa-file-alt text-2xl text-blue-500"></i>
          <p class="mt-2">Đề xuất biểu mẫu</p>
        </div> */}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold">Kết quả học tập</h2>
            <select class="border rounded px-2 py-1">
              <option>Học kỳ 2 (2024-2025)</option>
            </select>
          </div>
          <div class="mt-4">
            <img
              alt="Graph showing academic results"
              class="w-full h-48"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/oeKgazyNAv_4gjsksI0MOrIgcskSaeMVs7RHqiY0P7k.jpg"
              width="300"
            />
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-xl font-bold">Tiến độ học tập</h2>
          <div class="mt-4 flex justify-center">
            <img
              alt="Circular progress chart showing study progress"
              class="w-48 h-48"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/Jgf8sRN9TjaRL5Xz2C2YUGwjLPtHlW0DAU8-5IJKrLc.jpg"
              width="200"
            />
          </div>
          <p class="text-center mt-2 text-xl font-bold">140/159</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold">Lớp học phần</h2>
            <select class="border rounded px-2 py-1">
              <option>Học kỳ 2 (2024-2025)</option>
            </select>
          </div>
          <div class="mt-4">
            <table class="w-full">
              <thead>
                <tr>
                  <th class="text-left">Môn học/học phần</th>
                  <th class="text-center">Số tín chỉ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2">030100261802</td>
                  <td class="text-center">4</td>
                </tr>
                <tr>
                    <td>
                        Phát triển phần mềm
                    </td>
                </tr>
                <tr></tr>
                <tr>
                  <td class="py-2">030100225102</td>
                  <td class="text-center">6</td>
                </tr>
                <tr>
                    <td>
                        Thực tập tốt nghiệp - CNTT
                    </td>
                </tr>
                <tr></tr>
                <tr>
                  <td class="py-2">030100053602</td>
                  <td class="text-center">2</td>
                </tr>
                <tr>
                    <td>
                        Thương mại điện tử - CNTT
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
