export const dynamic = "force-dynamic";

"use client";

import { Suspense } from "react";
import Content from "./Content";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center text-white p-8">Loading…</div>}>
      <Content />
    </Suspense>
  );
}
