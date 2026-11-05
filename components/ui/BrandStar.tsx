type BrandStarProps = {
  className?: string;
};

export default function BrandStar({ className = "wordmark-star" }: BrandStarProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M50 2C56 36 64 44 98 50 64 56 56 64 50 98 44 64 36 56 2 50 36 44 44 36 50 2Z" />
    </svg>
  );
}
