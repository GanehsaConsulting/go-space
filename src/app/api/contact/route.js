import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        { message: "Server configuration error - missing credentials" },
        { status: 500 }
      );
    }

    console.log("Creating transporter with email:", process.env.EMAIL_USER);

    // Create transporter - OPSI 1: Gmail dengan pengaturan eksplisit
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Untuk development, hapus di production
      }
    });

    // SKIP verification dan langsung kirim email
    console.log("Attempting to send email...");

    const info = await transporter.sendMail({
      from: `"Go Space Contact" <${process.env.EMAIL_USER}>`,
      to: "ganeshamultikreatif@gmail.com",
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; }
            .content { padding: 20px 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #333; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; color: #333;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("Email sent successfully:", info.messageId);
    console.log("Response:", info.response);

    return NextResponse.json(
      { message: "Email sent successfully", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed email error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });
    
    // Provide more specific error messages
    let errorMessage = "Mohon maaf, terjadi kesalahan saat mengirim pesan. Anda dapat email langsung ke ganeshamultikreatif@gmail.com atau WhatsApp ke +62 887-1510-044.";
    
    // if (error.code === "EAUTH" || error.responseCode === 535) {
    //   errorMessage = "Authentication failed. Please check your Gmail App Password.";
    // } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
    //   errorMessage = "Connection failed. Please check network settings.";
    // } else if (error.responseCode === 534) {
    //   errorMessage = "Gmail requires App Password. Please enable 2FA and create App Password.";
    // }

    return NextResponse.json(
      { 
        message: errorMessage, 
        error: error.message,
        code: error.code,
        details: error.response 
      },
      { status: 500 }
    );
  }
}