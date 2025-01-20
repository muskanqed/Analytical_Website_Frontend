import React from "react";
import { Filter, LayoutGrid, Search, PlusCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-background to-background/50 backdrop-blur-sm sticky top-0 z-10 p-6 rounded-xl border shadow-sm"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title Section */}
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="w-6 h-6 text-primary" />
          <h1 className="text-1xl font-bold bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Dashboard
          </h1>
        </motion.div>

        {/* Search and Create Section */}
        <div className="flex items-center gap-4 flex-1 max-w-2xl order-3 md:order-2">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 transition-colors group-hover:text-primary" />
            <Input
              className="pl-10 transition-all border-black hover:border-primary focus:border-primary bg-background/50 backdrop-blur-sm"
              placeholder="Search links..." variant = "outline"
            />
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25">
              <PlusCircle className="w-4 h-4" />
              Create link
              <span className="text-xs opacity-80 bg-black/20 px-2 py-0.5 rounded-md">⌘C</span>
            </Button>
          </motion.div>
        </div>

        {/* Filter Section */}
        <div className="flex gap-3 order-2 md:order-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="gap-2 hover:border-primary hover:text-primary transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="gap-2 hover:border-primary hover:text-primary transition-colors"
            >
              <LayoutGrid className="w-4 h-4" />
              Display
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;