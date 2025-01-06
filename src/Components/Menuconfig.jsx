import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
export const menuConfig = [
    {
      id: 1,
      icon: <AccessAlarmsIcon />,
      title: "React Basics",
      text: "hello",
  
      subMenu: [
        { id: 11, title: "GetStarted", componentName: "GetStarted" },
        { id: 12, title: "React Components", componentName: "ReactComponents" },
         ],
    },
    {
      id: 2,
      icon: <AccessAlarmsIcon />,
      title: "React Props",
      componentName: "ReactProps",
    }, ]