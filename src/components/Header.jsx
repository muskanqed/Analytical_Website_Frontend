import React from "react";
import { Bell, MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "../contexts/authContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useWebsite } from "../contexts/websiteContext";

const Header = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-4 flex items-center justify-between">
      <div className="ml-5 hidden md:block">
        <WebsiteSwitcher />
      </div>
      <div className="flex items-center gap-2">
        <ActionIcons />
        <UserProfileDropdown />
      </div>
    </header>
  );
};

export default Header;

const ActionIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5 text-gray-600" />
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
      </Button>

      <Button variant="ghost" size="icon">
        <MessageSquare className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  );
};

const UserProfileDropdown = () => {
  const { user, logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="ml-2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem className="text-red-600" onClick={logout}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const WebsiteSwitcher = () => {
  const { setShowDialog, websites, selectedWebsite, setSelectedWebsite } =
    useWebsite();

  return (
    <Select
      onValueChange={(value) => {
        setSelectedWebsite(websites.find((website) => website.id === value));
      }}
      value={selectedWebsite?.id}
    >
      <SelectTrigger className="w-[230px]">
        <SelectValue placeholder="Select a website" />
      </SelectTrigger>
      <SelectContent>
        {websites?.length > 0 &&
          websites?.map((website) => (
            <SelectItem key={website.id} value={website.id}>
              {website.domain}
            </SelectItem>
          ))}
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => setShowDialog(true)}
        >
          Create
        </Button>
      </SelectContent>
    </Select>
  );
};
