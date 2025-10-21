"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 600 });

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      if (window.innerWidth < 640) {
        setCanvasSize({ width: 320, height: 320 });
      } else if (window.innerWidth < 1024) {
        setCanvasSize({ width: 500, height: 500 });
      } else {
        setCanvasSize({ width: 600, height: 600 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Generate consistent positions for floating emojis
  const floatingPositions = useMemo(() => {
    if (!mounted) return [];
    return [...Array(30)].map(() => ({
      initial: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      animate: {
        x: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        y: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    }));
  }, [mounted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-[#E8E4DC] to-[#F0EBE3] relative overflow-hidden">
      {/* Floating Otters and Seals - MORE CHAOS */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl sm:text-6xl"
              style={{
                left: `${floatingPositions[i].initial.x}%`,
                top: `${floatingPositions[i].initial.y}%`,
              }}
              animate={{
                x: floatingPositions[i].animate.x.map(v => `${v}vw`),
                y: floatingPositions[i].animate.y.map(v => `${v}vh`),
                rotate: [0, 360, 720, 1080, 1440],
                scale: [1, 1.5, 0.5, 1.2, 1],
                rotateX: [0, 180, 360, 540, 720],
                rotateY: [0, 180, 360, 540, 720],
              }}
              transition={{
                duration: 15 + i * 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              {i % 2 === 0 ? "🦦" : "🦭"}
            </motion.div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-20 max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#3F3B30] mb-4 sm:mb-6 flex flex-wrap justify-center gap-x-2 sm:gap-x-3"
          >
            <div className="flex">
              {["M", "I", "A"].map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  animate={{
                    y: [0, -30, 0, -15, 0],
                    rotate: [0, 15, -15, 10, -10, 0],
                    scale: [1, 1.2, 0.9, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex">
              {["M", "A", "S", "S", "I", "M", "O"].map((letter, i) => (
                <motion.span
                  key={i + 3}
                  className="inline-block"
                  animate={{
                    y: [0, -30, 0, -15, 0],
                    rotate: [0, 15, -15, 10, -10, 0],
                    scale: [1, 1.2, 0.9, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (i + 4) * 0.15,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>

        {/* Canvas with EXTREME FLURPS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <motion.a
            href="https://www.linkedin.com/in/mia-massimo-252703226/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer"
            animate={{
              rotate: [0, 3, -3, 2, -2, 0],
              scale: [1, 1.02, 0.98, 1.01, 0.99, 1],
              y: [0, -10, 0, -5, 0],
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <PixelatedCanvas
                src="/mia-selfie.png"
                width={canvasSize.width}
                height={canvasSize.height}
                cellSize={4}
                dotScale={0.9}
                shape="square"
                backgroundColor="#D1C0A9"
                dropoutStrength={0.1}
                interactive
                distortionStrength={0.15}
                distortionRadius={200}
                distortionMode="swirl"
                followSpeed={0.15}
                jitterStrength={3}
                jitterSpeed={1}
                sampleAverage
                className="rounded-2xl shadow-2xl border-2 border-[#8B775A]"
              />
            </motion.div>

            {/* Multiple Pulsing glows with palette colors */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-[#8B775A]/50 pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139,119,90,0.3)",
                  "0 0 80px rgba(139,119,90,0.8)",
                  "0 0 20px rgba(139,119,90,0.3)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-[#705F4B]/50 pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(112,95,75,0.3)",
                  "0 0 80px rgba(112,95,75,0.8)",
                  "0 0 20px rgba(112,95,75,0.3)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-[#BA9F86]/50 pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(186,159,134,0.3)",
                  "0 0 80px rgba(186,159,134,0.8)",
                  "0 0 20px rgba(186,159,134,0.3)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </motion.a>
        </motion.div>

        {/* University of Miami Logo Link */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -360 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            type: "spring",
            stiffness: 120,
          }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href="https://international-and-comparative-law-review.law.miami.edu/from-amateurism-to-professionalization-how-the-ncaas-house-settlement-aligns-the-u-s-with-global-sports-norms/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 10, 0],
              y: [-5, -15, -5],
            }}
            whileTap={{
              scale: 0.85,
              rotate: 720,
            }}
            animate={{
              rotate: [0, 5, -5, 3, -3, 0],
              y: [0, -8, 0, -4, 0],
              scale: [1, 1.05, 1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="cursor-pointer"
          >
            <motion.img
              src="/Miami_Hurricanes_logo.svg.png"
              alt="University of Miami"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              animate={{
                filter: [
                  "drop-shadow(0 0 10px rgba(244,121,32,0.5))",
                  "drop-shadow(0 0 30px rgba(244,121,32,0.9))",
                  "drop-shadow(0 0 10px rgba(244,121,32,0.5))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center max-w-md px-4"
          >
            <motion.p
              className="text-[#705F4B] text-sm sm:text-base font-semibold mb-1"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Read law review publication
            </motion.p>
            <motion.p
              className="text-[#3F3B30]/80 text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              From Amateurism to Professionalization: How the NCAA's House Settlement Aligns the U.S. with Global Sports Norms
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating background elements with earth tones */}
      {mounted && (
        <>
          <motion.div
            className="fixed top-20 left-10 w-40 h-40 bg-[#8B775A]/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="fixed bottom-20 right-10 w-60 h-60 bg-[#BA9F86]/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 w-80 h-80 bg-[#705F4B]/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: [-100, 100, -100],
              y: [-100, 100, -100],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
}
