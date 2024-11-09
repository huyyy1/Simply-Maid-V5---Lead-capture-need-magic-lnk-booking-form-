"use client";

import { motion } from "framer-motion";
import { PreBookFlow } from "@/components/shared/pre-book-flow";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-600 to-violet-800">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Book Your Clean</h1>
            <p className="text-lg text-white/80">
              Get your personalized quote in 60 seconds
            </p>
          </div>

          <PreBookFlow />
        </motion.div>
      </div>
    </div>
  );
}