import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-white">
              The Architects of <br />
              <span className="text-primary">Tomorrow's Sound</span>
            </h2>
          </motion.div>

          <div className="space-y-8 text-xl md:text-2xl text-white/70 leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              At I.M.E, we respect the old-school ways of making music, but we are wiring the future with our own hands.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              Founded by Ice — COO, artist, and a forward-thinker who plays the long game — we don't just make music; we build solid, long-lasting foundations for artists. We keep our feet firmly planted on the ground, but our eyes are always looking up at the stars.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="text-white font-medium pt-8"
            >
              Let's create something timeless.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
