import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "App & Web Development | AMIACH Technologies",
  description:
    "Explore AMIACH Technologies app, web development, dashboard and software solutions.",
};

export default function AppWebDevelopmentPage() {
  return <CategoryPage type="development" />;
}