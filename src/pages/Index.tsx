
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Navbar from "@/components/layout/Navbar";
import OnboardingForm from "@/components/onboarding/OnboardingForm";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      
      <section id="get-started" className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-sales-dark sm:text-4xl">
              Book Your Free AI Sales Consultation
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Let's discuss how Vizzai can transform your sales outreach with AI automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <OnboardingForm />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-sales-primary p-2 rounded-full">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-sales-dark">30-Minute Strategy Session</h3>
                  <p className="mt-1 text-gray-600">A focused call to understand your business needs and showcase how our AI can help</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-sales-accent p-2 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-sales-dark">Flexible Scheduling</h3>
                  <p className="mt-1 text-gray-600">Choose a time that works best for you, and we'll confirm immediately</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-sales-secondary p-2 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-sales-dark">Expert Consultation</h3>
                  <p className="mt-1 text-gray-600">Talk directly with our AI sales specialists who understand your industry</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 font-medium">No obligation, completely free consultation</span>
                </div>
              </div>
              
              <Button className="w-full mt-4 py-6 text-lg bg-sales-primary hover:bg-sales-secondary flex justify-center items-center gap-2">
                <Calendar className="h-5 w-5" /> 
                Book Your Free Meeting Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-sales-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <div className="text-white font-bold text-xl">
                Vizz<span className="text-sales-accent">ai</span>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-base text-gray-400">
                &copy; {new Date().getFullYear()} Vizzai. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
