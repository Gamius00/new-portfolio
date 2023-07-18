import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "../../../emails";
import rateLimit from "next-rate-limit";
import { z } from "zod";

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 5, // Max 5 request per interval
});

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactValidator = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  name: z.string().min(3, { message: "Your name must be at least 3 letters" }),
  title: z
    .string()
    .min(3, { message: "Your title must be at least 3 letters" }),
  // Not required
  category: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Your message must be at least 10 characters long" })
    .max(2000, {
      message: "Your message must be less than 2000 characters long",
    }),
});

type Inputs = z.infer<typeof ContactValidator>;

export const POST = async (req: NextRequest) => {
  try {
    const body: Inputs = await req.json();
    const { email, name, title, category, message } = body;
    ContactValidator.parse(body);
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
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.message }, { status: 422 });
    }
    if (e.statusCode === 422) {
      return NextResponse.json(
        { error: "Missing required field" },
        { status: 422 }
      );
    }
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }
};
