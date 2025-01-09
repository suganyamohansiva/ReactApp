// import React, { useState } from "react";
// import {
//   Sidebar,
//   Menu,
//   MenuItem,
//   useProSidebar,
//   SubMenu,
// } from "react-pro-sidebar";
// import {  Routes,Route } from "react-router-dom";
// import ReactBasics from './ReactBasics/ReactBasics';
// import { GetStarted } from "./ReactBasics/Getstarted";
// import { ReactComponents } from "./ReactBasics/ReactComponents";
// import { ReactProps } from './ReactProps/ReactProps';
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// function App() {
//   // const [hoveredMenu, setHoveredMenu] = useState(null);

//   // const handleMouseOver = (id) => {
//   //   setHoveredMenu(id);
//   // };

//   // const handleMouseOut = () => {
//   //   setHoveredMenu(null);
//   // };
//   const[collapsed,setCollapsed]=useState(true);
// const handleMouseOver=()=>{
//   setCollapsed((current)=>!current);
// };
// const handleMouseOut=()=>{
//   setCollapsed((current)=>!current);
// };
//    return (
//         <div
//         id="app"
//         style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
//       >
//         <Sidebar collapsed ={cpllapsed}>
//   //change background color
//           backgroundColor="rgb(0, 249, 249)"
//           rtl={false}
//           style={{ height: "100vh" }}
//           breakPoint="sm"
//           transitionDuration={800}

//           <Menu>
//             <MenuItem  MouseOver={handleMouseOver}
//             handleMouseOut={handleMouseOut}
//               icon={<MenuOutlinedIcon />}
//               onClick={() => {
//                 collapseSidebar();
//               }}
//               style={{ textAlign: "center" }}
//             >
//               {" "}
//               <h2>Admin</h2>
//             </MenuItem     >
//             <SubMenu icon={<HomeOutlinedIcon />} label="ReactBasics">
//               <MenuItem icon={<PeopleOutlinedIcon />}>GetStarted</MenuItem>
//               <MenuItem icon={<PeopleOutlinedIcon />}>ReactComponents</MenuItem>
//               <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
//         </SubMenu>
//             <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
//             <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
//             <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
//             <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
//             <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
//           </Menu>
//         </Sidebar>
//         <main>
//         <h1
//             onClick={() => {
//               toggle();
//             }}
//             style={{ color: "white", marginLeft: "5rem" }}
//           >
//             Welcome to the React Application
//           </h1>
//           {toggled ? (
//             <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
//           ) : (
//             <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
//           )}
//            {broken && (
//             <h1 style={{ color: "white", marginLeft: "5rem" }}>Small screen</h1>
//           )}
//           <Routes>
// <Route path="ReactBasics" element={<ReactBasics/>}/>
// <Route path="GetStarted" element={<GetStarted/>}/>
// <Route path="ReactComponents" element={<ReactComponents/>}/>
// <Route path="ReactProps" element={<ReactProps/>}/>
// </Routes>
//         </main>
//         </div>
//       );
//     }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"; // Make sure BrowserRouter is imported
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import { GetStarted } from './ReactBasics/Getstarted';
// import { ReactComponents } from './ReactBasics/ReactComponents';
// import { ReactConditionals } from './ReactBasics/ReactConditionals';
// import { ReactProps } from './ReactProps/ReactProps';
// import { ReactBasics } from "./ReactBasics/ReactBasics";
// import { UseState } from './ReactHooks/UseState';
// import { UseEffect } from './ReactHooks/UseEffect';
// import { ReactEvents } from './ReactBasics/ReactEvents';
// import { ReactRenderHTML } from './ReactBasics/ReactRenderHTML';
// import { ReactForm } from './ReactForm/ReactForm';
// import { ReactRouter } from './ReactRouter/ReactRouter';
// import { ReactStylingCSS } from './ReactStylingCSS/ReactStylingCSS';
// import { UseCallback } from './ReactHooks/UseCallback';
// import { UseContext } from './ReactHooks/UseContext';
// import { UseRef } from './ReactHooks/UseRef';
// import { UseReducer } from './ReactHooks/UseReducer';
// import { UseMemo } from './ReactHooks/UseMemo';

