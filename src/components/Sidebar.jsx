import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Flower,
  Calendar,
  FileText,
  Settings,
  PieChart,
  ChevronRight,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Overview", icon: PieChart, url: "/overview" },
  { name: "Real-time Analytics", icon: BarChart, url: "/real-time-analytics" },
  { name: "User Flow", icon: Flower, url: "/user-flow" },
  { name: "Events", icon: Calendar, url: "/events" },
  { name: "Reports", icon: FileText, url: "/reports" },
  { name: "Notifications", icon: Bell, url: "/notifications" },
  { name: "Settings", icon: Settings, url: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={{ width: 256 }}
      animate={{ width: isOpen ? 256 : 80 }}
      className="relative left-0 top-0 h-screen border-r bg-card p-4 overflow-hidden"
    >
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2 mt-16"
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link to={`/dashboard${item.url}`}>
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className={`p-2 rounded-lg hover:bg-accent cursor-pointer flex items-center gap-3 ${item.name === "Links" ? "bg-accent" : ""
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className={isOpen ? "opacity-100" : "opacity-0"}>
                  {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </motion.nav>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-accent"
      >
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default Sidebar;
