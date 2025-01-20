import React, { useState } from "react";
import LinksList from "../components/LinksList";

const AnalyticsDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <div className={`p-6 ${isOpen ? "ml-64" : "ml-20"} transition-all`}>
        <LinksList />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
