
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-sales-light bg-hero-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-sales-dark sm:text-5xl md:text-6xl">
                <span className="block">Fully Automated</span>
                <span className="block text-sales-primary">
                  AI-Driven Sales Agency
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Let AI handle your entire sales pipeline: from sourcing leads to
                generating personalized emails and automatic follow-ups, all
                without requiring your constant attention.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/dashboard">
                    <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sales-primary hover:bg-sales-secondary md:py-4 md:text-lg md:px-10">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#how-it-works">
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </main>

          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="relative h-56 sm:h-72 md:h-96 lg:h-full lg:w-full flex items-center justify-center px-4 lg:px-0">
              <div className="bg-white p-6 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate-float max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">AI Sales Assistant</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-sales-primary text-white flex items-center justify-center flex-shrink-0">
                      <Bot size={16} />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">
                        I've sourced 50 new leads for your SaaS product from
                        companies in the fintech sector
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-sales-primary text-white flex items-center justify-center flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">
                        I've drafted personalized emails based on their website
                        content and job roles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-sales-primary text-white flex items-center justify-center flex-shrink-0">
                      <Clock size={16} />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">
                        Your weekly performance report is ready. 12 responses
                        received, 3 meetings scheduled
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500 flex justify-between">
                  <span>Automated • Now</span>
                  <span className="text-sales-primary">Weekly Report →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
