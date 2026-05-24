type SparkleProps = {
  className?: string;
};

export default function Sparkle({ className = "" }: SparkleProps) {
  return (
    <span
      className={`pointer-events-none absolute text-brand-gold animate-pulse text-2xl md:text-3xl ${className}`}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}
