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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
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
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6"
          >
            {["S", "U", "P", "E", "R", " ", "M", "I", "A"].map((letter, i) => (
              <motion.span
                key={i}
                className={letter === " " ? "inline-block w-4 sm:w-8" : "inline-block"}
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
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 3, -3, 2, -2, 0],
              scale: [1, 1.02, 0.98, 1.01, 0.99, 1],
              y: [0, -10, 0, -5, 0],
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
                src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop"
                width={canvasSize.width}
                height={canvasSize.height}
                cellSize={4}
                dotScale={0.9}
                shape="square"
                backgroundColor="#000000"
                dropoutStrength={0.1}
                interactive
                distortionStrength={0.15}
                distortionRadius={200}
                distortionMode="swirl"
                followSpeed={0.15}
                jitterStrength={3}
                jitterSpeed={1}
                sampleAverage
                className="rounded-2xl shadow-2xl border border-slate-800"
              />
            </motion.div>

            {/* Multiple Pulsing glows with different colors */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-purple-500/50 pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168,85,247,0.3)",
                  "0 0 80px rgba(168,85,247,0.8)",
                  "0 0 20px rgba(168,85,247,0.3)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-pink-500/50 pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(236,72,153,0.3)",
                  "0 0 80px rgba(236,72,153,0.8)",
                  "0 0 20px rgba(236,72,153,0.3)",
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
              className="absolute inset-0 rounded-2xl border-2 border-cyan-500/50 pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6,182,212,0.3)",
                  "0 0 80px rgba(6,182,212,0.8)",
                  "0 0 20px rgba(6,182,212,0.3)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>

        {/* CTA Buttons with EXTREME FLIPS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            type: "spring",
            stiffness: 150,
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 10, 0],
              y: [-5, -10, -5],
            }}
            whileTap={{
              scale: 0.9,
              rotate: 180,
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-slate-200 font-semibold shadow-2xl"
            >
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                Share
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 10, -10, 0],
              y: [-5, -10, -5],
            }}
            whileTap={{
              scale: 0.9,
              rotate: -180,
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-700 text-white hover:bg-slate-800 shadow-2xl"
            >
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.3,
                }}
              >
                Learn More
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating background elements for extra chaos */}
      {mounted && (
        <>
          <motion.div
            className="fixed top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
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
            className="fixed bottom-20 right-10 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
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
            className="fixed top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
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
