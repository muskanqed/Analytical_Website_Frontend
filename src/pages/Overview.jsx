import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ArrowUpRight,
  Clock,
  MousePointerClick,
  Activity,
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
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
} from "../components/ui/table";

// Sample Data for Chart
const chartData = [
  { name: "Mon", visitors: 400 },
  { name: "Tue", visitors: 300 },
  { name: "Wed", visitors: 200 },
  { name: "Thu", visitors: 278 },
  { name: "Fri", visitors: 189 },
  { name: "Sat", visitors: 239 },
  { name: "Sun", visitors: 349 },
];

// Sample Data for Table
const tableData = [
  { page: "/home", views: 1243, duration: "1m 30s" },
  { page: "/about", views: 543, duration: "45s" },
  { page: "/contact", views: 322, duration: "1m 15s" },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const stats = [
  {
    title: "Total Visitors",
    value: "+12,234",
    icon: Users,
    percentage: "+12.3%",
    trend: "up",
  },
  {
    title: "Average Session Time",
    value: "3m 45s",
    icon: Clock,
    percentage: "-2.4%",
    trend: "down",
  },
  {
    title: "Clicks",
    value: "8,932",
    icon: MousePointerClick,
    percentage: "+5.2%",
    trend: "up",
  },
  {
    title: "Bounce Rate",
    value: "42.8%",
    icon: Activity,
    percentage: "+0.8%",
    trend: "up",
  },
];

const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Overview</h1>
        <Select defaultValue="7d">
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div key={stat.title} {...fadeIn(index * 0.1)}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={`${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    } inline-flex items-center`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    {stat.percentage}
                  </span>{" "}
                  vs last week
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Activity Chart */}
      <motion.div {...fadeIn(0.2)}>
      <Card className="w-full">
      <CardHeader>
        <CardTitle>Visitor Traffic</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line 
                type="monotone" 
                dataKey="visitors" 
                stroke="#8884d8" 
                strokeWidth={2}
              />
              <CartesianGrid 
                stroke="#e5e7eb" 
                strokeDasharray="5 5" 
              />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  padding: "8px"
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
      </motion.div>

      {/* Detailed Table */}
      <motion.div {...fadeIn(0.4)}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>
              Insights into your most viewed pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Avg. Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.page}</TableCell>
                    <TableCell>{row.views}</TableCell>
                    <TableCell>{row.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Overview;
