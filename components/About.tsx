"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Users, School, Lightbulb } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="relative bg-white py-24 sm:py-28 lg:py-32 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Badge className="text-sm bg-blue-100 text-blue-700 font-medium mb-4">
            Who We Are
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-700">SchoolBase</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A nurturing and inspiring environment where your child&apos;s mind, character, and confidence are built for life.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Textual Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              At SchoolBase, we believe every child has greatness within. Since our founding, we&apos;ve grown from a humble lesson center to a reputable school known for academic excellence, character development, and holistic education.
            </p>
            <p className="text-gray-700 text-lg">
              With experienced teachers, a secure and tech-driven learning environment, and values rooted in integrity and curiosity, we’re not just preparing students for exams—we’re preparing them for life.
            </p>

            {/* Vision/Mission/Values Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <h4 className="text-lg font-semibold text-gray-800">Our Vision</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    To raise confident, value-driven leaders who thrive in any environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <School className="w-5 h-5 text-blue-600" />
                    <h4 className="text-lg font-semibold text-gray-800">Our Mission</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    To provide a world-class education that nurtures the mind, heart, and character of every child.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-4" />

            {/* Core Values */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-600" />
                Our Core Values
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
                <li>✓ Excellence</li>
                <li>✓ Integrity</li>
                <li>✓ Godliness</li>
                <li>✓ Curiosity</li>
                <li>✓ Responsibility</li>
                <li>✓ Growth</li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                variant="secondary"
                className="bg-blue-700 text-white hover:bg-blue-800 shadow-lg px-6 py-3 text-base"
              >
                Contact Us to Learn More
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 delay-200">
            <Image
              src="/images/about.jpg" // Ensure the file exists in /public/images
              alt="Happy students at SchoolBase"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
