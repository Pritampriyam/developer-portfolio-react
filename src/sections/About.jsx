import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

              <p>
                I'm a passionate full-stack developer and B.Tech CSE (AI)
                student at Technocrats Institute of Technology, Bhopal (2022–2026).
                My journey started with a curiosity for how things work on the
                web, and it has evolved into hands-on experience building
                real-world applications.
              </p>

              <p>
                I specialize in full-stack development using React, Node.js, and MongoDB, with a focus on building scalable and real-world applications. My work includes AI-driven interview platforms, real-time coding systems, and role-based learning management systems, emphasizing performance, secure authentication, and modern UI/UX design.
              </p>

              <p>
                When I'm not coding, you'll find me grinding competitive
                programming problems, contributing to my 501-day coding streak,
                or exploring new technologies across the full-stack ecosystem.
              </p>

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">

              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build digital products that are not just
                functional, but truly impactful — solving real problems with
                clean code, performance, and a great user experience."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};