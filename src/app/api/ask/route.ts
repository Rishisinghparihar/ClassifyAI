import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { prompt, model } = await request.json();
  try {
    if (model === "claude") {
      const response = await fetch("https://api.anthropic.com/v1/complete", {
        method: "POST",
        headers: {
          "x-api-key": process.env.CLAUDE_API_KEY as string,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-3-opus-20240229",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      return NextResponse.json({
        reply: data?.content?.[0]?.text || "No response from Claude.",
      });
    } else {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful Fcollege tutor solving student doubts.",
          },
          { role: "user", content: prompt },
        ],
      });
      return NextResponse.json({
        reply: completion.choices[0].message.content,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { reply: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
