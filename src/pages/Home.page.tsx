import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { userApi } from "../redux/apis";

export const HomePage = () => {
      const location = useLocation();

    const navigate = useNavigate();
    const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
      skip: false,
      refetchOnMountOrArgChange: true,
    });
  
    const user = userApi.endpoints.getMe.useQueryState(null, {
      selectFromResult: ({data}) => data,
    });
  
  return <>
        <h1>Home Page</h1>

        {!!user ? (
            <Navigate to='/dashboard' state={{ from: location }} replace />

        ) : (
            <button onClick={() => navigate("/login")}>Login</button>
        )}
    </>;
};
  