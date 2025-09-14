import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // --- Step 1: Handle Pagination (Essential for tables) ---
    // Example: /api/admin/events?page=1&limit=20
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const skip = (page - 1) * limit;

    // --- Step 2: Handle Dynamic Sorting ---
    // Example: &sortBy=date&sortOrder=desc
    const sortBy = searchParams.get("sortBy") || "date";
    const sortOrder = searchParams.get("sortOrder") || "desc"; // 'desc' shows most recent first

    // Validate sortBy to prevent errors, allowing only specific fields
    const allowedSortBy = ["title", "date", "type", "active"];
    const orderByField = allowedSortBy.includes(sortBy) ? sortBy : "date";
    
    const orderBy = { [orderByField]: sortOrder };

    // --- Step 3: Fetch Data and Total Count Concurrently ---
    // The `where` clause is removed to fetch ALL events
    const [events, totalEvents] = await prisma.$transaction([
      prisma.event.findMany({
        orderBy, // Apply dynamic sorting
        select: {
          id: true,
          title: true,
          date: true,
          type: true,
          description: true,
          active: true,
        },
        skip,   // Apply pagination
        take: limit,
      }),
      prisma.event.count(), // Get total count for all events
    ]);

    // --- Step 4: Return Paginated Response for the Admin Table ---
    return NextResponse.json({
      success: true,
      events,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalEvents / limit),
        totalEvents,
        limit,
      },
    });
  } catch (error) {
    console.error("Failed to fetch events for admin:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}