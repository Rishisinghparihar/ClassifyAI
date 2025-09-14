import { extractJSON } from "@/lib/helper";
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { syllabus, examDate, provider = "openai" } = body;

    if (!syllabus) {
      return NextResponse.json(
        { error: "Syllabus is required" },
        { status: 400 }
      );
    }

    const gptPrompt = `
You are an intelligent academic AI assistant helping an engineering student prepare for exams. Given the syllabus and optionally the exam date, create:

1. 📘 Study Roadmap (weekly breakdown)
2. 🎯 Important Topics
3. ❓ Important Questions
4. 🗓️ Personalized Daily Study Plan (adjust based on days left if examDate is given)

Syllabus:
${syllabus}

${examDate ? `Exam Date: ${examDate}` : ""}

Respond ONLY in this JSON format:
{
  "roadmap": ["Week 1: ...", "Week 2: ..."],
  "importantTopics": ["...", "..."],
  "importantQuestions": ["...", "..."],
  "studyPlan": {
    "Day 1": "...",
    "Day 2": "...",
    ...
  }
}
`;

    let aiResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful AI that generates structured study plans.",
          },
          {
            role: "user",
            content: gptPrompt,
          },
        ],
        max_tokens: 4096,
      }),
    });

    const result = await aiResponse.json();
    const rawText = result?.choices?.[0]?.message?.content || "";
    // console.log("🟢 Study Plan Response:", rawText);
    const data = extractJSON(rawText);

    return NextResponse.json(
      { success: true, provider, data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Study Plan Generation Error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
