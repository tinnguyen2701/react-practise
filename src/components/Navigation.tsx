import { DashboardOutlined } from "@ant-design/icons";
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
        icon: <DashboardOutlined />,
        path: "/calendar"
    },
    {
        name: "Analytics",
        icon: <DashboardOutlined />,
        path: "/analytics"
    },
    {
        name: "Ads",
        icon: <DashboardOutlined />,
        path: "/ads"
    },
    {
        name: "Campaigns",
        icon: <DashboardOutlined />,
        path: "/campaigns"
    },
    {
        name: "Settings",
        icon: <DashboardOutlined />,
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
