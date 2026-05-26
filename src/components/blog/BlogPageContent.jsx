import { BlogListing } from "@/components/blog/BlogListing";
import {
  blogCategories,
  blogLabels,
  blogPosts,
  highlightedBlog,
} from "@/lib/blogs";

export const BlogPageContent = () => {
  return (
    <section className="p-4 pb-20 pt-24 font-nunito md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold text-main dark:text-goYellow">
            {blogLabels.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-6xl">
            {blogLabels.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-gray-300 md:text-base">
            {blogLabels.description}
          </p>
        </div>

        <BlogListing
          featured={highlightedBlog}
          posts={blogPosts}
          categories={blogCategories}
          labels={blogLabels}
        />
      </div>
    </section>
  );
};
