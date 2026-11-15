import { LogoMark } from "@/components/ui/Logo";

export default function Loading() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center bg-ink">
      <div className="flex flex-col items-center gap-6">
        <LogoMark className="h-12 w-12 animate-pulse text-white" />
        <div className="h-px w-40 overflow-hidden bg-white/10">
          <span className="block h-full w-1/3 animate-[loading-bar_1.4s_ease-in-out_infinite] bg-accent" />
        </div>
        <p className="label-mono text-white/35">Prime Projects International</p>
      </div>
    </div>
  );
}
