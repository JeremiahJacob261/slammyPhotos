import { Navigate, Outlet } from 'react-router-dom'
const AdminLogin = () => {
  let auth = {'token':true};
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default AdminLogin;