// function App() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [toggled, setToggled] = useState(false);
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setToggled(!toggled);
//     setCollapsed(!collapsed);
//   };

//   const handleMouseOver = () => {
//     setCollapsed(true);
//   };
//   const handleMouseOut = () => {
//     setCollapsed(false);
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div id="app" style={{ height: "100vh", display: "flex", flexDirection: "row" }}>
//       <Sidebar
//         backgroundColor="rgb(0, 249, 249)"
//         collapsed={collapsed}
//         toggled={toggled}
//         rtl={false}
//         style={{ height: "100vh" }}
//         breakPoint="sm"
//         transitionDuration={800}
//       >
//         <Menu>
//           <MenuItem
//             icon={<MenuOutlinedIcon />}
//             onClick={toggleSidebar}
//             style={{ textAlign: "center" }}
//           >
//             <h2>Admin</h2>
//           </MenuItem>

//           <SubMenu icon={<HomeOutlinedIcon />} label="React Basics">
//             <MenuItem onClick={() => handleNavigation('/GetStarted')}>GetStarted</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/ReactComponents')}>ReactComponents</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/ReactConditionals')}>ReactConditionals</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/ReactEvents')}>ReactEvents</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/ReactRenderHTML')}>ReactRenderHTML</MenuItem>
//           </SubMenu>

//           <SubMenu icon={<ReceiptOutlinedIcon />} label="React Hooks">
//             <MenuItem onClick={() => handleNavigation('/UseState')}>UseState</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/UseEffect')}>UseEffect</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/UseCallback')}>UseCallback</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/UseMemo')}>UseMemo</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/UseRef')}>UseRef</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/UseReducer')}>UseReducer</MenuItem>
//             <MenuItem onClick={() => handleNavigation('/UseContext')}>UseContext</MenuItem>
//           </SubMenu>
//           <MenuItem icon={<LocalParkingOutlinedIcon />} onClick={() => handleNavigation('/ReactProps')}>React Props</MenuItem>
//           <MenuItem icon={<ContactsOutlinedIcon />} onClick={() => handleNavigation('/ReactForm')}>ReactForm</MenuItem>
//           <MenuItem icon={<ReceiptOutlinedIcon />} onClick={() => handleNavigation('/ReactRouter')}>ReactRouter</MenuItem>
//           <MenuItem icon={<HelpOutlineOutlinedIcon />} onClick={() => handleNavigation('/ReactStylingCSS')}>ReactStylingCSS</MenuItem>
//         </Menu>
//       </Sidebar>

//       <main>
//         <h1 style={{ color: "white", marginLeft: "5rem" }}>
//           {/* Title or Header */}
//         </h1>
//         <Routes>
//           <Route path="/GetStarted" element={<GetStarted />} />
//           <Route path="/ReactComponents" element={<ReactComponents />} />
//           <Route path="/ReactConditionals" element={<ReactConditionals />} />
//           <Route path="/ReactEvents" element={<ReactEvents />} />
//           <Route path="/ReactRenderHTML" element={<ReactRenderHTML />} />
//           <Route path="/UseState" element={<UseState />} />
//           <Route path="/UseEffect" element={<UseEffect />} />
//           <Route path="/UseCallback" element={<UseCallback />} />
//           <Route path="/UseContext" element={<UseContext />} />
//           <Route path="/UseRef" element={<UseRef />} />
//           <Route path="/UseReducer" element={<UseReducer />} />
//           <Route path="/UseMemo" element={<UseMemo />} />
//           <Route path="/ReactProps" element={<ReactProps />} />
//           <Route path="/ReactForm" element={<ReactForm />} />
//           <Route path="/ReactRouter" element={<ReactRouter />} />
//           <Route path="/ReactStylingCSS" element={<ReactStylingCSS />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }
// export default App;

