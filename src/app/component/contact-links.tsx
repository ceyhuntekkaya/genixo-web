"use client";

import type { CSSProperties } from "react";
import { entity, telHref } from "@/content/entity";
import { track } from "@/lib/track";

export function PhoneLink({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <a className={className} style={style} href={telHref()} onClick={() => track("phone_click")}>
      {children ?? entity.phone}
    </a>
  );
}

export function EmailLink({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={className}
      style={style}
      href={`mailto:${entity.email}`}
      onClick={() => track("email_click")}
    >
      {children ?? entity.email}
    </a>
  );
}
