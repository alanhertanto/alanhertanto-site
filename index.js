import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Halo, Saya [Nama Kamu]
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Saya adalah seorang Unity Developer & Web Developer.
      </motion.p>
      <motion.a 
        href="/about"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Tentang Saya
      </motion.a>

      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div 
              key={item} 
              className="bg-gray-800 rounded-lg p-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={`/images/project${item}.jpg`} alt={`Project ${item}`} className="rounded-md" />
              <h3 className="mt-2 text-lg font-semibold">Project {item}</h3>
              <p className="text-gray-400">Deskripsi singkat proyek.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-12 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-semibold">Kontak</h2>
        <p className="mt-4 text-gray-300">Silakan hubungi saya melalui email atau sosial media di bawah.</p>
        <div className="mt-4">
          <motion.a 
            href="mailto:email@example.com"
            className="block mt-2 text-blue-400 hover:text-blue-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            email@example.com
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourprofile"
            className="block mt-2 text-blue-400 hover:text-blue-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </section>
    </div>
  );
}
