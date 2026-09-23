"use client";

import dynamic from "next/dynamic";

// three.js needs the browser, so the map is only rendered on the client.
const IndiaMap = dynamic(() => import("@/components/site/india-map"), { ssr: false });

export default function Experience() {
  return <IndiaMap />;
}
