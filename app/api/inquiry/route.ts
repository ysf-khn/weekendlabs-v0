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
      text: `You have a new inquiry:

        Name: ${body.fullName}
        Email: ${body.email}
        Phone: ${body.phone || "N/A"}
        Service: ${body.service}
        Budget: ${body.budget || "N/A"}
        `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Inquiry submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return new Response(JSON.stringify({ error: "Error submitting inquiry" }), {
      status: 500,
    });
  }
}
