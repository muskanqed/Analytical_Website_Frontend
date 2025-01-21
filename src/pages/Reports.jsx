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

export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button>
          <BarChart3 className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Top referrers and sources</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              Traffic Sources Chart Placeholder
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Page Performance</CardTitle>
              <CardDescription>
                Most visited pages and engagement
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              Page Performance Chart Placeholder
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
