import { setRequestLocale } from "next-intl/server";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import { Navbar } from "@/components/common/Navbar";
import { BlogPageContent } from "@/components/blog/BlogPageContent";
import { blogMetadata } from "@/lib/blogs";

export function generateMetadata() {
  return {
    title: blogMetadata.title,
    description: blogMetadata.description,
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative">
      <Navbar />
      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <BlogPageContent />
      </AnimateOnScroll>
    </main>
  );
}
