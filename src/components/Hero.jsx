import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#0000FF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
             <span className="text-[#0000FF]">DEFXV</span>
          </h1>
          <h2 >
            Product By SpectoV
          </h2>
          <p className={`${styles.heroSubText} mt-2`}>
            Redefining Reality with <br className="hidden sm:block" />
            SpectoV's AR Revolution
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#defxv">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

