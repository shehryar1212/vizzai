
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OnboardingFormData {
  companyName: string;
  websiteUrl: string;
  targetIndustries: string;
  targetRoles: string;
  valueProposition: string;
  email: string;
  slackWebhook: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: OnboardingFormData = await req.json();
    console.log("Received form submission:", formData);

    // Format the email content
    const emailHtml = `
      <h1>New Onboarding Submission</h1>
      <h2>Company Details:</h2>
      <ul>
        <li><strong>Company Name:</strong> ${formData.companyName}</li>
        <li><strong>Website URL:</strong> ${formData.websiteUrl}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
      </ul>
      
      <h2>Campaign Information:</h2>
      <ul>
        <li><strong>Target Industries:</strong> ${formData.targetIndustries || "Not specified"}</li>
        <li><strong>Target Roles:</strong> ${formData.targetRoles || "Not specified"}</li>
        <li><strong>Value Proposition:</strong> ${formData.valueProposition || "Not specified"}</li>
        <li><strong>Slack Webhook:</strong> ${formData.slackWebhook || "Not provided"}</li>
      </ul>
    `;

    // Send email to the specified address
    const emailResponse = await resend.emails.send({
      from: "Vizzai Onboarding <onboarding@resend.dev>",
      to: ["ahmedshehryar080@gmail.com"],
      subject: `New Onboarding: ${formData.companyName}`,
      html: emailHtml,
      reply_to: formData.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-onboarding-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
