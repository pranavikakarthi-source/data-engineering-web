"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Animation initial and active styles
  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return {
            opacity: 0,
            transform: "translateY(36px)",
            transition: baseTransition,
          };
        case "fade-down":
          return {
            opacity: 0,
            transform: "translateY(-36px)",
            transition: baseTransition,
          };
        case "fade-left":
          return {
            opacity: 0,
            transform: "translateX(36px)",
            transition: baseTransition,
          };
        case "fade-right":
          return {
            opacity: 0,
            transform: "translateX(-36px)",
            transition: baseTransition,
          };
        case "zoom-in":
          return {
            opacity: 0,
            transform: "scale(0.92)",
            transition: baseTransition,
          };
        case "fade":
        default:
          return {
            opacity: 0,
            transform: "none",
            transition: baseTransition,
          };
      }
    }

    return {
      opacity: 1,
      transform: "translateY(0) translateX(0) scale(1)",
      transition: baseTransition,
    };
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  );
}
