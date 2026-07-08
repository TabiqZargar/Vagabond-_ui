"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import InkButton from "./InkButton";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleEls = titleRef.current?.querySelectorAll(".fade-el");
      if (titleEls) {
        gsap.set(titleEls, { y: 30, opacity: 0 });
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 85%",
          onEnter: () => {
            gsap.to(titleEls, {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.1,
              ease: "power4.out",
            });
          },
          once: true,
        });
      }

      if (imageWrapRef.current) {
        gsap.set(imageWrapRef.current, { y: 50, opacity: 0 });
        ScrollTrigger.create({
          trigger: imageWrapRef.current,
          start: "top 85%",
          onEnter: () => {
            gsap.to(imageWrapRef.current, {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power4.out",
            });
          },
          once: true,
        });
      }

      const textEls = textRef.current?.querySelectorAll(".fade-el");
      if (textEls) {
        gsap.set(textEls, { y: 30, opacity: 0 });
        ScrollTrigger.create({
          trigger: textRef.current,
          start: "top 85%",
          onEnter: () => {
            gsap.to(textEls, {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.15,
              ease: "power4.out",
            });
          },
          once: true,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[160px] flex flex-col items-center">
      <div ref={titleRef} className="w-full px-margin-desktop mb-20 text-center">
        <h2 className="font-display text-headline-xl-mobile md:text-headline-xl mb-4 italic fade-el">
          Solitude in Mist
        </h2>
        <p className="font-mono text-xs text-ink/60 tracking-[0.3em] uppercase fade-el">
          The sanctuary of the spirit
        </p>
      </div>

      <div ref={imageWrapRef} className="w-full relative group">
        <div className="matting-frame mx-margin-desktop">
          <div className="overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8klyu4v3KHxi5imfZ3lKuNPUyByhvt5i13nhrs-6KLH-V70lLZK5UMN_20vuleldQF_9umyK_f-XYCa-ndgZ_CnOXWpRgpy8mNFfcRoQ4GjCLRh80qNU7Qld_2MUPHXNeeMNVMU-TEo1VffVebnTJ1nQ3LTqI0mf8ze7bZur2_rsBr7NMBUPYH0pWnj6pP7Dbjk25EaHUup_K6TUhqWtUc3oKb0r2n5evzl_flQxVMnZVM-AQIH-Ylfsxg_AO_tuH0TCBUIT5tcrt"
              alt="Temple in misty mountains"
              width={1400}
              height={800}
              className="w-full max-h-[80vh] object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="w-32 h-32 border border-ink/20 rounded-full flex items-center justify-center backdrop-blur-md bg-paper/10">
            <span className="font-mono text-[10px] text-ink">VIEW SCENE</span>
          </div>
        </div>
      </div>

      <div
        ref={textRef}
        className="max-w-2xl mt-32 px-margin-mobile text-center"
      >
        <p className="font-body text-lg text-ink leading-relaxed fade-el">
          Mountains do not seek approval. They stand in the mist, anchored by
          their own weight, indifferent to the shifting clouds. This is the
          final lesson of Kintsugi: to be whole in one&apos;s own solitude.
        </p>
        <div className="mt-12 flex justify-center gap-8 fade-el">
          <InkButton>Join the Order</InkButton>
        </div>
      </div>
    </section>
  );
}
