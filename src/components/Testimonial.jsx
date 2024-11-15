import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    (<div
      className=" rounded-md flex flex-col antialiased bg-background  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonialsData} direction="right" speed="slow" />
    </div>)
  );
}

const testimonialsData = [
  {
    quote:
      "Coursify helped me upskill in machine learning in record time. The personalized curriculum was spot-on!",
    name: "Sarah L.",
    title: "Data Scientist",
  },
  {
    quote:
      "As a self-taught developer, Coursify filled the gaps in my knowledge. It's like having a personal tutor!",
    name: "Mike R.",
    title: "Web Developer",
  },
  {
    quote: "The AI-generated courses are incredibly relevant. It's revolutionized how I approach continuous learning.",
    name: "Emily T.",
    title: "Marketing Manager",
  },
  {
    quote:
      "Coursify’s approach to economic theory was exceptional. The interactive lessons made complex topics easier to grasp, and I could study at my own pace!",
    name: "Jane A.",
    title: "Economics Research Analyst",
  },
  {
    quote:
      "As an Android developer, Coursify helped me level up fast. The real-world projects were challenging but so rewarding, super helpful!",
    name: "Maya S.",
    title: "Android Developer",
  },
];
