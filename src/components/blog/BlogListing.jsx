"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { FiChevronDown, FiFilter, FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const postsPerPage = 8;
const siblingCount = 1;

const getPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  const startPage = Math.max(1, currentPage - siblingCount);
  const endPage = Math.min(totalPages, currentPage + siblingCount);

  for (let page = startPage; page <= endPage; page += 1) {
    pages.push(page);
  }

  return pages;
};

export const BlogListing = ({ featured, posts, categories, labels }) => {
  const [activeCategory, setActiveCategory] = useState(labels.all);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions = [labels.all, ...categories];
  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === labels.all || post.category === activeCategory;
      const matchesSearch =
        !normalizedQuery ||
        [post.title, post.excerpt, post.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, labels.all, posts, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const currentPosts = filteredPosts.slice(
    (safePage - 1) * postsPerPage,
    safePage * postsPerPage,
  );
  const pageNumbers = getPageNumbers(safePage, totalPages);

  const handleFilter = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <div className="rounded-[32px] border border-neutral-200 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/70">
          <label className="text-sm font-bold text-neutral-800 dark:text-white">
            {labels.searchLabel}
          </label>
          <div className="relative mt-3">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              value={searchQuery}
              onChange={handleSearch}
              placeholder={labels.searchPlaceholder}
              className="h-12 w-full rounded-full border border-neutral-200 bg-white px-11 text-sm outline-none transition placeholder:text-neutral-400 focus:border-main dark:border-white/10 dark:bg-neutral-800 dark:text-white"
            />
          </div>

          <label className="mt-7 block text-sm font-bold text-neutral-800 dark:text-white">
            {labels.filterLabel}
          </label>
          <div className="relative mt-3">
            <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <select
              value={activeCategory}
              onChange={(event) => handleFilter(event.target.value)}
              className="h-12 w-full appearance-none rounded-full border border-neutral-200 bg-white px-11 text-sm font-semibold text-neutral-600 outline-none transition focus:border-main dark:border-white/10 dark:bg-neutral-800 dark:text-white"
            >
              {filterOptions.map((category) => (
                <option key={category} value={category}>
                  {category === labels.all ? labels.filterPlaceholder : category}
                </option>
              ))}
            </select>
            <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm font-bold text-main dark:text-goYellow">
              {labels.categoriesTitle}
            </p>
            <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {filterOptions.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    onClick={() => handleFilter(category)}
                    className={`shrink-0 border-l-2 px-4 py-2 text-left text-sm font-bold transition lg:w-full ${
                      isActive
                        ? "border-main text-main dark:border-goYellow dark:text-goYellow"
                        : "border-transparent text-neutral-600 hover:border-main hover:text-main dark:text-gray-300 dark:hover:text-goYellow"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      <div>
        <article className="group relative mb-10 min-h-[520px] overflow-hidden rounded-[40px] bg-neutral-950 text-white shadow-sm">
          <Image
            src={featured.cover}
            alt={featured.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10" />

          <div className="absolute left-5 top-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-main shadow-lg">
              {labels.highlighted}
            </span>
            <span className="rounded-full bg-black/35 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
              {featured.category}
            </span>
          </div>

          <div className="absolute right-0 bottom-4 md:bottom-6 w-1/2 h-full pr-4 md:pr-6 flex items-end">
            <div className="w-full max-w-3xl rounded-[32px] border border-white/20 bg-black/30 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <p className="mb-4 text-sm font-bold text-goYellow">
                {labels.highlightSummary}
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base line-clamp-1">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-wrap gap-3 text-sm font-bold text-white/70">
                  <span>{featured.date}</span>
                  <span>
                    {featured.readTime} {labels.readTime}
                  </span>
                </div>
                <button
                  type="button"
                  className="flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-neutral-900 transition hover:bg-goYellow"
                >
                  {labels.readMore}
                  <GoArrowUpRight />
                </button>
              </div>
            </div>
          </div>

     
        </article>

        {currentPosts.length > 0 ? (
          <div className="grid gap-x-7 gap-y-10 md:grid-cols-2">
            {currentPosts.map((post) => (
              <article
                key={`${post.title}-${post.date}`}
                className="group"
              >
                <div className="relative h-64 overflow-hidden rounded-[28px] md:h-72">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="pt-5">
                  <p className="mb-2 text-sm font-bold text-main dark:text-goYellow">
                    {post.category}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-neutral-900 transition group-hover:text-main dark:text-white dark:group-hover:text-goYellow">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="text-xs font-semibold text-neutral-500 dark:text-gray-400">
                      <p>{post.date}</p>
                      <p>
                        {post.readTime} {labels.readTime}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition group-hover:bg-main dark:bg-white dark:text-neutral-900 dark:group-hover:bg-main dark:group-hover:text-white">
                      <GoArrowUpRight />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-neutral-200/70 p-8 text-center text-sm font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-gray-300">
            {labels.empty}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center justify-between gap-5 lg:flex-row">
            <p className="text-sm font-semibold text-neutral-600 dark:text-gray-300">
              {labels.page} {safePage} {labels.of} {totalPages}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                type="button"
                variant="outline"
                disabled={safePage === 1}
                onClick={() => goToPage(1)}
                className="rounded-full px-4"
                aria-label="First page"
              >
                Min
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={safePage === 1}
                onClick={() => goToPage(safePage - 1)}
                className="rounded-full px-4"
              >
                <GoArrowLeft />
                {labels.previous}
              </Button>
              {pageNumbers[0] > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goToPage(1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-sm font-bold text-neutral-700 transition hover:border-main hover:text-main dark:border-white/10 dark:text-white"
                  >
                    1
                  </button>
                  {pageNumbers[0] > 2 && (
                    <span className="px-1 text-sm font-bold text-neutral-400">
                      ...
                    </span>
                  )}
                </>
              )}
              {pageNumbers.map((page) => {
                const isActive = page === safePage;

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition ${
                      isActive
                        ? "border-main bg-main text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-main hover:text-main dark:border-white/10 dark:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}
              {pageNumbers[pageNumbers.length - 1] < totalPages && (
                <>
                  {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                    <span className="px-1 text-sm font-bold text-neutral-400">
                      ...
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => goToPage(totalPages)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-sm font-bold text-neutral-700 transition hover:border-main hover:text-main dark:border-white/10 dark:text-white"
                  >
                    {totalPages}
                  </button>
                </>
              )}
              <Button
                type="button"
                disabled={safePage === totalPages}
                onClick={() => goToPage(safePage + 1)}
                className="rounded-full bg-main text-white hover:bg-neutral-900"
              >
                {labels.next}
                <GoArrowRight />
              </Button>
              <Button
                type="button"
                disabled={safePage === totalPages}
                onClick={() => goToPage(totalPages)}
                className="rounded-full bg-neutral-900 px-4 text-white hover:bg-main dark:bg-white dark:text-neutral-900 dark:hover:bg-main dark:hover:text-white"
                aria-label="Last page"
              >
                Max
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
