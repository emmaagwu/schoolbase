'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Education Lane', 'Lagos, Nigeria'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+234 803 123 4567', '+234 805 987 6543'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@schoolbase.edu.ng', 'admissions@schoolbase.edu.ng'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'text-orange-600'
    }
  ];

  const InputField = ({ 
    label, 
    name, 
    type = 'text', 
    placeholder, 
    icon: Icon,
    isTextarea = false 
  }: {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    icon: any;
    isTextarea?: boolean;
  }) => (
    <div className="group">
      <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon size={18} className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        </div>
        {isTextarea ? (
          <textarea
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleInputChange}
            placeholder={placeholder}
            rows={4}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                     transition-all duration-200 resize-none
                     placeholder:text-gray-400 text-gray-700"
            required
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                     transition-all duration-200
                     placeholder:text-gray-400 text-gray-700"
            required
          />
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.05),transparent_50%)]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-2xl opacity-15 animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your child's educational journey? We're here to answer your questions and guide you through the process.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8 lg:p-10 bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  name="name"
                  placeholder="Enter your full name"
                  icon={User}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  icon={Phone}
                />
              </div>

              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                icon={Mail}
              />

              <InputField
                label="Message"
                name="message"
                placeholder="Tell us about your inquiry..."
                icon={MessageSquare}
                isTextarea
              />

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg 
                           font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 
                           hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                </div>
              )}
            </div>
          </Card>

          {/* Google Map */}
          <Card className="p-2 bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 pointer-events-none" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8951094419463!2d3.3515827!3d6.6056471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91b1a3e7a5a1%3A0x8b1b1b1b1b1b1b1b!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1635000000000!5m2!1sen!2sng"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-2">SchoolBase Campus</h4>
              <p className="text-sm text-gray-600 mb-2">123 Education Lane, Lagos, Nigeria</p>
              <p className="text-xs text-gray-500">
                Easily accessible by public transport with ample parking available
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">We typically respond within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}