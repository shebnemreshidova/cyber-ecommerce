import logo from '../../assets/Logo.svg'
import HeaderActions from './HeaderActions'
import HeaderNav from './HeaderNav'
const Header = () => {
  return (
    <div className='flex justify-between items-center py-4 gap-15'>
      <img src={logo} />
      <HeaderNav />
      <HeaderActions />
    </div>
  )
}

export default Header