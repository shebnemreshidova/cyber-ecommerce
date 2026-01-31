import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import Button from '../common/Button'
import HeaderActions from './HeaderActions'
import HeaderNav from './HeaderNav'
import { LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { useAuthContext } from '../../context/authContext'
const Header = () => {
  const { userId ,logout} = useAuthContext();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
;
  return (
    <div className='flex justify-between items-center py-4 gap-15'>
      <img src={logo} />
      <HeaderNav />
      <div className='flex gap-4'>
        <HeaderActions />
        {!userId && <div className='flex gap-1'>
          <Button onClick={() => navigate('/auth/login')} variant="primary">Login</Button>
          <Button onClick={() => navigate('/auth/register')} variant="secondary">Register</Button>

        </div>}
        {
          userId && (
            <div className='relative'>
              <Button onClick={() => setOpenMenu(!openMenu)} variant="primary"><User /></Button>
            {openMenu && <div className='absolute bg-light-200 shadow-sm top-auto right-0 mt-2 p-4 rounded-md flex flex-col gap-2 w-50'>
                <div>Welcome User</div>
                <div onClick={() => navigate('/profile')} className='flex gap-1 items-center cursor-pointer' ><User /> Profile</div>
                <button onClick={logout} className='flex gap-1 items-center cursor-pointer'><LogOut /> Logout</button>
              </div>}
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Header