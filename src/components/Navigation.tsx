import { CalendarOutlined, DashboardOutlined, ExceptionOutlined, InfoCircleOutlined, MessageOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components"

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

const NavigationStyled = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0 30px;
`

const MenuItemStyled = styled.li`
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    border-radius: 25px;
    padding-left: 20%;

    > a {
        display: block;
        color: #7d7c89;
        font-size: 18px;

        > span {
            margin-right: 10%;
        }
    }

    :hover {
        background-color: #221f2a;

        > a:hover {
            color: white;
    
            > span {
                color: #621ecf;
            }
        }
    }

`

const Navigation = () => {
  return (
    <>
        <NavigationStyled>
            { 
                menus.map((menu, index) => 
                    <MenuItemStyled key={index}>
                        <Link to={menu.path}>
                            {menu.icon} {menu.name}
                        </Link>
                    </MenuItemStyled>
            )}
        </NavigationStyled> 
    </>
  );
};

export default Navigation;
