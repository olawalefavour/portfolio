import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "olawalekoladefavour@gmail.com", 
      subject: "New Message",
      html: `
  <div style="font-family: Arial, sans-serif; background: #0f172a; padding: 40px; color: #fff;">
    
    <div style="max-width: 600px; margin: auto; background: #111827; border-radius: 12px; overflow: hidden;">
      
      <!-- Header -->
      <div style="background: linear-gradient(90deg, #7c3aed, #06b6d4); padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 20px;">New Portfolio Message</h2>
      </div>

      <!-- Body -->
      <div style="padding: 25px;">
        
        <p style="color: #9ca3af; font-size: 14px;">You just received a new message from your website.</p>

        <div style="margin-top: 20px;">
          <p><strong style="color:#fff;">Name:</strong> ${name}</p>
          <p><strong style="color:#fff;">Email:</strong> ${email}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: #1f2937; border-radius: 8px;">
          <p style="margin: 0; color: #e5e7eb;">${message}</p>
        </div>

      </div>

      <!-- Footer -->
      <div style="padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
        Sent from your portfolio 🚀
      </div>

    </div>
  </div>
`
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed" });
  }
}