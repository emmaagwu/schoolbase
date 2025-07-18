'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Mrs. Tina Akande',
    role: 'Parent of 2 students',
    comment:
      'SchoolBase has completely transformed my children\'s academic journey. The teachers are caring and passionate, and the programs are top-notch.',
    image: '/images/testimonials/tina.jpeg',
    rating: 5,
  },
  {
    name: 'Mr. Adeolu Martins',
    role: 'Alumnus',
    comment:
      'This school laid the foundation for my success. I gained confidence, leadership skills, and academic excellence.',
    image: '/images/testimonials/adeolu.jpeg',
    rating: 5,
  },
  {
    name: 'Mrs. Folake Ogunlana',
    role: 'Parent',
    comment:
      'I\'m impressed with the values SchoolBase instills in their pupils. My daughter is more responsible and eager to learn.',
    image: '/images/testimonials/folake.jpeg',
    rating: 5,
  },
  {
    name: 'Master Samuel Adebayo',
    role: 'Student, JSS3',
    comment:
      'The STEM & Robotics club is my favorite! We build things and learn how to solve real-world problems.',
    image: '/images/testimonials/samuel.jpeg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          } transition-colors duration-200`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-15 animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            What People Are Saying
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our parents, students, and alumni about their transformative SchoolBase experience.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 
                     bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 
                     text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 
                     hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                     group"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={next}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 
                     bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 
                     text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 
                     hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                     group"
            aria-label="Next Testimonial"
          >
            <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Testimonial Card */}
          <Card className="relative p-8 md:p-12 lg:p-16 shadow-2xl bg-white/90 backdrop-blur-sm border-0 
                         overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                {/* Profile Section */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto lg:mx-0 rounded-full 
                                  overflow-hidden shadow-xl ring-4 ring-white/50 transform hover:scale-105 
                                  transition-all duration-300 hover:shadow-2xl">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        width={144}
                        height={144}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                  rounded-full blur-sm opacity-50 group-hover:opacity-70 transition-opacity" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 font-medium">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <StarRating rating={testimonials[current].rating} />
                  
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-2 w-8 h-8 text-gray-300 transform rotate-180" />
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed 
                                        font-medium italic pl-6 pr-6 lg:pl-8 lg:pr-8">
                      {testimonials[current].comment}
                    </blockquote>
                    <Quote className="absolute -bottom-4 -right-2 w-8 h-8 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === current
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mini Preview Cards */}
        <div className="hidden lg:grid grid-cols-4 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left group hover:shadow-lg ${
                index === current
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900 truncate">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {testimonial.comment}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}