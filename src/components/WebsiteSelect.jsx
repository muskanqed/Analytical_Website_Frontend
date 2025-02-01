import React, { memo } from "react";
import { useWebsite } from "../contexts/websiteContext";

const WebsiteSelect = memo(({ onWebsiteChange }) => {
  const { websiteList } = useWebsite();

  return (
    <Select onValueChange={onWebsiteChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a website" />
      </SelectTrigger>
      <SelectContent>
        {websiteList.map((website) => (
          <SelectItem key={website.id} value={website.id}>
            {website.domain}
          </SelectItem>
        ))}
        <CreateWebsiteButton />
      </SelectContent>
    </Select>
  );
});

export default WebsiteSelect;
