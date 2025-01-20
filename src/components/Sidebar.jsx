import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight,LayoutDashboard,Link,Calendar, BarChart2,Settings, Database} from "lucide-react";


const sidebarItems = [
  { name: "Data Collection", icon: Database },
  { name: "Links", icon: Link },
  { name: "Analytics", icon: BarChart2 },
  { name: "Events", icon: Calendar },
  { name: "Settings", icon: Settings },
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
      className="fixed left-0 top-0 h-full border-r bg-card p-4 overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold"
        >
          dub
        </motion.div>
        {isOpen && <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center"
        >
          M
        </motion.div>}
      </div>

      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2 mt-16"
      >
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className={`p-2 rounded-lg hover:bg-accent cursor-pointer flex items-center gap-3 ${
                item.name === "Links" ? "bg-accent" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className={isOpen ? "opacity-100" : "opacity-0"}>
                {item.name}
              </span>
            </motion.div>
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
