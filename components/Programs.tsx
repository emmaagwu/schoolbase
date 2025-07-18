'use client';

import Image from 'next/image';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const programs = [
  {
    title: "Early Years (Crèche & Nursery)",
    description: "A nurturing environment that builds curiosity, creativity, and early literacy through play-based learning.",
    image: "/images/programs/creche.jpeg",
  },
  {
    title: "Primary School",
    description: "We offer a robust curriculum that builds strong academic skills and moral values.",
    image: "/images/programs/primary.jpeg",
  },
  {
    title: "Junior Secondary",
    description: "Preparing students for WAEC BECE with exposure to STEM, Arts, and life skills.",
    image: "/images/programs/junior-secondary.jpeg",
  },
  {
    title: "Senior Secondary",
    description: "A focus on WAEC, NECO and JAMB preparation with career guidance and leadership development.",
    image: "/images/programs/senior-secondary.jpeg",
  },
  {
    title: "STEM & Robotics Club",
    description: "Equipping students with hands-on tech skills through fun and interactive learning.",
    image: "/images/programs/robotic.jpg",
  },
  {
    title: "After-School & Holiday Programs",
    description: "Flexible programs that keep children safe, active and learning beyond school hours.",
    image: "/images/programs/after-school.jpg",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          At <strong>SchoolBase</strong>, we offer a wide range of academic and extracurricular programs that nurture every child&apos;s potential — intellectually, morally, and creatively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="hover:shadow-lg transition-shadow duration-300 py-0"
            >
              <CardHeader className="p-0">
                <div className="w-full h-56 relative overflow-hidden rounded-md">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="text-left px-6 py-4 border-2 border-amber-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
