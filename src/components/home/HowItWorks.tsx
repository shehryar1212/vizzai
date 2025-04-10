
import { 
  Lightbulb,
  Robot,
  BarChart3,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Lightbulb size={24} className="text-white" />,
      title: "Onboard",
      description:
        "Provide your website URL, target audience, and sales messaging via call or our simple onboarding form.",
      color: "bg-sales-primary",
    },
    {
      icon: <Robot size={24} className="text-white" />,
      title: "AI Automation",
      description:
        "Our AI system begins sourcing leads, generating personalized emails, and managing follow-ups without your involvement.",
      color: "bg-sales-secondary",
    },
    {
      icon: <BarChart3 size={24} className="text-white" />,
      title: "Get Results",
      description:
        "Receive weekly PDF reports and Slack notifications about campaign performance and scheduled meetings.",
      color: "bg-sales-accent",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-sales-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-sales-dark sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Three simple steps to fully automated sales outreach.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-300 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-16 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center z-10`}>
                      {step.icon}
                    </div>
                    <div className={`mt-4 md:mt-0 md:ml-6 text-center md:text-left ${index !== steps.length - 1 ? "pb-16 md:pb-0" : ""}`}>
                      <h3 className="text-xl font-bold text-sales-dark">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 md:hidden">
                      <ArrowRight className="transform rotate-90 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Our AI takes care of everything while you focus on closing deals
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