import React, { useState } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"; // Make sure BrowserRouter is imported
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { GetStarted } from "./ReactBasics/Getstarted";
import { ReactComponents } from "./ReactBasics/ReactComponents";
import { ReactConditionals } from "./ReactBasics/ReactConditionals";
import { ReactProps } from "./ReactProps/ReactProps";
import { ReactBasics } from "./ReactBasics/ReactBasics";
import { UseState } from "./ReactHooks/UseState";
import { UseEffect } from "./ReactHooks/UseEffect";
import { ReactEvents } from "./ReactBasics/ReactEvents";
import { ReactRenderHTML } from "./ReactBasics/ReactRenderHTML";
import { ReactForm } from "./ReactForm/ReactForm";
import { ReactRouter } from "./ReactRouter/ReactRouter";
import { ReactStylingCSS } from "./ReactStylingCSS/ReactStylingCSS";
import { UseCallback } from "./ReactHooks/UseCallback";
import { UseContext } from "./ReactHooks/UseContext";
import { UseRef } from "./ReactHooks/UseRef";
import { UseReducer } from "./ReactHooks/UseReducer";
import { UseMemo } from "./ReactHooks/UseMemo";
import { MenuConfig } from "./Components/MenuConfig";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setToggled(!toggled);
    setCollapsed(!collapsed);
  };
  const handleMouseOver = () => {
    setCollapsed(true);
  };

  const handleMouseOut = () => {
    setCollapsed(false);
  };
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div
      id="app"
      style={{ height: "100vh", display: "flex", flexDirection: "row" }}
    >
      <Sidebar
        backgroundColor="rgb(0, 249, 249)"
        collapsed={collapsed}
        toggled={toggled}
        rtl={false}
        style={{ height: "100vh" }}
        breakPoint="sm"
        transitionDuration={800}
      >
        <Menu>
          {MenuConfig.map((menuItem) => (
            <React.Fragment key={menuItem.id}>
              {menuItem.subMenu ? (
                <SubMenu
                  key={menuItem.id}
                  icon={menuItem.icon}
                  label={menuItem.title}
                  onClick={() => handleNavigation(menuItem.componentName)}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {menuItem.subMenu.map((subMenuItem) => (
                    <MenuItem
                      key={subMenuItem.id}
                      onClick={() =>
                        handleNavigation(subMenuItem.componentName)
                      }
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      {subMenuItem.title}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  key={menuItem.id}
                  icon={menuItem.icon}
                  onClick={() => handleNavigation(menuItem.componentName)}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  {menuItem.title}
                </MenuItem>
              )}
            </React.Fragment>
          ))}
        </Menu>
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          {/* Title or Header */}
        </h1>
        <Routes>
          <Route path="/" element={<GetStarted />} /> 
          <Route path="GetStarted" element={<GetStarted />} />
          <Route path="/ReactComponents" element={<ReactComponents />} />
          <Route path="/ReactConditionals" element={<ReactConditionals />} />
          <Route path="/ReactEvents" element={<ReactEvents />} />
          <Route path="/ReactRenderHTML" element={<ReactRenderHTML />} />
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseCallback" element={<UseCallback />} />
          <Route path="/UseContext" element={<UseContext />} />
          <Route path="/UseRef" element={<UseRef />} />
          <Route path="/UseReducer" element={<UseReducer />} />
          <Route path="/UseMemo" element={<UseMemo />} />
          <Route path="/ReactProps" element={<ReactProps />} />
          <Route path="/ReactForm" element={<ReactForm />} />
          <Route path="/ReactRouter" element={<ReactRouter />} />
          <Route path="/ReactStylingCSS" element={<ReactStylingCSS />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;

//  import React from "react";

// const products = [
//   { id: 1, name: "Product 1", price: "$10" },
//   { id: 2, name: "Product 2", price: "$20" },
//   { id: 3, name: "Product 3", price: "$30" },
// ];

// function ProductList() {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;
