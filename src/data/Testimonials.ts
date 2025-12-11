export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Abhiyan's work on our fintech platform was exceptional. His optimization efforts led to a 43% improvement in load times, directly impacting our user conversion rates.",
    author: "Jane Doe",
    role: "Engineering Manager",
    company: "ECS Tech",
  },
  {
    quote: "Leading the digital transformation, Abhiyan's technical leadership and budget management were instrumental in increasing our revenue by over $35k.",
    author: "John Smith",
    role: "CEO",
    company: "Intel Security Service",
  },
  {
    quote: "As a teaching assistant, Abhiyan has a rare talent for breaking down complex algorithmic concepts. His redesigned curriculum has been a game-changer for our graduate students.",
    author: "Professor Emily White",
    role: "Computer Science Department",
    company: "George Washington University",
  },
];
