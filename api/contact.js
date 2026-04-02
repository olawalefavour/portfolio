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
      to: "your@email.com", // 👈 PUT YOUR EMAIL HERE
      subject: "New Message",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed" });
  }
}