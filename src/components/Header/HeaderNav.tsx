
import { NAV_LINKS } from "./nav.config"
import NavItem from "./NavItem"
const HeaderNav = () => {
  return (
    <div className="flex gap-10 items-center">
      {NAV_LINKS.map((nav) => <NavItem key={nav.to} {...nav} />)}
    </div>
  )
}

export default HeaderNav