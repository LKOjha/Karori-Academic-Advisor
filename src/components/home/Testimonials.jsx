// src/components/Testimonials.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useState } from "react";

export const useScrollReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};
const testimonials = [
  {
    name: "Pragya",
    role: "Mukund Chamicals",
    image: "/t2.jpg",
    feedback:
      "I am truly grateful to Karori Academic Advisor for the constant guidance and support. They have been there for me at every step of my career journey, especially in helping me choose the right college and shaping my academic path. Their mentorship gave me the clarity and confidence I needed to move forward. Thanks to their valuable advice and motivation, I am now working with Mukund Chemicals. I owe a large part of my career growth to their encouragement and dedicated support. Karori Academic Advisor is not just a mentor but also a true inspiration for students like me.",
  },
  {
    name: "Lakshya",
    role: "Deputy Manager HDFC Bank",
    image: "/t1.jpg",
    feedback:
      "Choosing the right MBA college felt overwhelming until I connected with Karori Academic Advisor. They guided me through every step — from shortlisting colleges to SOP writing and interview preparation. With their support, I secured admission to Narayana Business School, and today I’m proud to be working as a Deputy Manager at HDFC Bank. Their mentorship played a key role in shaping my career. If you’re unsure about your next academic move, I highly recommend reaching out to Karori Academic Advisor — it was one of the best decisions I ever made.",
  },
  {
    name: "Aditya Tyagi",
    role: "Godrej Properties",
    image: "/t3.jpg",
    feedback:
      "PGDM admission ke time par main apne career ko lekar bahut confused aur demotivated tha. Tab Karori Academic Advisor ne mujhe guide kiya, sahi options dikhaye aur ek reputed college me admission dilwaya. Unke support ki wajah se maine apni journey dobara shuru ki aur aaj main Godrej Properties, Noida me kaam kar raha hoon. Jo confidence aur direction mujhe mila, wo Karori Academic Advisor ki guidance ke bina possible nahi tha.",
  },
];

const Testimonials = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();

  return (
   <section
  ref={sectionRef}
  className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
>
  <div className="max-w-5xl mx-auto px-4 relative">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
    >
      What Our Students Say
    </motion.h2>

    {/* ✅ Main wrapper */}
    <div className="relative px-6 py-10 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] rounded-2xl bg-white dark:bg-gray-800 transition-colors duration-500">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{ prevEl: "#prevBtn", nextEl: "#nextBtn" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center p-6 min-h-[350px] justify-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {t.name} - {t.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {t.feedback}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Only keep arrows here */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <div id="prevBtn" className="cursor-pointer">
          <ChevronLeft className="w-8 h-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200" />
        </div>
        <div id="nextBtn" className="cursor-pointer">
          <ChevronRight className="w-8 h-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200" />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Testimonials;
