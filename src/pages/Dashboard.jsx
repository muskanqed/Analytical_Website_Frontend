import React, { useState } from "react";
import LinksList from "../components/LinksList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
const AnalyticsDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Main Dashboard Area */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Total Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24,892</p>
              <p className="text-sm text-green-600">+12.3% vs last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avg. Session Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">4m 32s</p>
              <p className="text-sm text-red-600">-2.1% vs last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bounce Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">32.4%</p>
              <p className="text-sm text-green-600">+3.2% vs last week</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
