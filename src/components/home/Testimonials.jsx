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
// src/hooks/useScrollReveal.js
import { useRef, useState } from "react";


export const useScrollReveal = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting); // 👈 toggles true/false every time
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
        role: "Mukand Chamicals",
        image: "/t2.jpg",
        feedback:
            "I am truly grateful to Shivangi Ma’am for her constant guidance and support. She helped me at every step of my career journey, especially in choosing the right college and shaping my academic path. Her mentorship gave me the clarity and confidence I needed to move forward.Thanks to her valuable advice and motivation, I am currently working with Mukund Chemicals. I owe a large part of my career growth to her encouragement and dedicated support.Shivangi Ma’am is not just a mentor but also a true inspiration for students like me..",
    },
    {
        name: "Lakshya",
        role: "Deputy Manager HDFC Bank",
        image: "/t1.jpg",
        feedback:
            "Choosing the right MBA college felt overwhelming until I connected with Shivangi ma’am from Karori Academic Advisor. She guided me through every step, from shortlisting colleges to SOP writing and interview preparation. Thanks to her support, I got admitted to Narayana Business School, and today I’m proud to be working as a Deputy Manager at HDFC Bank. Her mentorship played a key role in shaping my career. If you're unsure about your next academic move, I highly recommend reaching out to Karori Academic Advisor — it was the best",
    },
    // {
    //     name: "Rahul Verma",
    //     role: "Medical Aspirant",
    //     image: "https://randomuser.me/api/portraits/men/76.jpg",
    //     feedback:
    //         "The personalized advice and resources they provided were invaluable. I now feel more confident about my future career.",
    // },
];

const Testimonials = () => {
    const [sectionRef, sectionVisible] = useScrollReveal();

    return (
       <section ref={sectionRef} className="py-16 bg-gray-50 ">
  <div className="max-w-5xl mx-auto px-4 relative">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-3xl font-bold text-center mb-10"
    >
      What Our Students Say
    </motion.h2>

    {/* Custom navigation */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={sectionVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="absolute top-1/2 -left-6 z-10 cursor-pointer"
      id="prevBtn"
    >
      <ChevronLeft className="w-8 h-8 text-indigo-600 hover:text-indigo-800" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={sectionVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="absolute top-1/2 -right-6 z-10 cursor-pointer"
      id="nextBtn"
    >
      <ChevronRight className="w-8 h-8 text-indigo-600 hover:text-indigo-800" />
    </motion.div>

    {/* ✅ Added wrapper div with padding/margin */}
    <div className="relative px-6 py-10 shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] rounded-2xl bg-white">
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6   min-h-[350px] justify-center transform hover:-translate-y-3  transition-all duration-300"
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={sectionVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full mb-4 object-cover shadow-[0_6px_15px_rgba(0,0,0,0.3),0_0_15px_rgba(79,70,229,0.3)] border-4 border-white"
              />
              <h3 className="text-xl font-semibold text-indigo-600">
                {t.name} - {t.role}
              </h3>
              <p className="text-gray-600 mt-4">{t.feedback}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

    );
};

export default Testimonials;