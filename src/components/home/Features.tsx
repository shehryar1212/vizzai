
import { 
  Search, 
  Mail, 
  BarChart3, 
  Clock,
  Bot,
  Globe,
  FileText,
  BellRing
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Lead Sourcing",
      description: "Automatically find and qualify leads using Exa.ai and Hunter.io integrations.",
      icon: <Search className="h-6 w-6 text-sales-primary" />,
    },
    {
      title: "Personalized Email Generation",
      description: "AI crafts unique emails based on prospect data and your company's voice.",
      icon: <Mail className="h-6 w-6 text-sales-primary" />,
    },
    {
      title: "Smart Follow-Up System",
      description: "Automated sequences with case studies for engaged leads and pausing for cold ones.",
      icon: <Clock className="h-6 w-6 text-sales-primary" />,
    },
    {
      title: "Weekly Performance Reports",
      description: "Receive detailed PDF reports with campaign metrics and next steps.",
      icon: <BarChart3 className="h-6 w-6 text-sales-primary" />,
    },
    {
      title: "AI Content Extraction",
      description: "Automatically extract case studies and relevant content from client websites.",
      icon: <Globe className="h-6 w-6 text-sales-primary" />,
    },
    {
      title: "Low-Cost Technology Stack",
      description: "Leverages free tiers and open-source tools to keep operational costs minimal.",
      icon: <Bot className="h-6 w-6 text-sales-primary" />,
    },
    {
      title: "PDF Campaign Reports",
      description: "Comprehensive reports delivered straight to your inbox without dashboard login.",
      icon: <FileText className="h-6 w-6 text-sales-primary" />,
    },
    {
      title: "Real-time Slack Alerts",
      description: "Get instant notifications for important events like responses and meetings.",
      icon: <BellRing className="h-6 w-6 text-sales-primary" />,
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-sales-dark sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to automate your sales outreach without lifting a finger.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-sales-accent hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="rounded-full w-10 h-10 flex items-center justify-center bg-sales-light mb-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
