import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.section 
      className="container mx-auto px-4 min-h-screen flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        <motion.div 
          className="flex-1"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden border-[3px] border-white/20 bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              src="/lovable-uploads/b2727ace-a31d-4404-85dd-4e8e68bb2ddd.png"
              alt="Profile"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/40"></div>
            <div className="absolute top-0 right-0 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#FF6B00] stroke-[2] stroke-dashed opacity-60">
                <path d="M 95,5 C 95,5 95,5 5,95" />
              </svg>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 space-y-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-8xl font-bold tracking-tighter">
            SOFTWARE
            <span className="block text-[#333333] mt-2">ENGINEER</span>
          </h1>
          <p className="text-xl text-[#666666] max-w-xl">
            Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;