import { memo } from "react";

const CreateWebsiteButton = memo(({ onClick }) => (
  <Button variant="ghost" className="w-full" onClick={onClick}>
    Create
  </Button>
));

export default CreateWebsiteButton;
