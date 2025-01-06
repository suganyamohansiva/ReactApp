import React, { useState } from "react";
import { Sidebar, Menu, MenuItem,useProSidebar} from "react-pro-sidebar";
import {  Routes,Route } from "react-router-dom";
import ReactBasics from './ReactBasics/ReactBasics'; 
import { GetStarted } from "./ReactBasics/Getstarted";
import { ReactComponents } from "./ReactBasics/ReactComponents";
import { ReactProps } from './ReactProps/ReactProps'; 
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"; 
function App() {
  // const [hoveredMenu, setHoveredMenu] = useState(null);

  // const handleMouseOver = (id) => {
  //   setHoveredMenu(id);
  // };

  // const handleMouseOut = () => {
  //   setHoveredMenu(null);
  // };
  const { collapseSidebar } = useProSidebar();
return (
  <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
     <Sidebar
//change background color
        backgroundColor="rgb(0, 249, 249)"
        rtl={false}
        style={{ height: "100vh" }}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
         Welcome to the React Application
        </h1>
        <Routes>
<Route path="ReactBasics" element={<ReactBasics/>}/>
<Route path="GetStarted" element={<GetStarted/>}/>
<Route path="ReactComponents" element={<ReactComponents/>}/>
<Route path="ReactProps" element={<ReactProps/>}/>
</Routes>
      </main>
    </div>
  );
}


  // <Sidebar>
  //   <Menu>
  //         <MenuItem>
  //           {/* onMouseOver={() => handleMouseOver()}
  //           onMouseOut={handleMouseOut} */}
  //         </MenuItem>
     
  //   </Menu>
  //   </Sidebar>
 



export default App;
