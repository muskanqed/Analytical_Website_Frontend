
import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Bell,
} from "lucide-react";
import {
  Card,
  CardContent,
} from "../components/ui/card";

import { Button } from "../components/ui/button";


export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Traffic Spike Detected",
      description: "Unusual traffic detected on your website",
      time: "2 hours ago",
      type: "alert",
    },
    {
      id: 2,
      title: "Weekly Report Available",
      description: "Your weekly analytics report is ready",
      time: "1 day ago",
      type: "info",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="flex items-start p-4">
                <div className="mr-4">
                  {notification.type === "alert" ? (
                    <Bell className="h-5 w-5 text-red-500" />
                  ) : (
                    <LineChart className="h-5 w-5 text-blue-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
