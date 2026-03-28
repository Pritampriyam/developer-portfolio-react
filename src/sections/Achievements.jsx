import { Award, Code, Flame, Star } from "lucide-react";

// ✅ Data array (REQUIRED)
const achievements = [
  {
    title: "Microsoft Azure Fundamentals",
    description:
      "Certified by Microsoft demonstrating foundational knowledge of cloud services and Azure.",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "1500+ DSA Problems Solved",
    description:
      "Solved problems across LeetCode, CodeChef, and GeeksforGeeks.",
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "CodeChef 2★ Rating",
    description:
      "Achieved 2-star rating in competitive programming.",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "500+ Day Coding Streak",
    description:
      "Maintained long coding streak with consistency.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=800&auto=format&fit=crop",
  },
];

// ✅ Component
export const Achievement = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Certifications &{" "}
            <span className="italic font-normal text-white">
              accomplishments
            </span>
          </h2>

          <p className="text-muted-foreground">
            Milestones that reflect my consistency, problem-solving skills, and
            dedication to continuous learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};