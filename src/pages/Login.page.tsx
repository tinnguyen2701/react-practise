import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLoginUserMutation } from "../redux/apis/authApi";


export const LoginPage = () => {
  const navigate = useNavigate();
  const [
    loginUser,
    { isLoading: isLoging, isError: isErrorLogin },
  ] = useLoginUserMutation();

  useEffect(() => {
    if (isErrorLogin) {
      alert("login failed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoging]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    loginUser({email: "123", password: "456"}).unwrap().then(async () => {
        navigate("/dashboard/", {replace: true});
    });
  };

  return (
    <div>
        <h1>Login Page</h1>
        <form>
            {/* <input type="text" id="email" name="email" placeholder="..email.." />
            <input type="password" id="password" name="password" placeholder="..password.." /> */}
            <p>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Login In</button>
            </p>
        </form>
        {isLoging && <p>loging....</p>}
    </div>
  );
};
