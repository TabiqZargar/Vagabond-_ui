"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import InkDivider from "./InkDivider";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textEls = textRef.current?.querySelectorAll(".fade-el");
      if (textEls) {
        gsap.set(textEls, { y: 30, opacity: 0 });
        ScrollTrigger.create({
          trigger: textRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(textEls, {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.15,
              ease: "power4.out",
            });
          },
          once: true,
        });
      }

      if (imageRef.current) {
        gsap.set(imageRef.current, { y: 40, opacity: 0 });
        ScrollTrigger.create({
          trigger: imageRef.current,
          start: "top 85%",
          onEnter: () => {
            gsap.to(imageRef.current, {
              y: 0,
              opacity: 1,
              duration: 1.2,
              delay: 0.2,
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
    <section
      ref={sectionRef}
      className="py-[160px] px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center"
    >
      <div ref={textRef} className="md:col-span-5">
        <h2 className="font-display text-headline-xl-mobile md:text-headline-xl mb-12 fade-el">
          Quiet
          <br />
          Confidence
        </h2>
        <div className="space-y-8 font-body text-lg text-ink max-w-md">
          <p className="fade-el">
            In the silence of the forge, the blade finds its identity. It is
            not merely steel, but a physical manifestation of discipline and
            intent.
          </p>
          <p className="font-body text-base text-ink/60 fade-el">
            Wabi-sabi teaches us that perfection is a myth of the uninitiated.
            The true master embraces the grain, the nick, and the patina of
            time. Every scar on the hilt tells a story of survival.
          </p>
          <div className="pt-4 fade-el">
            <a
              href="#"
              className="font-mono text-xs tracking-[0.1em] border-b border-ink pb-1 hover:text-crimson transition-colors"
            >
              EXPLORE DISCIPLINE
            </a>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        className="md:col-span-6 md:col-start-7 mt-20 md:mt-0"
      >
        <div className="matting-frame">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaMqYlt3W_zXM3na9NeS-v3lRSbNOsxdlkaMbFfRjLYEILWo79w0_nfBoA9zwWMMJYj2Q8XELvPaHCXrBlf9db7ZQcilmex4tsHA-3zRggED_RSNuQC3QgpG-hCGtpiYx-LxTMibwvgU25mb2ol3B7rffzTiQtcQwonU1E0Uj3lgg_lcIVg5T_Mf7u3tWmoWs0uDPETLTwduHbo1wdpUqnDabN1PDlgmJH5RTm_n35VSJEaKMI9uftggRENh176R0VTRyYVW4T4yxU"
            alt="Macro detail of katana blade"
            width={700}
            height={900}
            className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="mt-6 flex justify-between items-baseline font-mono text-[10px] uppercase tracking-widest text-ink/40">
            <span>Ref. 0892 // KATANA</span>
            <span>Museum Archive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
