import { CalendarOutlined, DashboardOutlined, ExceptionOutlined, InfoCircleOutlined, MessageOutlined, SettingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components"
import ButtonWrapped from "./button/ButtonWrapped";

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
    display: flex;
    flex-direction: column;

    [aria-current="page"], a:hover {
        background-color: #221f2a;
        color: white;

        > span {
            color: #621ecf;
        }
    }

`

const NavLinkStyled = styled(NavLink)`
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    border-radius: 25px;
    padding-left: 20%;
    color: #7d7c89;
    font-size: 18px;
    
    > span {
        margin-right: 10%;
    }
`

const Navigation = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <NavigationStyled>
                { 
                    menus.map((menu, index) => 
                        <NavLinkStyled key={index} to={menu.path}>
                            {menu.icon} {t(menu.name)}
                        </NavLinkStyled>
                )}
            </NavigationStyled> 
        </>
    );
};

export default Navigation;
