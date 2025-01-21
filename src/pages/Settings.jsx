import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Lock,
  User,
  UserPlus,
  ArrowRight,
  LineChart,
  Settings as SettingsIcon,
  Bell,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

import { Label } from "../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";


export default function Settings ()  {
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
          </TabsList>
  
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue="john@example.com" type="email" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
  
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage your notification settings
                </CardDescription>
              </CardHeader>
              <CardContent>{/* Add notification settings here */}</CardContent>
            </Card>
          </TabsContent>
  
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Manage your API keys</CardDescription>
              </CardHeader>
              <CardContent>{/* Add API key management here */}</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };