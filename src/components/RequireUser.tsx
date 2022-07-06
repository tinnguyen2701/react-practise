import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import styled from "styled-components"
import { userApi } from '../redux/apis';
import SideBar from './SideBar';


const ContentWrapperStyled = styled.div`
    width: 85%;
`;

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
      <div className='container'>
        <SideBar />

        <ContentWrapperStyled>
          <Outlet />
        </ContentWrapperStyled>
      </div>
    </> : 
    <Navigate to='/login' state={{ from: location }} replace />
};

export default RequireUser;
