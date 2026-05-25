export default function NativeBorder() {
  return (
    <div
      className="h-5 w-full"
      style={{
        background: `repeating-linear-gradient(
          90deg,
          #CC0000 0px, #CC0000 6px,
          #000000 6px, #000000 8px,
          #FFD700 8px, #FFD700 14px,
          #000000 14px, #000000 16px,
          #8B0000 16px, #8B0000 22px,
          #000000 22px, #000000 24px,
          #FFD700 24px, #FFD700 30px,
          #000000 30px, #000000 32px
        )`,
        boxShadow:
          "0 -2px 8px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.4)",
      }}
      aria-hidden="true"
    />
  );
}
