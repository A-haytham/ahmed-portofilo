"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "../Button";
import { SectionHeader } from "../SectionHeader";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! This is a demo form.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0ea5e9]/10 to-[#a855f7]/10 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <p className="mb-8 text-gray-300">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-[#0ea5e9]"
                >
                  <div className="rounded-lg bg-[#0ea5e9]/20 p-2">
                    <Mail size={20} />
                  </div>
                  <span>ahmed.haytham@email.com</span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 transition-colors hover:text-[#0ea5e9]"
                >
                  <div className="rounded-lg bg-[#0ea5e9]/20 p-2">
                    <MapPin size={20} />
                  </div>
                  <span>Cairo, Egypt</span>
                </motion.div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:ahmed.haytham@email.com",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="group flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[#0ea5e9]/50 hover:bg-[#0ea5e9]/20"
                  >
                    <Icon
                      size={20}
                      className="text-gray-400 transition-colors group-hover:text-[#0ea5e9]"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-white/10 bg-[rgba(17,17,31,0.6)] p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#0ea5e9]/50"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-[#0ea5e9] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-[#0ea5e9] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-[#0ea5e9] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" variant="neon" className="w-full group">
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
