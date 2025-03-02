"use client";
import { useSearchParams } from "next/navigation";

import target from "@/assets/links";

export default function Link() {
  const searchParams = useSearchParams();
  const link = searchParams.get("link");

  if (link) {
    const url = (target as Record<string, unknown>)[link];

    if (typeof url == "string") {
      window.location.href = url;
      return <p>Redirecting...</p>;
    }

    window.location.href = "/";
    return <p>Link not found.</p>;
  }

  return null;
}