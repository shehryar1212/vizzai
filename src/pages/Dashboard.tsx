
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Mail, 
  Users, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Download
} from "lucide-react";

// For demonstration purposes only
const mockCampaignStats = {
  totalLeads: 250,
  emailsSent: 185,
  emailsOpened: 97,
  responses: 32,
  meetings: 8,
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">
                Campaign performance overview and key metrics
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="mr-2">
                <Download className="h-4 w-4 mr-2" />
                Latest Report
              </Button>
              <Button>New Campaign</Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Leads"
              value={mockCampaignStats.totalLeads}
              icon={<Users className="h-5 w-5 text-sales-primary" />}
              change={15}
              trend="up"
            />
            <StatCard
              title="Emails Sent"
              value={mockCampaignStats.emailsSent}
              icon={<Mail className="h-5 w-5 text-sales-primary" />}
              change={8}
              trend="up"
            />
            <StatCard
              title="Open Rate"
              value={`${Math.round((mockCampaignStats.emailsOpened / mockCampaignStats.emailsSent) * 100)}%`}
              icon={<BarChart3 className="h-5 w-5 text-sales-primary" />}
              change={3}
              trend="up"
            />
            <StatCard
              title="Meetings Scheduled"
              value={mockCampaignStats.meetings}
              icon={<Calendar className="h-5 w-5 text-sales-primary" />}
              change={2}
              trend="up"
            />
          </div>
          
          {/* Campaign Progress */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Progress</CardTitle>
                <CardDescription>
                  Current status of active campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <CampaignProgress 
                    name="Tech Startup Outreach"
                    progress={75}
                    stats={{
                      leads: 120,
                      sent: 90,
                      responses: 18,
                      meetings: 5
                    }}
                  />
                  <CampaignProgress 
                    name="E-Commerce Decision Makers"
                    progress={45}
                    stats={{
                      leads: 85,
                      sent: 65,
                      responses: 8,
                      meetings: 2
                    }}
                  />
                  <CampaignProgress 
                    name="Financial Services"
                    progress={25}
                    stats={{
                      leads: 45,
                      sent: 30,
                      responses: 6,
                      meetings: 1
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates from your AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ActivityItem 
                    title="New leads added"
                    description="AI sourced 25 new leads for the Tech Startup campaign"
                    time="1 hour ago"
                  />
                  <ActivityItem 
                    title="Follow-up emails sent"
                    description="12 follow-up emails sent to prospects who opened but didn't reply"
                    time="3 hours ago"
                  />
                  <ActivityItem 
                    title="Meeting scheduled"
                    description="John Smith from Acme Corp scheduled a meeting for next Tuesday"
                    time="Yesterday"
                  />
                  <ActivityItem 
                    title="Weekly report generated"
                    description="Your campaign performance report for last week is ready"
                    time="2 days ago"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change: number;
  trend: 'up' | 'down';
}

const StatCard = ({ title, value, icon, change, trend }: StatCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-full bg-sales-light flex items-center justify-center">
            {icon}
          </div>
          <div className={`flex items-center space-x-1 text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            <span>{change}%</span>
            {trend === 'up' ? 
              <ArrowUpRight className="h-4 w-4" /> : 
              <ArrowDownRight className="h-4 w-4" />
            }
          </div>
        </div>
        <div className="mt-3">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

interface CampaignProgressProps {
  name: string;
  progress: number;
  stats: {
    leads: number;
    sent: number;
    responses: number;
    meetings: number;
  };
}

const CampaignProgress = ({ name, progress, stats }: CampaignProgressProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <span className="text-sm text-gray-500">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <div className="mt-2 grid grid-cols-4 text-xs text-gray-500">
        <div>{stats.leads} leads</div>
        <div>{stats.sent} sent</div>
        <div>{stats.responses} responses</div>
        <div>{stats.meetings} meetings</div>
      </div>
    </div>
  );
};

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

const ActivityItem = ({ title, description, time }: ActivityItemProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <div className="w-2 h-2 mt-2 rounded-full bg-sales-primary" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-medium text-gray-900">{title}</h5>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Dashboard;
