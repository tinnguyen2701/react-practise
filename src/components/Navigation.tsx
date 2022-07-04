import { CalendarOutlined, DashboardOutlined, ExceptionOutlined, InfoCircleOutlined, MessageOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface Menu {
    name: string,
    icon: any
    path: string,
}

const menus: Menu[] = [
    {
        name: "Dashboard",
        icon: <DashboardOutlined />,
        path: "/dashboard"
    },
    {
        name: "Calendar",
        icon: <CalendarOutlined />,
        path: "/calendar"
    },
    {
        name: "Analytics",
        icon: <MessageOutlined />,
        path: "/analytics"
    },
    {
        name: "Ads",
        icon: <InfoCircleOutlined />,
        path: "/ads"
    },
    {
        name: "Campaigns",
        icon: <ExceptionOutlined />,
        path: "/campaigns"
    },
    {
        name: "Settings",
        icon: <SettingOutlined />,
        path: "/settings"
    }
  ]

const Navigation = () => {
  

  return (
    <>
        <ul>
            { 
                menus.map((menu, index) => 
                    <li key={index}>
                        <Link to={menu.path}>
                            {menu.icon} {menu.name}
                        </Link>
                    </li>
            )}
        </ul> 
    </>
  );
};

export default Navigation;
