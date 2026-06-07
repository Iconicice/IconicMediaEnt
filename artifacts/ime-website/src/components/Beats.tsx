import { motion } from "framer-motion";
import { ExternalLink, Headphones, Music, ShoppingCart } from "lucide-react";

const beats = [
  {
    title: "Fairies",
    price: "R75",
    url: "https://voloco.resonantcavity.com/applinks/beats?id=9d5c3d23-721e-40cb-8588-61e6d74169fb",
    vibe: "Dreamy • Ethereal",
  },
  {
    title: "Escape",
    price: "R100",
    url: "https://voloco.resonantcavity.com/applinks/beats?id=6e61688e-1ec7-4b06-9f42-e2b6c012ae3a",
    vibe: "Atmospheric • Dark",
  },
  {
    title: "Mystic",
    price: "R150",
    url: "https://voloco.resonantcavity.com/applinks/beats?id=6e61688e-1ec7-4b06-9f42-e2b6c012ae3a",
    vibe: "Deep • Soulful",
  },
  {
    title: "Abracadabra",
    price: "R200",
    url: "https://voloco.resonantcavity.com/applinks/beats?id=af995cb4-1909-4df2-ac8a-1edf46a48997",
    vibe: "Hypnotic • Powerful",
    featured: true,
  },
];

const VOLOCO_PROFILE = "https://voloco.resonantcavity.com/applinks/creator?id=2511866";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90 },
  },
};

export function Beats() {
  return (
    <section id="beats" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-primary/5 to-black/0 pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Music size={14} />
            Available Now on Voloco
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Buy Beats</h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto">
            Original I.M.E instrumentals crafted for artists who demand something real. Tap a beat to preview and purchase on Voloco.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {beats.map((beat) => (
            <motion.a
              key={beat.title}
              href={beat.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              data-testid={`beat-card-${beat.title.toLowerCase()}`}
              className={`group relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer no-underline
                ${beat.featured
                  ? "bg-primary/10 border-primary/40 hover:border-primary hover:bg-primary/15"
                  : "bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/8"
                }`}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
            >
              {beat.featured && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-primary text-black text-xs font-bold tracking-wide">
                  PREMIUM
                </div>
              )}

              <div className={`h-2 w-full ${beat.featured ? "bg-primary" : "bg-white/10 group-hover:bg-primary/60 transition-colors duration-300"}`} />

              <div className="flex flex-col flex-1 p-6">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300
                    ${beat.featured ? "bg-primary/20 text-primary" : "bg-white/10 text-white/50 group-hover:bg-primary/20 group-hover:text-primary"}`}>
                    <Music size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{beat.title}</h3>
                  <p className="text-sm text-white/40">{beat.vibe}</p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className={`text-2xl font-black ${beat.featured ? "text-primary" : "text-white group-hover:text-primary transition-colors duration-300"}`}>
                    {beat.price}
                  </span>
                  <div className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300
                    ${beat.featured ? "text-primary" : "text-white/40 group-hover:text-primary"}`}>
                    <ShoppingCart size={13} />
                    Buy
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href={VOLOCO_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-voloco-profile"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/15 hover:bg-primary hover:border-primary hover:text-black text-white font-semibold transition-all duration-300 group"
          >
            <Headphones size={20} />
            View Full Catalogue on Voloco
            <ExternalLink size={15} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
