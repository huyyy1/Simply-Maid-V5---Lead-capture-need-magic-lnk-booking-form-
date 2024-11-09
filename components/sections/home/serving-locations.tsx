"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text";
import { locations } from "@/lib/data/locations";
import Image from "next/image";

export function ServingLocations() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Serving All Across{" "}
            <SparklesText 
              text="Sydney" 
              className="text-[#7E57C2]"
              colors={{ first: "#7E57C2", second: "#FF4E8E" }}
            />
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to offer our high-quality cleaning services across Sydney, from 
            the bustling city center to the suburbs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <Image 
                  src={location.image}
                  alt={`${location.name} cleaning services`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{location.name}</span>
                  </div>
                  <span className="text-sm text-white/80">{location.description}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg">
            Not sure if we serve your area?{" "}
            <Link 
              href="/contact" 
              className="text-[#7E57C2] hover:text-[#7E57C2]/80 font-medium"
            >
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}