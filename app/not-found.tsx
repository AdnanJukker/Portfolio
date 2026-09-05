import PixelButton from "@/components/PixelButton";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div
        className="relative w-full max-w-lg p-8 sm:p-12 text-center"
        style={{
          borderWidth: "4px",
          borderStyle: "solid",
          borderColor: "var(--danger-dim)",
          boxShadow: `
            4px 4px 0 0 var(--danger-dim),
            -4px 4px 0 0 var(--danger-dim),
            4px -4px 0 0 var(--danger-dim),
            -4px -4px 0 0 var(--danger-dim)
          `,
          background:
            "linear-gradient(180deg, var(--bg-card) 0%, var(--bg) 100%)",
        }}
      >
        <p className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs text-danger mb-6">
          ✕ QUEST FAILED
        </p>
        <h1 className="font-[family-name:var(--font-pixel)] text-xl sm:text-2xl text-primary mb-4 glow-pulse">
          404
        </h1>
        <p className="text-text text-sm sm:text-base mb-8">
          This level doesn&apos;t exist. The page you&apos;re looking for was
          never loaded into this world.
        </p>
        <PixelButton href="/Portfolio/" variant="primary">
          RESPAWN AT HOME
        </PixelButton>
      </div>
    </main>
  );
}
