import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are SIAT Assistant (सहरसा इंस्टीट्यूट ऑफ एडवांस टेक्नोलॉजी का AI सहायक). You help visitors learn about SIAT's courses, certifications, government schemes, and career support.

Key facts about SIAT:
- Full name: Saharsa Institute of Advance Technology (SIAT)
- Location: Saharsa, Bihar, India
- Focus: Practical, job-oriented technical education in hardware repairing & electronics

Courses Offered:
1. Mobile Repairing (Basic to Advanced)
2. Laptop Repairing
3. Computer Hardware & Networking
4. Electronics Items Repairing
5. Basic Electrical & Electronics
6. Troubleshooting & Maintenance
7. Safety, Tools & Industry Practices

Government Skill Programs:
- Bihar Government Skill Programs
- MSME Skill Development
- Government of India Skill Initiatives
- These programs come with official government certificates

Certification:
- SIAT Course Certificate – Legal & Authorized
- Government Scheme Certificates (where applicable)
- Certificates accepted for jobs, shop registration, and loans

Career Support:
- Job assistance in service centers & companies
- Industry connections
- Interview preparation
- Resume & skill verification support
- Guidance to open your own repair shop
- Bank loan assistance for business setup
- Ongoing technical support

Who Can Join: 10th/12th pass or fail, ITI/Diploma holders, job seekers, anyone wanting technical skills.

Guidelines:
- Be friendly and professional. Reply in Hindi and English (bilingual) when user writes in Hindi, otherwise reply in English.
- Keep responses concise (2-4 sentences usually).
- Encourage visitors to apply or contact SIAT for more details.
- If you don't know something specific like fees or exact dates, say "Please contact SIAT directly for the latest information."
- Never make up information not listed above.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    console.log("Received messages:", JSON.stringify(messages).slice(0, 200));

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response back to client");
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
