import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Locale } from "@/i18n/config";
import { localHref } from "./text";
import s from "./page.module.css";

/** `[[TODO-NNN]]` becomes a `#todo` link so it renders as the same placeholder mark used in page copy. */
function withTodoLinks(body: string) {
  return body.replace(/\[\[(TODO-\d{3})\]\]/g, "[$1](#todo)");
}

export default function Markdown({ body, locale }: { body: string; locale: Locale }) {
  return (
    <div className={s.md}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => <h2 {...props} />,
          a: ({ href = "", children }) => {
            if (href === "#todo") {
              return (
                <mark className={s.todo} title="docs/content-todos.md">
                  {children}
                </mark>
              );
            }
            if (href.startsWith("http")) {
              return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              );
            }
            if (/^(mailto:|tel:)/.test(href)) return <a href={href}>{children}</a>;
            return <Link href={localHref(locale, href)}>{children}</Link>;
          },
        }}
      >
        {withTodoLinks(body)}
      </ReactMarkdown>
    </div>
  );
}
