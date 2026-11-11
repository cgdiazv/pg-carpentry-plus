import { Resend } from "resend";

const allowedInterests = new Set([
  "Accent Walls",
  "Floating Shelves",
  "Mud Benches",
  "Shiplap",
  "Custom Closets",
  "Crown Molding",
  "Ceiling Beams",
  "Barn Doors",
  "Fireplace Mantels",
  "Bookshelves",
  "Baseboard Upgrades",
  "Storage Solutions",
  "Hardware Installation",
]);

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  interests?: unknown;
  message?: unknown;
};

function isContactRequest(value: unknown): value is ContactRequest {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (!isContactRequest(payload)) {
    return Response.json(
      { error: "Request body must be a JSON object." },
      { status: 400 },
    );
  }

  const { name, email, phone, interests, message } = payload;

  if (
    !isNonEmptyString(name) ||
    name.trim().length > 100 ||
    !isNonEmptyString(email) ||
    email.trim().length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    (phone !== undefined &&
      (typeof phone !== "string" || phone.trim().length > 40)) ||
    !isNonEmptyString(message) ||
    message.trim().length > 5000 ||
    !Array.isArray(interests) ||
    interests.length === 0 ||
    !interests.every(
      (interest): interest is string =>
        typeof interest === "string" && allowedInterests.has(interest),
    )
  ) {
    return Response.json(
      { error: "Please check your details and select at least one service." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json(
      {
        error:
          "The quote form is temporarily unavailable. Please call us instead.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  let sendError: unknown;

  try {
    const { error } = await resend.emails.send({
      from: "notifications@indevasa.com",
      to: "info@pgcarpentryplus.com",
      replyTo: email.trim(),
      subject: "New website quote request",
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${isNonEmptyString(phone) ? phone.trim() : "Not provided"}`,
        `Interested in: ${interests.join(", ")}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    });

    sendError = error;
  } catch (error) {
    sendError = error;
  }

  if (sendError) {
    console.error("Contact form email delivery failed:", sendError);
    return Response.json(
      { error: "We couldn't send your request. Please try again or call us." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
