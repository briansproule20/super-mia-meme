"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showRealImage, setShowRealImage] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-[#E8E4DC] to-[#F0EBE3] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#3F3B30] dark:text-gray-100 mb-4">
                Mia R. Massimo
              </h1>
              <p className="text-xl text-[#705F4B] dark:text-gray-400 mb-6">
                Aspiring Attorney | Legal Scholar
              </p>
              <p className="text-base text-[#3F3B30]/80 dark:text-gray-300 mb-8 leading-relaxed">
                Passionate about sports law, international law, and advancing justice through
                thoughtful legal practice. Currently pursuing a Juris Doctor with a focus on
                comparative and international legal frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-[#8B775A] hover:bg-[#705F4B] text-white"
                >
                  <a
                    href="https://www.linkedin.com/in/mia-massimo-252703226/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => {
                  setShowRealImage(true);
                  setTimeout(() => setShowRealImage(false), 2000);
                }}
              >
                {showRealImage ? (
                  <motion.img
                    src="/mia pfp.png"
                    alt="Mia R. Massimo"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-lg border-2 border-[#8B775A] object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <PixelatedCanvas
                    src="/mia pfp.png"
                    width={300}
                    height={300}
                    cellSize={4}
                    dotScale={0.9}
                    shape="square"
                    backgroundColor="#D1C0A9"
                    dropoutStrength={0.05}
                    className="rounded-2xl shadow-lg border-2 border-[#8B775A]"
                  />
                )}
                <div className="absolute inset-0 rounded-2xl bg-black/0 hover:bg-black/5 transition-colors duration-200 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/50 px-3 py-1 rounded-full">
                    Click to reveal
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3F3B30] dark:text-gray-100 mb-8 text-center">About</h2>
            <Card className="p-8 bg-white dark:bg-gray-950 border-[#8B775A]/20 dark:border-gray-800">
              <p className="text-[#3F3B30]/80 dark:text-gray-300 leading-relaxed mb-4">
                As a law student with a deep interest in the intersection of sports, international
                relations, and legal frameworks, I am committed to understanding how legal systems
                can adapt to promote fairness and professionalization in rapidly evolving fields.
              </p>
              <p className="text-[#3F3B30]/80 dark:text-gray-300 leading-relaxed">
                My academic work focuses on comparative law, examining how different legal
                traditions approach emerging challenges in sports regulation and international
                governance. I believe in the power of thoughtful legal analysis to drive positive
                change and create more equitable systems.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3F3B30] dark:text-gray-100 mb-8 text-center">Experience</h2>
            <Card className="p-8 bg-white dark:bg-gray-950 border-[#8B775A]/20 dark:border-gray-800">
              <div className="flex items-start gap-4">
                <img
                  src="/Jacksonville_Jaguars_logo.svg.png"
                  alt="Jacksonville Jaguars"
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#3F3B30] dark:text-gray-100 mb-1">
                    Legal Intern
                  </h3>
                  <p className="text-[#705F4B] dark:text-gray-400 font-medium mb-3">
                    Jacksonville Jaguars
                  </p>
                  <p className="text-[#3F3B30]/80 dark:text-gray-300 text-sm leading-relaxed">
                    Supported the legal team with contract review, compliance matters, and research 
                    on sports law issues. Gained hands-on experience in professional sports 
                    organization legal operations and NFL regulatory frameworks.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3F3B30] dark:text-gray-100 mb-8 text-center">Education</h2>
            <div className="space-y-6">
              <Card className="p-8 bg-white dark:bg-gray-950 border-[#8B775A]/20 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <img
                    src="/Miami_Hurricanes_logo.svg.png"
                    alt="University of Miami"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#3F3B30] dark:text-gray-100 mb-2">
                      University of Miami School of Law
                    </h3>
                    <p className="text-[#705F4B] dark:text-gray-400 font-medium mb-2">J.D./LL.M. Candidate</p>
                    <p className="text-[#3F3B30]/70 dark:text-gray-300 text-sm mb-1">
                      International & Comparative Law Review
                    </p>
                    <p className="text-[#3F3B30]/70 dark:text-gray-300 text-sm">
                      Entertainment, Arts, and Sports Law Honors Program
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white dark:bg-gray-950 border-[#8B775A]/20 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <img
                    src="/ohio_state_buckeyes_logo_alternate_19736107.png"
                    alt="The Ohio State University"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#3F3B30] dark:text-gray-100 mb-2">
                      The Ohio State University
                    </h3>
                    <p className="text-[#705F4B] dark:text-gray-400 font-medium mb-2">Bachelor of Arts, Summa Cum Laude</p>
                    <p className="text-[#3F3B30]/70 dark:text-gray-300 text-sm mb-1">
                      Major: Political Science, Pre-Law
                    </p>
                    <p className="text-[#3F3B30]/70 dark:text-gray-300 text-sm font-medium">
                      GPA: 4.0
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3F3B30] dark:text-gray-100 mb-8 text-center">Publications</h2>
            <Card className="p-8 bg-white dark:bg-gray-950 border-[#8B775A]/20 dark:border-gray-800 hover:border-[#8B775A]/40 dark:hover:border-gray-700 transition-colors">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#8B775A] dark:text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#3F3B30] dark:text-gray-100 mb-2">
                    From Amateurism to Professionalization: How the NCAA&apos;s House Settlement
                    Aligns the U.S. with Global Sports Norms
                  </h3>
                  <p className="text-[#705F4B] dark:text-gray-400 text-sm mb-4">
                    University of Miami International and Comparative Law Review
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#8B775A] text-[#8B775A] hover:bg-[#8B775A] hover:text-white"
                  >
                    <a
                      href="https://international-and-comparative-law-review.law.miami.edu/from-amateurism-to-professionalization-how-the-ncaas-house-settlement-aligns-the-u-s-with-global-sports-norms/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Publication
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#3F3B30] dark:text-gray-100 mb-8 text-center">Get In Touch</h2>
            <Card className="p-8 bg-white dark:bg-gray-950 border-[#8B775A]/20 dark:border-gray-800 text-center">
              <p className="text-[#3F3B30]/80 dark:text-gray-300 mb-6">
                Interested in connecting? Feel free to reach out via LinkedIn.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#8B775A] hover:bg-[#705F4B] text-white"
              >
                <a
                  href="https://www.linkedin.com/in/mia-massimo-252703226/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#8B775A]/20 dark:border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[#3F3B30]/60 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Mia R. Massimo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
