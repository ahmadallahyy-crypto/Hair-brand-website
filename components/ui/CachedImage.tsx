"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ImageProps } from "next/image";

type CachedImageProps = ImageProps;

export default function CachedImage({ onLoad, onError, ...props }: CachedImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete) {
      setStatus(image.naturalWidth > 0 ? "loaded" : "error");
    }
  }, [props.src]);

  return (
    <span
      className="cached-image"
      data-state={status}
      aria-busy={status === "loading"}
    >
      <Image
        {...props}
        ref={imageRef}
        alt={status === "error" ? "" : props.alt}
        onLoad={(event) => {
          setStatus("loaded");
          onLoad?.(event);
        }}
        onError={(event) => {
          setStatus("error");
          onError?.(event);
        }}
      />
      {status === "error" && (
        <span className="cached-image-fallback" role="img" aria-label={`${props.alt} (image unavailable)`}>
          <span aria-hidden="true">Image unavailable</span>
        </span>
      )}
    </span>
  );
}
