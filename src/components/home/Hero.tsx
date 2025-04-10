
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">AI-powered sales</span>{" "}
                <span className="block text-sales-primary xl:inline">without the hassle</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Our AI agency handles everything from lead generation to personalized outreach and follow-ups. Get more meetings with less effort.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button
                    onClick={scrollToForm}
                    className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md text-white bg-sales-primary hover:bg-sales-secondary md:py-6 md:text-lg md:px-10"
                  >
                    <Calendar className="mr-2 h-5 w-5" /> Book a Free Meeting
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="outline"
                    className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md border-sales-accent text-sales-dark bg-white hover:text-sales-primary md:py-6 md:text-lg md:px-10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="AI sales team working"
        />
      </div>
    </div>
  );
};

export default Hero;
