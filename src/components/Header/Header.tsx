import logo from '../../assets/Logo.svg'
import HeaderActions from './HeaderActions'
import HeaderNav from './HeaderNav'
import HeaderSearch from './HeaderSearch'
const Header = () => {
  return (
    <div className='flex justify-between items-center py-4'>
      <img src={logo} />
      <HeaderSearch />
      <HeaderNav />
      <HeaderActions />
    </div>
  )
}

export default Header