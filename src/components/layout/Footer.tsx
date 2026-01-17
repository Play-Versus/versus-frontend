import Image from "next/image";

export const Footer = () => (
  <footer className="bg-core-black py-12 text-text-primary">
    <div className="container mx-auto px-6 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <div className="mb-2 text-2xl font-bold">
            <Image
              src="/images/logo/VersusLogo_Black.png"
              alt="Logo"
              width={120}
              height={24}
            />
          </div>
          <p className="text-xl text-text-secondary">
            Launching soon. Stay ready.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-elevated text-text-primary hover:bg-surface-base"
          >
            {/* Instagram SVG */}
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-elevated text-text-primary hover:bg-surface-base"
          >
            {/* Twitter SVG */}
          </a>
        </div>

      </div>
    </div>
    <div className="flex gap-2 p-6">
      <div className="h-8 w-8 bg-core-neon"></div>
      <div className="h-8 w-8 bg-accent-cyan"></div>
      <div className="h-8 w-8 bg-surface-base"></div>
      <div className="h-8 w-8 bg-text-secondary"></div>
    </div>
  </footer>
);
