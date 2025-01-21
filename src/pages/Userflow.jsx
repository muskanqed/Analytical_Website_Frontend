import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  MousePointerClick,
  Activity,
  BarChart3,
  Map,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

const UserFlow = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Flow</h1>
        <Select defaultValue="all">
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Select path" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Paths</SelectItem>
            <SelectItem value="conversion">Conversion Paths</SelectItem>
            <SelectItem value="exit">Exit Paths</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>User Journey Map</CardTitle>
            <CardDescription>
              Visual representation of user paths through your website
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[600px]">
            <div className="flex justify-between items-center p-4">
              <div className="text-center p-4 border rounded-lg">
                Homepage
                <div className="text-sm text-muted-foreground">
                  12,345 visits
                </div>
              </div>
              <ArrowRight className="text-muted-foreground" />
              <div className="text-center p-4 border rounded-lg">
                Product Page
                <div className="text-sm text-muted-foreground">
                  8,234 visits
                </div>
              </div>
              <ArrowRight className="text-muted-foreground" />
              <div className="text-center p-4 border rounded-lg">
                Checkout
                <div className="text-sm text-muted-foreground">
                  3,456 visits
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default UserFlow;
