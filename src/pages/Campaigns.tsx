
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter 
} from "@/components/ui/card";
import {
  Play,
  Pause,
  MoreHorizontal,
  Edit,
  Copy,
  Trash2,
  Plus,
  Users,
  Mail,
  BarChart3
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Campaigns = () => {
  const [campaigns] = useState([
    {
      id: "1",
      name: "Tech Startup Outreach",
      status: "active",
      target: "SaaS, Tech Startups",
      roles: "CEO, CTO, VP Marketing",
      leads: 120,
      sent: 90,
      responses: 18,
      lastUpdated: "2 hours ago"
    },
    {
      id: "2",
      name: "E-Commerce Decision Makers",
      status: "active",
      target: "E-commerce, Retail",
      roles: "Marketing Director, Growth Manager",
      leads: 85,
      sent: 65,
      responses: 8,
      lastUpdated: "6 hours ago"
    },
    {
      id: "3",
      name: "Financial Services",
      status: "paused",
      target: "Banking, Insurance, Fintech",
      roles: "CFO, Head of Operations",
      leads: 45,
      sent: 30,
      responses: 6,
      lastUpdated: "2 days ago"
    },
    {
      id: "4",
      name: "Healthcare Industry",
      status: "draft",
      target: "Hospitals, Healthcare Services",
      roles: "Medical Director, CIO",
      leads: 0,
      sent: 0,
      responses: 0,
      lastUpdated: "1 week ago"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage all your outreach campaigns
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-sales-primary hover:bg-sales-secondary">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>
          
          <div className="mt-8">
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Campaigns</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="paused">Paused</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {campaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </TabsContent>
              
              <TabsContent value="active" className="space-y-4">
                {campaigns.filter(c => c.status === "active").map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </TabsContent>
              
              <TabsContent value="paused" className="space-y-4">
                {campaigns.filter(c => c.status === "paused").map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </TabsContent>
              
              <TabsContent value="draft" className="space-y-4">
                {campaigns.filter(c => c.status === "draft").map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CampaignCardProps {
  campaign: {
    id: string;
    name: string;
    status: string;
    target: string;
    roles: string;
    leads: number;
    sent: number;
    responses: number;
    lastUpdated: string;
  };
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CardTitle>{campaign.name}</CardTitle>
            <StatusBadge status={campaign.status} />
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              {campaign.status === "active" ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardDescription>
          Last updated {campaign.lastUpdated}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Target Industries</h4>
            <p className="text-sm text-gray-900">{campaign.target}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Target Roles</h4>
            <p className="text-sm text-gray-900">{campaign.roles}</p>
          </div>
          <div className="flex flex-col md:items-end">
            <h4 className="text-sm font-medium text-gray-500">Performance</h4>
            <div className="flex items-center space-x-4 mt-1">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-sales-primary" />
                <span className="text-sm">{campaign.leads}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-sales-primary" />
                <span className="text-sm">{campaign.sent}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BarChart3 className="h-4 w-4 text-sales-primary" />
                <span className="text-sm">{campaign.responses}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <div className="text-xs text-gray-500">
          ID: {campaign.id}
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4 mr-1" /> Edit
          </Button>
          <Button variant="ghost" size="sm">
            <Copy className="h-4 w-4 mr-1" /> Duplicate
          </Button>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-1" /> Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusStyles = {
    active: "bg-green-100 text-green-800 hover:bg-green-200",
    paused: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    draft: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };
  
  return (
    <Badge variant="outline" className={statusStyles[status as keyof typeof statusStyles]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export default Campaigns;
