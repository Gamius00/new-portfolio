import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);
export const POST = async (req: NextRequest) => {
  const { email, name, title, category, message } = await req.json();

  await resend.sendEmail({
    from: "onboarding@resend.dev",
    to: "gescheaftlichgamius@gmx.de",
    subject: title,
    react: WelcomeEmail({
      emailAdressOfSender: email,
      nameOfSender: name,
      category: category,
      message: message,
    }),
  });

  return NextResponse.json({
    status: "OK",
  });
};
