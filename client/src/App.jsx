// import React from "react";
// import Header from "./components/Header";
// import SearchForm from "./components/SearchForm";
// import ActionButtons from "./components/ActionButtons";
// import DataTable from "./components/DataTable";

// const App = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <Header />
//       <SearchForm />
//       <ActionButtons />
//       <DataTable />
//     </div>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // headbar
import Breadcrumb from "./components/Breadcrumb"; // breadcrumb 
import NavBar from "./components/NavBar"; // navbar
import ClickIcon from "./components/ClickIcon"; // นำเข้า ClickIcon คอมโพเนนต์
import Permissions from "./Permissions"; // permissions

const HomePage = () => (
  <div style={{ backgroundColor: '#f1f8e9' }} className="min-h-screen font-sans">
    {/* ส่วนของ Header, NavBar, Breadcrumb */}
    <Header />
    <NavBar />
    <Breadcrumb />
    
    {/* เพิ่ม ClickIcon บนหน้า HomePage */}
    <ClickIcon /> {/* คอมโพเนนต์ที่มีรูปและข้อความคลิกได้ */}
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/permissions" element={<Permissions />} />
      </Routes>
    </Router>
  );
};

export default App;