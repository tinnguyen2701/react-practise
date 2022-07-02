import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userApi } from '../redux/apis';
import SideBar from './SideBar';

const RequireUser = () => {
  const [cookies] = useCookies(['logged_in']);
  const location = useLocation();

  const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const user = userApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data
  });

  if (loading) {
    return <h1>...Loading...</h1>
  }

  // TODO: cookies.logged_in || user 
  return (cookies.logged_in) ? 
    <>
      <SideBar />
      <Outlet />
    </> : 
    <Navigate to='/login' state={{ from: location }} replace />
};

export default RequireUser;
