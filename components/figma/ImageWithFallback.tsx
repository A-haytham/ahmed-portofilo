"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type FetchPriority = "high" | "low" | "auto";
type Loading = "eager" | "lazy";
type Decoding = "async" | "sync" | "auto";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  fetchPriority?: FetchPriority;
  sizes?: string;
  quality?: number;
  loading?: Loading;
  decoding?: Decoding;
  unoptimized?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  priority = false,
  fetchPriority,
  sizes = "100vw",
  quality,
  loading,
  decoding = "async",
  unoptimized = false,
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const isFallback = currentSrc === ERROR_IMG_SRC;
  const isUnsplashSource = currentSrc.includes("source.unsplash.com");

  return (
    <div className="relative h-full w-full">
      <Image
        src={currentSrc}
        alt={isFallback ? "Error loading image" : alt}
        fill
        sizes={sizes}
        className={className}
        style={style}
        priority={priority}
        fetchPriority={fetchPriority}
        quality={quality}
        loading={priority ? undefined : loading ?? "lazy"}
        decoding={decoding}
        unoptimized={unoptimized || isFallback || isUnsplashSource}
        onError={() => {
          setCurrentSrc(ERROR_IMG_SRC);
        }}
      />
    </div>
  );
}
