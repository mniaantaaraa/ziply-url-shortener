import { UrlShortenerForm } from "@/components/urls/url-shortener-form";
import { LandingSections } from "@/components/landing/landing-sections";
import { getPlatformStats } from "@/server/actions/get-platform-stats";

export default async function Home() {
  const { totalUrls, totalClicks } = await getPlatformStats();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] md:min-h-0 pt-28 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="font-display text-7xl sm:text-8xl md:text-7xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-on-surface mb-10 md:mb-12">
            Redefining <br />the <span className="relative">Link<span className="absolute -bottom-2 left-0 w-full h-4 bg-primary/20 -skew-x-12 -z-10"></span></span>
          </h1>
          <div className="relative max-w-4xl mx-auto mt-20 md:mt-16 group">
            <div className="absolute -top-10 left-0 md:left-4">
              <span className="font-label text-primary text-xs font-bold px-3 py-1 bg-primary/10 rounded-full rotate-[-4deg] inline-block">
                Paste your long URL here
              </span>
            </div>
            <UrlShortenerForm variant="landing" />
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      </section>

      <LandingSections totalUrls={totalUrls} totalClicks={totalClicks} />
    </div>
  );
}
