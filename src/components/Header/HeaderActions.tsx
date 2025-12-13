import HeaderActionItem from "./HeaderActionItem";
import { HEADER_ACTIONS } from "./headerActions.config";

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-4">
      {HEADER_ACTIONS.map((action) => (
        <HeaderActionItem key={action.to} {...action} />
      ))}
    </div>
  );
};

export default HeaderActions;
