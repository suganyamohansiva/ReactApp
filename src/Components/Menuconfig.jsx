import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
export const MenuConfig = [
    {
      id: 1,
      icon: <AccessAlarmsIcon />,
      title: "React Basics",
      text: "hello",
  
      subMenu: [
        { id: 11, title: "GetStarted", componentName: "GetStarted" },
        { id: 12, title: "React Components", componentName: "ReactComponents" },
        { id: 13, title: "React Conditionals", componentName: "ReactConditionals" },
        { id: 14, title: "React Events ", componentName: "ReactEvents" },
        { id: 16, title: "ReactRenderHTML ", componentName: "ReactRenderHTML " },
         ],
    },
    {
      id: 3,
      icon: <AccessAlarmsIcon />,
      title: "React Props",
      componentName: "ReactProps",
    }, 
   {
     id: 2,
     icon: <HomeOutlinedIcon />,
     title: "React Hooks",
     componentName: "Hooks",
     subMenu: [
       { id: 20, title: "UseState", componentName: "Usestate" },
       { id: 21, title: "UseEffect", componentName: "UseEffect" },
       { id: 22, title: "UseContext", componentName: "UseContext" },
       { id: 23, title: "UseRef", componentName: "UseRef" },
       { id: 24, title: "UseReducer", componentName: "UseReducer" },
       { id: 25, title: "UseCallback", componentName: "UseCallback" },
       { id: 26, title: "UseMemo", componentName: "UseMemo" },
         ],
       },
       {
         id: 4,
         icon: <AccessAlarmsIcon />,
         title: "React Form",
         componentName: "ReactFrom",
     },
     {
       id: 5,
       icon: <AccessAlarmsIcon />,
       title: "React Router",
       componentName: "ReactRouter",
  },
  {
     id: 6,
     icon: <AccessAlarmsIcon />,
     title: "React StylingCSS",
     componentName: "ReactStylingCSS",
   },   
//  {
//    id: 7,
//    icon: <AccessAlarmsIcon />,
//    title: "Tranning App Explanation",
//    subMenu:[
//      {
//        id:30,
//        title:"Assignment 1",
//        componentName:"Assignment 1",
//      },
//      {
//        id:35,
//        title:"Assignment 2",
//        componentName:"Assignment 2",
//      },
//   ],
//   
]  
