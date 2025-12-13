import { NavLink, type NavLinkProps } from "react-router-dom";

type Props = {
  to: string;
  icon: React.ElementType;
  label: string;
};

const actionClass: NavLinkProps["className"] = ({ isActive }) =>
  `p-2 rounded-full transition ${
    isActive
      ? "bg-black text-white"
      : "text-gray-400 hover:text-black"
  }`;

const HeaderActionItem = ({ to, icon: Icon, label }: Props) => {
  return (
    <NavLink to={to} className={actionClass} aria-label={label}>
      <Icon size={20} />
    </NavLink>
  );
};

export default HeaderActionItem;
