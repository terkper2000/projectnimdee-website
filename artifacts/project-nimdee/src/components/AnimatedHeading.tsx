import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const wordVariant = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.58, ease: "easeOut" as const },
  },
};

export function AnimatedHeading({
  as: Tag = "h2",
  children,
  className = "",
  delay = 0,
  once = true,
}: AnimatedHeadingProps) {
  const words = children.split(" ");

  const wordContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: delay },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "block" }}
        variants={wordContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
