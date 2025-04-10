
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import {
  Download,
  Mail,
  CalendarDays,
  BarChart3,
  Users,
  Eye,
  MessageSquare,
  ChevronRight,
  FileText
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const Reports = () => {
  const [timeframe, setTimeframe] = useState("week");
  const [campaign, setCampaign] = useState("all");
  
  const reports = [
    {
      id: "1",
      name: "Weekly Performance Report",
      date: "Apr 3, 2025",
      campaigns: "All Campaigns",
      stats: {
        sent: 185,
        opened: 97,
        responses: 32,
        meetings: 8
      }
    },
    {
      id: "2",
      name: "Tech Startup Campaign Report",
      date: "Mar 27, 2025",
      campaigns: "Tech Startup Outreach",
      stats: {
        sent: 90,
        opened: 56,
        responses: 18,
        meetings: 5
      }
    },
    {
      id: "3",
      name: "E-commerce Campaign Report",
      date: "Mar 20, 2025",
      campaigns: "E-Commerce Decision Makers",
      stats: {
        sent: 65,
        opened: 32,
        responses: 8,
        meetings: 2
      }
    },
    {
      id: "4",
      name: "Monthly Summary Report",
      date: "Feb 29, 2025",
      campaigns: "All Campaigns",
      stats: {
        sent: 320,
        opened: 185,
        responses: 43,
        meetings: 12
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
              <p className="mt-1 text-sm text-gray-500">
                View and download campaign performance reports
              </p>
            </div>
          </div>
          
          {/* Filters */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-48">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger>
                  <SelectValue placeholder="Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="week">Last Week</SelectItem>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last Quarter</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-48">
              <Select value={campaign} onValueChange={setCampaign}>
                <SelectTrigger>
                  <SelectValue placeholder="Campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Campaigns</SelectItem>
                    <SelectItem value="tech">Tech Startup Outreach</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce Decision Makers</SelectItem>
                    <SelectItem value="finance">Financial Services</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Report Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard 
              title="Emails Sent"
              value={185}
              icon={<Mail />}
              color="text-sales-primary"
            />
            <StatCard 
              title="Open Rate"
              value="52%"
              icon={<Eye />}
              color="text-purple-600"
            />
            <StatCard 
              title="Response Rate"
              value="17%"
              icon={<MessageSquare />}
              color="text-blue-600"
            />
            <StatCard 
              title="Meetings"
              value={8}
              icon={<CalendarDays />}
              color="text-green-600"
            />
          </div>
          
          {/* Graph Placeholder */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>
                  Email campaign metrics over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-md">
                <BarChart3 className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">
                  Campaign performance visualization would be displayed here
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Available Reports */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>
                  Download detailed PDF reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  {reports.map((report) => (
                    <ReportItem key={report.id} report={report} />
                  ))}
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
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center">
          <div className={`rounded-full p-3 bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
            <div className={color}>{icon}</div>
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

interface ReportItemProps {
  report: {
    id: string;
    name: string;
    date: string;
    campaigns: string;
    stats: {
      sent: number;
      opened: number;
      responses: number;
      meetings: number;
    };
  };
}

const ReportItem = ({ report }: ReportItemProps) => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="flex items-start space-x-4">
        <div className="p-2 rounded-lg bg-gray-100">
          <FileText className="h-6 w-6 text-sales-primary" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{report.name}</h4>
          <div className="flex flex-col sm:flex-row sm:items-center mt-1">
            <p className="text-sm text-gray-500 mr-3">
              <span className="font-medium">Date:</span> {report.date}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Campaigns:</span> {report.campaigns}
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-500">{report.stats.sent}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-500">{report.stats.opened}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-500">{report.stats.responses}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CalendarDays className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-500">{report.stats.meetings}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button variant="ghost" size="sm" className="text-sales-primary hover:text-sales-secondary hover:bg-blue-50">
          <Download className="h-4 w-4 mr-1" /> Download
        </Button>
      </div>
    </div>
  );
};

export default Reports;
