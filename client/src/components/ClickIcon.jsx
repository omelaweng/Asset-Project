// import React from "react";
// import UserIcon from "/Users/omelaweng/Desktop/จัดการสิทธิ์/Asset-Project-permissions/client/src/image/usericon.png"; // นำเข้าไฟล์ PNG
// import AdminIcon from "/Users/omelaweng/Desktop/จัดการสิทธิ์/Asset-Project-permissions/client/src/image/adminicon.png"; // นำเข้ารูป Admin

// const ClickIcon = () => {
//   // ฟังก์ชันเมื่อคลิกที่รูปภาพ
//   const handleImageClick = (message) => {
//     alert(message);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column", // จัดเรียงแนวตั้ง
//         justifyContent: "flex-start", // ให้ขึ้นข้างบน
//         alignItems: "center", // อยู่ในแนวกึ่งกลางแนวนอน
//         height: "100vh", // เต็มหน้าจอ
//         backgroundColor: "#f1f8e9", // สีพื้นหลัง
//         paddingTop: "20px", // เพิ่มพื้นที่ด้านบน
//       }}
//     >
//       {/* รูปแรก */}
//       <img
//         src={UserIcon} // ใช้ไฟล์ PNG ที่นำเข้า
//         alt="User Icon"
//         onClick={() => handleImageClick("คุณคลิกที่รูป User Icon!")} // ฟังก์ชันคลิก
//         style={{
//           cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อ hover
//           width: "150px", // กำหนดขนาด
//           height: "auto", // ให้ความสูงสัมพันธ์กับความกว้าง
//           marginBottom: "10px", // เว้นระยะห่างระหว่างรูปกับข้อความ
//         }}
//       />
//       {/* ข้อความใต้รูปแรก */}
//       <p
//         onClick={() => handleImageClick("คุณคลิกที่ข้อความ: User Icon")}
//         style={{
//           fontSize: "16px",
//           color: "#4caf50",
//           textAlign: "center",
//           cursor: "pointer",
//         }}
//       >
//         User Icon
//       </p>

//       {/* รูปที่สอง */}
//       <img
//         src={AdminIcon} // ใช้ไฟล์ PNG ที่นำเข้า
//         alt="Admin Icon"
//         onClick={() => handleImageClick("คุณคลิกที่รูป Admin Icon!")} // ฟังก์ชันคลิก
//         style={{
//           cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อ hover
//           width: "150px", // กำหนดขนาด
//           height: "auto", // ให้ความสูงสัมพันธ์กับความกว้าง
//           marginTop: "20px", // ระยะห่างระหว่างรูปแรกกับรูปที่สอง
//         }}
//       />
//       {/* ข้อความใต้รูปที่สอง */}
//       <p
//         onClick={() => handleImageClick("คุณคลิกที่ข้อความ: Admin Roles")}
//         style={{
//           fontSize: "16px",
//           color: "#4caf50",
//           textAlign: "center",
//           cursor: "pointer",
//         }}
//       >
//         Admin roles
//       </p>
//     </div>
//   );
// };

// export default ClickIcon;




import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate สำหรับการนำทาง
import UserIcon from "../image/usericon.svg"; // นำเข้าไฟล์ PNG
import AdminIcon from "../image/adminicon.png"; // นำเข้ารูป Admin

const ClickIcon = () => {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  // ฟังก์ชันเมื่อคลิกที่รูปภาพ
  const handleImageClick = (path) => {
    navigate(path); // นำทางไปยังหน้าที่กำหนด
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // จัดเรียงแนวตั้ง
        justifyContent: "flex-start", // ให้รูปขึ้นข้างบน
        alignItems: "center", // ให้อยู่ตรงกลางแนวนอน
        height: "100vh", // เต็มหน้าจอ
        backgroundColor: "#f1f8e9", // สีพื้นหลัง
        paddingTop: "50px", // เพิ่มพื้นที่ด้านบนมากขึ้น
      }}
    >
      {/* รูปแรก */}
      <img
        src={UserIcon} // ใช้ไฟล์ PNG ที่นำเข้า
        alt="User Icon"
        onClick={() => handleImageClick("/usepage")} // เมื่อคลิกจะนำทางไปที่ /usepage
        style={{
          cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อ hover
          width: "150px", // กำหนดขนาด
          height: "auto", // ให้ความสูงสัมพันธ์กับความกว้าง
          marginBottom: "20px", // เว้นระยะห่างระหว่างรูปกับข้อความ
        }}
      />
      {/* ข้อความใต้รูปแรก */}
      <p
        onClick={() => handleImageClick("/usepage")} // เมื่อคลิกจะนำทางไปที่ /usepage
        style={{
          fontSize: "16px",
          color: "#4caf50",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        User Icon
      </p>

      {/* รูปที่สอง */}
      <img
        src={AdminIcon} // ใช้ไฟล์ PNG ที่นำเข้า
        alt="Admin Icon"
        onClick={() => handleImageClick("/admin")} // เมื่อคลิกจะนำทางไปที่ /admin
        style={{
          cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อ hover
          width: "150px", // กำหนดขนาด
          height: "auto", // ให้ความสูงสัมพันธ์กับความกว้าง
          marginTop: "20px", // ระยะห่างระหว่างรูปแรกกับรูปที่สอง
        }}
      />
      {/* ข้อความใต้รูปที่สอง */}
      <p
        onClick={() => handleImageClick("/admin")} // เมื่อคลิกจะนำทางไปที่ /admin
        style={{
          fontSize: "16px",
          color: "#4caf50",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Admin Roles
      </p>
    </div>
  );
};

export default ClickIcon;
