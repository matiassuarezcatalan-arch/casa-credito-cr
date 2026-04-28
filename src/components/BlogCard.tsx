import { Link } from "@tanstack/react-router";
import { Calendar, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString("es-CR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {post.coverImage && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        {post.category && (
          <span className="flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Tag size={11} />
            {post.category}
          </span>
        )}
        <h2 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h2>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar size={13} />
          {formattedDate}
        </div>
      </div>
    </Link>
  );
}
