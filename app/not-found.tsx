import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pb-20 pt-32">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(38,54,76,0.5),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="shell relative z-10">
        <LogoMark className="h-10 w-10 text-accent" />
        <p className="label-mono mt-10 text-accent">Error 404</p>
        <h1 className="display-hero mt-5 text-white">
          OFF THE
          <br />
          <span className="text-outline">DRAWING.</span>
        </h1>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-concrete md:text-base">
          The page you are looking for has been moved, removed or never existed. Return to the
          homepage or explore our services and projects.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/services" variant="outline">
            View Services
          </Button>
        </div>
        <p className="mt-12 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
          Need assistance?{" "}
          <Link href="/contact" className="text-accent transition-colors hover:text-white">
            Contact PPI
          </Link>
        </p>
      </div>
    </section>
  );
}
