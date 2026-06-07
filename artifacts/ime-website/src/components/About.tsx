import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ICE_IDENTITIES = [
  {
    label: "Iconic",
    suffix: ".ice",
    url: "https://www.facebook.com/ino.mokgoko",
    hint: "Personal",
  },
  {
    label: "maNiGGr",
    suffix: ".ice",
    url: "https://www.facebook.com/iconicmediaentertainment",
    hint: "I.M.E Page",
  },
  {
    label: "IconicBeatz",
    suffix: ".ice",
    url: "https://www.facebook.com/iconicmediaentertainment",
    hint: "I.M.E Page",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
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
              Founded by{" "}
              <span className="text-white font-semibold">Inolofatseng G. Mokgoko</span>
              {" "}—{" "}
              known as <span className="text-primary font-semibold">Icynigma</span> and <span className="text-primary font-semibold">Exclusively Iconic_Beatz</span>{" "}
              — COO, artist, and a forward-thinker who plays the long game. We don't just make music; we build solid, long-lasting foundations for artists. Feet on the ground. Eyes on the stars.
            </motion.p>

            {/* .ice identity hyperloop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <p className="text-sm font-semibold text-white/30 uppercase tracking-widest mb-5">
                Find him as
              </p>
              <div className="flex flex-wrap gap-3">
                {ICE_IDENTITIES.map((id) => (
                  <a
                    key={id.label}
                    href={id.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-ice-identity-${id.label.toLowerCase()}`}
                    className="group relative inline-flex items-center gap-1 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/15 hover:border-primary/60 transition-all duration-300"
                  >
                    {/* Glow on hover */}
                    <span className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <span className="relative text-white font-bold text-base tracking-tight">
                      {id.label}
                    </span>
                    <span className="relative text-primary font-bold text-base tracking-tight">
                      {id.suffix}
                    </span>
                    <ExternalLink
                      size={11}
                      className="relative ml-1 text-primary/40 group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100"
                    />

                    {/* Hint label */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {id.hint}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="text-white font-medium pt-10"
            >
              Let's create something timeless.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
