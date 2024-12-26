import { connectDB } from "@/app/Utilities/mongoose";
import inquiryModel from "@/database/inquiry.model";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Connect to MongoDB
    await connectDB();

    // Save inquiry to MongoDB
    const inquiry = new inquiryModel(body);
    await inquiry.save();

    // Format services list for email
    const servicesList = body.services
      .map((service: string) => `    • ${formatServiceLabel(service)}`)
      .join("\n");

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Weekend Labs" <${process.env.EMAIL_USER}>`,
      to: "hello@weekendlabs.in",
      subject: `New Inquiry Received from ${body.fullName}`,
      text: `New Inquiry Details:

Client Information:
----------------
Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}

Project Details:
----------------
Selected Services:
${servicesList}

Received on: ${new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      })}

View all inquiries at: ${
        process.env.ADMIN_DASHBOARD_URL || "[Dashboard URL not configured]"
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">
          <h2 style="font-size: 28px; color: #333; margin-bottom: 25px;">New Inquiry Details</h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="font-size: 24px; color: #2c5282; margin-bottom: 15px;">Client Information:</h3>
            <p style="font-size: 18px; margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${
              body.fullName
            }</p>
            <p style="font-size: 18px; margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${
              body.email
            }</p>
            <p style="font-size: 18px; margin: 10px 0;"><strong style="color: #333;">Phone:</strong> ${
              body.phone || "Not provided"
            }</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="font-size: 24px; color: #2c5282; margin-bottom: 15px;">Project Details:</h3>
            <p style="font-size: 18px; margin: 10px 0;"><strong style="color: #333;">Selected Services:</strong></p>
            <ul style="font-size: 18px; margin: 10px 0; padding-left: 20px;">
              ${body.services
                .map(
                  (service: string) =>
                    `<li style="margin: 8px 0;">${formatServiceLabel(
                      service
                    )}</li>`
                )
                .join("")}
            </ul>

          </div>

          <p style="font-size: 16px; color: #666; margin-top: 20px;">
            Received on: ${new Date().toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>

          <div style="margin-top: 30px;">
            <a href="${process.env.ADMIN_DASHBOARD_URL || "#"}" 
               style="font-size: 18px; background-color: #2c5282; color: white; padding: 12px 25px; 
                      text-decoration: none; border-radius: 5px; display: inline-block;">
              View All Inquiries
            </a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Inquiry submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return new Response(
      JSON.stringify({
        error: "Error submitting inquiry",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// Helper function to format service labels
function formatServiceLabel(service: string): string {
  const labels: { [key: string]: string } = {
    website: "Website Development",
    "ecommerce-store": "Ecommerce Store",
    "custom-software": "Custom Software / App",
    "logo-branding": "Logo / Branding",
    design: "UI/UX / Graphic Design",
    marketing: "Social Media Marketing",
    seo: "SEO",
    automation: "Automation",
    "product-catalog": "Product Catalog",
  };
  return labels[service] || service;
}

// Helper function to format budget
// function formatBudget(budget: string | undefined): string {
//   if (!budget) return "Not specified";

//   const budgetLabels: { [key: string]: string } = {
//     '<25000': 'Less than ₹25,000',
//     '25000-50000': '₹25,000 - ₹50,000',
//     '50000-100000': '₹50,000 - ₹1,00,000',
//     '>100000': 'More than ₹1,00,000'
//   };

//   return budgetLabels[budget] || budget;
// }
