import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Internship Training & Live Projects | AMIACH Technologies",
  description:
    "Explore internship training and live project opportunities at AMIACH Technologies.",
};

export default function InternshipTrainingPage() {
  return <CategoryPage type="internship" />;
}