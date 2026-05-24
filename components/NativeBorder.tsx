export default function NativeBorder() {
  return (
    <div
      className="h-4 w-full"
      style={{
        background: `repeating-linear-gradient(
          90deg,
          #CC0000 0px, #CC0000 8px,
          #FFD700 8px, #FFD700 16px,
          #8B0000 16px, #8B0000 24px,
          #FFD700 24px, #FFD700 32px
        )`,
      }}
      aria-hidden="true"
    />
  );
}
