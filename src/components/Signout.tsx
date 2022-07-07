import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../redux/apis/authApi";
import ButtonWrapped from "./button/ButtonWrapped";

const Signout = () => {
    const navigate = useNavigate();

    const [triggerLogout] = useLogoutUserMutation();

    const onClickLogout = () => {
        triggerLogout().unwrap().then(() => {
        navigate("/", { replace: true })
        });
    }
    
    return (
        <ButtonWrapped style={{width: "70%"}} 
            onClick={() => onClickLogout()}>
            <LogoutOutlined />
            Sign out
        </ButtonWrapped>
    );
};

export default Signout;
