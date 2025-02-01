import { memo } from "react";

const HeaderActions = memo(({ user, onLogout }) => (
  <div className="flex items-center gap-2">
    {/* <NotificationButton />
    <MessagesButton />
    <UserDropdown user={user} onLogout={onLogout} /> */}
  </div>
));

export default HeaderActions;
