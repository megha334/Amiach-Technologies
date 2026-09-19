import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Audio Video Manufacturing | AMIACH Technologies",
  description:
    "Explore AMIACH Technologies audio video manufacturing and interactive AV hardware solutions.",
};

export default function AudioVideoManufacturingPage() {
  return <CategoryPage type="av" />;
}
