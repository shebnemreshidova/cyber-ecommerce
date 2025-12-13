import { NavLink, type NavLinkProps } from "react-router-dom";

const navClass: NavLinkProps["className"] = ({ isActive }) =>
    isActive
        ? "text-black-900 font-medium"
        : "text-gray-600";

const NavItem = ({ to, label }: { to: string, label: string }) => {
    return (
        <NavLink to={to} className={navClass}>{label}</NavLink>
    );
};

export default NavItem;
