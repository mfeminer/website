import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/mdx-components";
import { tr } from "date-fns/locale";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import ClapsButton from "@/components/claps";

export async function generateMetadata({ params, searchParams }) {
  const post = allPosts.find((post: Post) => post.slug === params.slug) as Post;
  return { title: post.title, description: post.subtitle };
}

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({ slug: post.slug }));
}

export default function PostPage({ params }) {
  const post: Post = allPosts.find(
    (post: Post) => post.slug === params.slug
  ) as Post;

  if (!post) {
    notFound();
  }

  const Component = useMDXComponent(post.body.code);

  return (
    <Container>
      <article className="post">
        <header>
          <h1 className="shine text-2xl font-semibold">{post.title}</h1>
          <h2 className="mt-2 text-xl">{post.subtitle}</h2>

          <div className="mt-10 flex items-center space-x-2 opacity-60">
            <time dateTime={post.date}>
              {format(parseISO(post.date), "d LLLL yyyy", {
                locale: tr,
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime.text}</span>
          </div>
        </header>

        <div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-zinc-200">
          <Component
            components={{
              ...MDXComponents,
            }}
          />
        </div>

        <div className="mt-20 flex justify-center">
          <ClapsButton url={post.tweetUrl} />
        </div>
      </article>
    </Container>
  );
}
