import { NavLink } from "react-router-dom"


const HeaderNav = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
    </div>
  )
}

export default HeaderNav