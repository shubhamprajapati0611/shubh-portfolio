import { motion } from "framer-motion";

function Skills({ darkMode }) {
  const skills = [
    { name: "React", level: 70 },
    { name: "JavaScript", level: 50 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 55 },
    { name: "Python", level: 60 },
  ];

  const cardStyle = darkMode
    ? "bg-white/10 backdrop-blur-xl border border-white/10"
    : "bg-gradient-to-br from-blue-200/40 via-white/30 to-purple-200/40 backdrop-blur-2xl border border-white/50 shadow-xl";

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-24 px-8"
    >
      <h2 className="text-5xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className={`${cardStyle} max-w-5xl mx-auto rounded-3xl p-10`}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">
                {skill.name}
              </span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;