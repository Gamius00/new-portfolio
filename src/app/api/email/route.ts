import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../../emails";
import rateLimit from "next-rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 5, // Max 5 request per minute
});

const resend = new Resend(process.env.RESEND_API_KEY);
export const POST = async (req: NextRequest) => {
  try {
    const { email, name, title, category, message } = await req.json();
    const headers = limiter.checkNext(req, 10);

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

    return NextResponse.json(
      {
        status: "OK",
        limit: headers.get("X-RateLimit-Limit"),
        remaining: headers.get("X-RateLimit-Remaining"),
      },
      { headers }
    );
  } catch (e) {
    if (e.statusCode === 422) {
      return NextResponse.json(
        { error: "Missing required field" },
        { status: 422 }
      );
    }
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }
};
