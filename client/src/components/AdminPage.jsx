// import React, { useState } from "react";
// import Header from "./Header";
// import NavBar from "./NavBar";
// import Breadcrumb from "./Breadcrumb";

// const AdminPage = () => {
//   // State สำหรับเก็บ role ที่เลือก
//   const [selectedRole, setSelectedRole] = useState("");

//   // ฟังก์ชันที่ใช้ในการอัพเดต role ที่เลือก
//   const handleRoleChange = (event) => {
//     setSelectedRole(event.target.value);
//   };

//   return (
//     <div style={{ backgroundColor: '#f1f8e9' }} className="min-h-screen font-sans">
//       {/* ส่วนของ Header, NavBar, Breadcrumb */}
//       <Header />
//       <NavBar />
//       <Breadcrumb />
      
//       <div className="container mx-auto p-4">
//         <h2 className="text-xl font-bold mb-4">จัดการสิทธิ์ของแอดมิน</h2>

//         {/* ฟอร์มสำหรับเลือก Role */}
//         <div className="mb-4">
//           <label htmlFor="role" className="block text-lg font-medium mb-2">
//             เลือก Role
//           </label>
//           <select
//             id="role"
//             value={selectedRole}
//             onChange={handleRoleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//           >
//             <option value="">-- เลือก Role --</option>
//             <option value="admin">แอดมิน</option>
//             <option value="manager">อาจารย์ผู้รับผิดชอบ</option>
//             <option value="editor">เจ้าหน้าที่ประจำภาควิชา</option>
//             <option value="viewer">เจ้าหน้าที่พัสดุประจำคณะ</option>
//             <option value="guest">ผู้บริหาร</option>
//           </select>
//         </div>

//         {/* แสดง role ที่เลือก */}
//         <div className="mt-4">
//           {selectedRole && (
//             <p className="text-lg">
//               คุณเลือก Role: <span className="font-bold">{selectedRole}</span>
//             </p>
//           )}
//         </div>

//         {/* ปุ่มบันทึกการเปลี่ยนแปลง */}
//         <button
//           onClick={() => alert(`Role ที่เลือก: ${selectedRole}\nสิทธิ์ของแอดมินถูกตั้งค่า!`)}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           บันทึกการเปลี่ยนแปลง
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Breadcrumbaddmin from "./breadcrumabddmin";

const AdminPage = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [username, setUsername] = useState(""); // สร้าง state สำหรับชื่อผู้ใช้
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSave = () => {
    if (!username) {
      alert("กรุณากรอกชื่อผู้ใช้");
      return;
    }
    if (!selectedRole) {
      alert("กรุณาเลือก Role");
      return;
    }

    // ตัวอย่าง: บันทึกข้อมูล (สามารถแทนที่ด้วยการส่ง API)
    console.log(`บันทึกข้อมูล: Username - ${username}, Role - ${selectedRole}`);

    alert(`บันทึกสำเร็จ! Username: ${username}, Role: ${selectedRole}`);

    // ตัวอย่างการนำทางไปหน้าอื่น
    navigate(`/admin/${selectedRole}`);
  };

  return (
    <div style={{ backgroundColor: "#f1f8e9" }} className="min-h-screen font-sans">
      <Header />
      <NavBar />
      <Breadcrumbaddmin />

      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">จัดการสิทธิ์ของแอดมิน</h2>

        {/* ช่องกรอกชื่อผู้ใช้ */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium mb-2">
            ชื่อผู้ใช้
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="กรอกชื่อผู้ใช้"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* เลือก Role */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-lg font-medium mb-2">
            เลือก Role
          </label>
          <select
            id="role"
            value={selectedRole}
            onChange={handleRoleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">-- เลือก Role --</option>
            <option value="admin">แอดมิน</option>
            <option value="manager">อาจารย์ผู้รับผิดชอบ</option>
            <option value="editor">เจ้าหน้าที่ประจำภาควิชา</option>
            <option value="viewer">เจ้าหน้าที่พัสดุประจำคณะ</option>
            <option value="guest">ผู้บริหาร</option>
          </select>
        </div>

        {/* แสดงผลการเลือก */}
        <div className="mt-4">
          {username && (
            <p className="text-lg">
              ชื่อผู้ใช้: <span className="font-bold">{username}</span>
            </p>
          )}
          {selectedRole && (
            <p className="text-lg">
              Role ที่เลือก: <span className="font-bold">{selectedRole}</span>
            </p>
          )}
        </div>

        {/* ปุ่มบันทึก */}
        <button
          onClick={handleSave}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          บันทึกการเปลี่ยนแปลง
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
