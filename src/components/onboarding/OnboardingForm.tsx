
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    targetIndustries: "",
    targetRoles: "",
    valueProposition: "",
    email: "",
    slackWebhook: "",
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.companyName || !formData.websiteUrl || !formData.email)) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields to continue.",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to edge function for email delivery
      const { data, error } = await supabase.functions.invoke('send-onboarding-email', {
        body: formData,
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      toast({
        title: "Onboarding successful!",
        description: "We've received your information and will be in touch shortly to configure your AI sales campaigns.",
      });
      
      setStep(3);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Started with AI Sales Whisperer</CardTitle>
        <CardDescription className="text-center">
          {step === 1 && "Tell us about your company"}
          {step === 2 && "Set up your campaign preferences"}
          {step === 3 && "All set! Your AI sales assistant is being configured"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Acme Corporation"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Website URL <span className="text-red-500">*</span></Label>
              <Input
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://www.example.com"
                required
              />
              <p className="text-sm text-gray-500">
                We'll analyze your website to extract information for personalized emails
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="targetIndustries">Target Industries</Label>
              <Input
                id="targetIndustries"
                name="targetIndustries"
                value={formData.targetIndustries}
                onChange={handleChange}
                placeholder="E.g. SaaS, Fintech, Healthcare"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetRoles">Target Roles</Label>
              <Input
                id="targetRoles"
                name="targetRoles"
                value={formData.targetRoles}
                onChange={handleChange}
                placeholder="E.g. CMO, VP of Marketing, Growth Manager"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="valueProposition">Value Proposition</Label>
              <Textarea
                id="valueProposition"
                name="valueProposition"
                value={formData.valueProposition}
                onChange={handleChange}
                placeholder="What makes your product/service unique? What problems does it solve?"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slackWebhook">Slack Webhook URL (Optional)</Label>
              <Input
                id="slackWebhook"
                name="slackWebhook"
                value={formData.slackWebhook}
                onChange={handleChange}
                placeholder="https://hooks.slack.com/services/..."
              />
              <p className="text-sm text-gray-500">
                For real-time notifications about campaign performance
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="py-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Thank you!</h3>
            <p className="text-gray-500 mt-2">
              Your AI sales assistant is being configured. We'll send you an email when it's ready to start generating leads.
            </p>
            <div className="mt-4 text-center animate-pulse-glow">
              <p className="text-sales-primary font-medium">
                ETA: 24-48 hours
              </p>
            </div>
          </div>
        )}
      </CardContent>

      {step !== 3 && (
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          {step < 2 ? (
            <Button onClick={handleNextStep}>
              Next
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={isSubmitting} 
              className="bg-sales-primary hover:bg-sales-secondary"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default OnboardingForm;
