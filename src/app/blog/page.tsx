import { Metadata } from "next";

import { BlogList } from "@/templates/blog";

import { allPosts } from "contentlayer/generated";

export const metadata: Metadata = {
    title: 'Blog - Site.set',
    description: 'Dicas e estratégias para impulsionar seu negócio',
}

export default function BlogListPage() {
    const sortedPosts = allPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <BlogList posts={sortedPosts} />
    )
}