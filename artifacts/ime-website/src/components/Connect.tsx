import { motion } from "framer-motion";
import { 
  SiFacebook, 
  SiTiktok, 
  SiInstagram, 
  SiX, 
  SiYoutube, 
  SiSoundcloud, 
  SiBeatstars 
} from "react-icons/si";
import { Mic2, Music2, MessageCircle } from "lucide-react"; // Using generic icons for Voloco and StarMaker
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function Connect() {
  const socials = [
    {
      name: "Facebook (Personal)",
      icon: SiFacebook,
      handle: "Mokgoko Inolofatseng",
      url: "https://www.facebook.com/ino.mokgoko",
    },
    {
      name: "Facebook Page",
      icon: SiFacebook,
      handle: "Iconic Media Entertainment",
      url: "https://www.facebook.com/iconicmediaentertainment",
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      handle: "@Icynigma",
      url: "https://www.tiktok.com/@Icynigma",
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      handle: "@ino.m",
      url: "https://www.instagram.com/ino.m",
    },
    {
      name: "X (Twitter)",
      icon: SiX,
      handle: "@InoM",
      url: "https://x.com/InoM",
    },
    {
      name: "Voloco",
      icon: Mic2,
      handle: "Icynigma_ime",
      tooltipOnly: true,
    },
    {
      name: "Beatstars",
      icon: SiBeatstars,
      handle: "Iconic Media Entertainment",
      url: "https://www.beatstars.com/iconicmediaentertainment",
    },
    {
      name: "StarMaker",
      icon: Music2,
      handle: "Icynigma / Icynigma_Covers",
      tooltipOnly: true,
    },
    {
      name: "YouTube",
      icon: SiYoutube,
      handle: "Iconic Media Entertainment",
      url: "https://www.youtube.com/@IconicMediaEntertainment",
    },
    {
      name: "SoundCloud",
      icon: SiSoundcloud,
      handle: "Iconic Media Entertainment",
      url: "https://soundcloud.com/iconic-media-entertainment",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      handle: "Icynigma",
      url: "WHATSAPP_PLACEHOLDER",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <section id="contact" className="py-32 bg-black/60 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Connect</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to take your music to the next level? Tap in with the crew below.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          {socials.map((social, idx) => {
            const Icon = social.icon;
            
            const content = (
              <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group cursor-pointer">
                <Icon className="text-xl" />
                <span className="font-medium">{social.name}</span>
              </div>
            );

            const isPlaceholder = social.url === "WHATSAPP_PLACEHOLDER";

            return (
              <motion.div key={idx} variants={itemVariants}>
                {social.url && !isPlaceholder ? (
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : isPlaceholder ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="opacity-50 cursor-default">{content}</div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-white text-black font-semibold px-4 py-2 border-none">
                      <p>Coming soon</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {content}
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-white text-black font-semibold px-4 py-2 border-none">
                      <p>{social.handle}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
