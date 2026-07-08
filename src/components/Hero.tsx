"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import VerticalJapaneseText from "./VerticalJapaneseText";
import InkDivider from "./InkDivider";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = titleRef.current?.querySelectorAll("span");
      if (chars) {
        gsap.fromTo(
          chars,
          { y: 110 },
          {
            y: 0,
            duration: 1.2,
            stagger: 0.08,
            delay: 0.5,
            ease: "power4.out",
          }
        );
      }

      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.15, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
            delay: 0.3,
            ease: "power3.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-margin-desktop pt-32"
    >
      <VerticalJapaneseText className="absolute top-40 left-10">
        不完全の美
      </VerticalJapaneseText>
      <VerticalJapaneseText className="absolute bottom-40 right-10">
        武士道の道
      </VerticalJapaneseText>

      <div className="w-full max-w-[1400px] relative">
        <div className="matting-frame">
          <div ref={imgRef} className="w-full overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmTENK-aOHCsAYeKmlHZHnld4aYJ51GAz2itjScmNnTvRAnQy-B36LHvJJDHuTKotMnp3ujH69_Ke7UMZMWnHpHVk1IQs9TzxBCHYDEYizr7-MBgHf2F1LLIyQSPjZKcXYNURiayZktATq9aejGLjWVB7oadRCkkpCOJqP8AMqZclHi0foDSVxv-T6JGBhAKAA7tbW-hnMrLy-d3mMgeTaTmN4EtUWSIJ-6Ig2FLfC1LwmyB2VmkT0hn81UVM9I7kDKcHReP2d9iAv"
              alt="Cinematic misty bamboo forest"
              width={1400}
              height={800}
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>
        </div>

        <div className="absolute -bottom-16 -left-8 md:left-20">
          <h1
            ref={titleRef}
            className="font-display text-display-lg-mobile md:text-display-lg text-ink leading-none"
          >
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-[110%]">The Path of</span>
            </span>
            <br />
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-[110%] italic font-normal">
                the Sword.
              </span>
            </span>
          </h1>
        </div>
      </div>

      <div className="mt-40 w-full flex justify-end">
        <div className="max-w-xs text-right">
          <InkDivider className="mb-6" />
          <p className="font-body text-ink/60 italic">
            The broken piece is not the end, but the beginning of a stronger
            soul.
          </p>
        </div>
      </div>
    </section>
  );
}
