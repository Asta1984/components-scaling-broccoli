import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layout, Terminal, Database, Cloud } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute min-h-screen pt-24 inset-0"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-gray-400 max-w-2xl mx-auto font-OnlinePrivileges md:text-4xl">
            Everything you need to build and scale your next big idea
          </h1>
          <p className='font-Enterpriser text-cyan-400 max-w-2xl mx-auto mt-5'>Start sending transactional emails with a robust
          REST API, native SDKs, and reliable SMTP service.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Code2 className="w-6 h-6 text-blue-400" />}
            title="MVP Development"
            description="Launch your product quickly with our rapid MVP development process"
          />
          <FeatureCard
            icon={<Layout className="w-6 h-6 text-purple-400" />}
            title="Web Applications"
            description="Build scalable web applications with modern technologies"
          />
          <FeatureCard
            icon={<Cpu className="w-6 h-6 text-green-400" />}
            title="PCB Design"
            description="Professional PCB design and fabrication services"
          />
          <FeatureCard
            icon={<Terminal className="w-6 h-6 text-yellow-400" />}
            title="API Development"
            description="Create robust APIs with comprehensive documentation"
          />
          <FeatureCard
            icon={<Database className="w-6 h-6 text-red-400" />}
            title="Database Design"
            description="Scalable database architecture for your applications"
          />
          <FeatureCard
            icon={<Cloud className="w-6 h-6 text-cyan-400" />}
            title="Cloud Integration"
            description="Seamless cloud deployment and infrastructure management"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={item}
      className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}