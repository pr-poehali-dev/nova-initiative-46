import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/e8e8ecad-87d8-4d17-8f1f-63e57000f2df/files/f68fc369-3b85-4ecd-9ae4-c445f866adb2.jpg"
          alt="Gloss Studio — салон красоты"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Ярославль</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          GLOSS<br />STUDIO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-8">
          Салон красоты, где каждая деталь продумана для вашего комфорта
        </p>
        <a
          href="#booking"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide hover:bg-neutral-200 transition-colors duration-300"
        >
          Записаться онлайн
        </a>
      </div>
    </div>
  );
}