import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Button } from "../../Components/Props";
import PageWrapper from "../../Components/Common/PageWrapper";
import img1 from "../../assets/Images/img1.png";
import img2 from "../../assets/Images/img2.png";
import img3 from "../../assets/Images/img3.png";
import img4 from "../../assets/Images/img4.png";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    image: img1,
    title: "Find Doctors All Around Your City",
    subtitle:
      "Easily discover doctors throughout your city with just a few clicks.",
  },
  {
    image: img2,
    title: "Get recommendations from your doctor.",
    subtitle:
      "Connect with your doctor to receive personalised recommendations tailored to your health needs.",
  },
  {
    image: img3,
    title: "Emergencies are paid attention to.",
    subtitle: "We respond promptly to emergency situations.",
  },
  {
    image: img4,
    title: "Connect with your doctor anywhere.",
    subtitle:
      "With us, you can effortlessly connect with your doctor from anywhere.",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState<number>(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));

  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const isLast = current === slides.length - 1;

  return (
    <PageWrapper>
      {/* mobile view */}
      <div
        className="
      flex flex-col
      justify-center gap-16
      min-h-screen
      px-4
      min-[350px]:px-8
      bg-white
      min-[500px]:hidden
      "
      >
        {/* Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-[260px] h-[240px] object-contain mb-12"
            />
            <h2 className="font-Roboto text-2xl font-semibold text-[#1B1B1B] leading-snug mb-4">
              {slides[current].title}
            </h2>
            <p className="text-sm text-[#A7ADBE] leading-relaxed max-w-[280px]">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Bottom */}
        <div>
          {/* Dots — centered */}
          <div className="flex justify-end gap-1.5 mb-16">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === current ? "w-6 bg-[black]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              label="Get Started"
              onClick={() => navigate("/role-select")}
            />
            <Button
              variant="primary"
              label="Login"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div
        className="
      hidden 
      min-[500px]:flex
      flex-col
      gap-14
      items-center
      justify-center
      min-h-screen
      max-w-[896px] m-auto
      "
      >
        <div className="w-full relative flex items-center justify-center h-[280px] px-14">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-4  w-[40px] h-[40px] rounded-full border-[2px] border-[#008847] flex items-center justify-center text-[#008847] hover:bg-[#008847] hover:text-white transition-all duration-200"
          >
            <FiArrowLeft size={30} />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="h-[400px] w-[400px] object-contain"
            />
          </AnimatePresence>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-6 w-[40px] h-[40px] rounded-full border-[2px] border-[#008847] flex items-center justify-center text-[#008847] hover:bg-[#008847] hover:text-white transition-all duration-200"
          >
            <FiArrowRight size={30} />
          </button>
        </div>

        {/* Card body */}
        <div className="px-8 pb-8 pt-6">
          {/* Last slide — Role Select embedded */}
          {isLast ? (
            <AnimatePresence mode="wait">
              <motion.div
                key="roleselect"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div
                      className="
                min-[520px]:w-[400px]
                min-[800px]:w-[596px]
                flex flex-col 
                items-center
                "
                    >
                      <h2
                        className="
                font-Roboto
                text-[32px] font-semibold 
                text-[#1B1B1B] mb-2
                text-center
                
                "
                      >
                        {slides[current].title}
                      </h2>
                      <p className="font-Roboto font-regular text-[20px] text-[#A7ADBE] leading-relaxed mb-6 text-center min-[520px]:w-[400px]">
                        {slides[current].subtitle}
                      </p>
                    </div>

                    <div className="w-full flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {slides.map((_, i) => (
                          <div
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                              i === current
                                ? "w-6 bg-[#008847]"
                                : "w-2 bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <Button
                        variant="primary"
                        label="Begin your journey"
                        width="auto"
                        onClick={() => navigate("/role-select")}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="
                min-[520px]:w-[400px]
                min-[800px]:w-[596px]
                flex flex-col 
                items-center
                "
                >
                  <h2
                    className="
                font-Roboto
                text-[32px] font-semibold 
                text-[#1B1B1B] mb-2
                text-center
                
                "
                  >
                    {slides[current].title}
                  </h2>
                  <p className="font-Roboto font-regular text-[20px] text-[#A7ADBE] leading-relaxed mb-6 text-center min-[520px]:w-[400px]">
                    {slides[current].subtitle}
                  </p>
                </div>

                {/* Dots left + Skip right */}
                <div className="w-full flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {slides.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                          i === current ? "w-6 bg-[#008847]" : "w-2 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    width="153px"
                    variant="outline"
                    label="Skip"
                    onClick={() => navigate("/role-select")}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Onboarding;
