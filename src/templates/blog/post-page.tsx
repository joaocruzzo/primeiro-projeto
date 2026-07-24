import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

import Link from "next/link"
import Image from "next/image"

import { Post } from "contentlayer/generated"

import { Avatar } from "@/components/avatar"
import { Markdown } from "@/components/markdown"
import { PostShareDesktop, PostShareMobile } from "./components/post-share"

export type PostPageProps = {
    post: Post
}

export const PostPage = ({ post }: PostPageProps) => {
    const publishedDate = new Date(post.date).toLocaleDateString('pt-BR')

    const postUrl = `https://site.set/blog/${post.slug}`

    return (
        <main className="py-24 text-gray-100">
            <div className="container space-y-12 px-4 md:px-8">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-center">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild className="text-action-sm">
                                    <Link href="/blog">
                                        Blog
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem className="min-w-0 flex-1">
                                <span className="block truncate text-blue-200 text-action-sm">
                                    {post?.title}
                                </span>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <PostShareMobile
                        url={postUrl}
                        title={post.title}
                        description={post.description}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
                    <article className="bg-gray-600 rounded-lg overflow-hidden border border-gray-400">
                        <figure className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image
                                src={post?.image ?? ""}
                                alt={post?.title ?? ""}

                                fill

                                className="object-cover"
                            />
                        </figure>

                        <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
                            <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                                {post?.title}
                            </h1>

                            <Avatar.Container>
                                <Avatar.Image
                                    size="sm"
                                    alt={post?.author.name}
                                    src={post?.author.avatar}
                                />

                                <Avatar.Content>
                                    <Avatar.Title>
                                        {post?.author.name}
                                    </Avatar.Title>

                                    <Avatar.Description>
                                        Publicado em {" "}

                                        <time dateTime={post?.date}>
                                            {publishedDate}
                                        </time>
                                    </Avatar.Description>
                                </Avatar.Content>
                            </Avatar.Container>
                        </header>

                        <div className="prose prose-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
                            <Markdown content={post.body.raw} />
                        </div>
                    </article>

                    <PostShareDesktop
                        url={postUrl}
                        title={post.title}
                        description={post.description}
                    />
                </div>
            </div>
        </main>
    )
}