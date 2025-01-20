import React from "react";
import { motion } from "framer-motion";
import { Copy, Clock, MoreVertical } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const links = [
    {
      id: 1,
      url: "example.com/abc123",
      title: "analytics-dashboard-25rq.vercel.app",
      timeAgo: "37m",
      stats: { views: 2, clicks: 0, revenue: "$0" },
    },
  ];

const LinksList = () => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card>
        <CardContent className="p-0">
          {links.map((link) => (
            <motion.div
              key={link.id}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="flex items-center justify-between p-4 border-b last:border-0"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  M
                </motion.div>
                <div>
                  <div className="flex items-center gap-2">
                    {link.url}
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <Copy className="w-4 h-4 text-muted-foreground cursor-pointer" />
                    </motion.div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <span>{link.title}</span>
                    <Clock className="w-4 h-4" />
                    <span>{link.timeAgo}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  👁️ {link.stats.views} 🔗 {link.stats.clicks} {link.stats.revenue}
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LinksList;
