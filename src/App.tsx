/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plane, Phone, Mail, MapPin, ChevronRight, Menu, X, BookOpen, Users, GraduationCap, Award, Target, Briefcase, School, Shield, Box, Settings, Zap, Cpu, Wrench, Cloud, ClipboardList, UserCheck, FileCheck2, CheckCircle2, Rocket, Plus, Minus, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-slate-100" 
          : "bg-white py-5 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
          <img 
            src="https://i.postimg.cc/g0sPH7q0/Logo-AUDU.png" 
            alt="ADUA Academy Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://edu.airdivitudan.com/auda-degree/assets/image%202769.webp" 
            alt="MGCG University Logo" 
            className="h-7 sm:h-9 md:h-11 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://i.postimg.cc/x15dTy35/image-2770.jpg" 
            alt="NAAC A++ Accreditation Logo" 
            className="h-[28.8px] sm:h-[38.4px] md:h-[48px] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-primary transition-colors border-b-2 border-brand-primary pb-0.5">Home</a>
          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-brand-primary transition-colors">Our Edge</a>
          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-brand-primary transition-colors">Placements</a>
          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-brand-primary transition-colors">Admissions</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2.5 bg-brand-primary text-white font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 shadow-md">
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[100] p-8 flex flex-col pt-24"
          >
            <button 
              className="absolute top-8 right-8 p-2 text-brand-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8">
              {["Home", "Our Edge", "Placements", "Admissions"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-3xl font-black uppercase tracking-widest text-brand-dark hover:text-brand-primary" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 px-8 py-5 bg-brand-primary text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-primary/20">
                Apply Now
              </button>
            </div>

            <div className="mt-auto pt-10 border-t border-slate-100 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} />
                <span className="font-bold text-sm text-brand-dark">+91 95221 23707</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                <span className="font-bold text-sm text-brand-dark">info@airdivitudan.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/HnZxvxwJ/BG.png" 
          alt="Aviation Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-sm mb-10">
              <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80">Admissions Open 2026-27</span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-[76px] leading-[1.1] md:leading-[1.05] font-extrabold mb-8 tracking-tight text-white drop-shadow-2xl">
              Launch Your Aviation Career with a <span className="italic font-serif text-brand-secondary">UGC-Recognized</span> BBA Degree
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-2xl font-semibold drop-shadow-md">
              Explore high-growth careers in Aviation, Airport Management, Hospitality, Cargo, Safety, and Drone Technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-brand-secondary text-brand-dark font-bold uppercase tracking-widest text-[11px] hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-[0_15px_30px_rgba(254,212,0,0.2)]">
                Book Free Counseling
              </button>
              <button className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-brand-dark transition-all">
                View Courses
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bento-style Features Grid */}
      <div className="mt-auto relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10 bg-brand-dark/80 backdrop-blur-xl font-sans">
        <div className="p-10 border-r border-white/10 group hover:bg-brand-primary/5 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-5 h-5 text-brand-secondary" />
            <div className="text-brand-secondary text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
              Careers
            </div>
          </div>
          <div className="text-sm text-white/80 leading-relaxed font-semibold">8 Degree Options For Future-Ready Careers</div>
        </div>
        <div className="p-10 border-r border-white/10 group hover:bg-brand-primary/5 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-5 h-5 text-brand-secondary" />
            <div className="text-brand-secondary text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
              Accreditation
            </div>
          </div>
          <div className="text-sm text-white/80 leading-relaxed font-semibold">UGC Recognized Degree Programs</div>
        </div>
        <div className="p-10 group hover:bg-brand-primary/5 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-5 h-5 text-brand-secondary" />
            <div className="text-brand-secondary text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
              Placements
            </div>
          </div>
          <div className="text-sm text-white/80 leading-relaxed font-semibold">100% Placement Assistance For All Eligible Students</div>
        </div>
      </div>
    </section>
  );
};

const CoursesSection = () => {
  const courses = [
    {
      name: "BBA (Airport Management)",
      roles: "Airport Terminal Operations Executive + Airline Ramp Executive",
      nsqf: "4 + 4",
      hours: "540 + 420 Hr.",
      image: "https://skybirdaviation.edu.in/wp-content/uploads/2023/06/Airport-and-Airline-Management-1024x544.webp"
    },
    {
      name: "BBA (Aviation Hospitality)",
      roles: "Airline Cabin Crew + Customer Service Executive",
      nsqf: "4 + 4",
      hours: "600 + 570 Hr.",
      image: "https://plus.unsplash.com/premium_photo-1661658247859-8f4ad6bb0329?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "BBA (Aviation Security Safety)",
      roles: "Airline Security Executive + Airport Safety Crew",
      nsqf: "3 + 4",
      hours: "375 + 465 Hr.",
      image: "https://plus.unsplash.com/premium_photo-1661351490701-bc7e60ee4492?q=80&w=1492&auto=format&fit=crop"
    },
    {
      name: "BBA (Ground Support Equipment)",
      roles: "GSE Operator + GSE Mechanic",
      nsqf: "4 + 4",
      hours: "420 + 420 Hr.",
      image: "https://plus.unsplash.com/premium_photo-1661548163060-04bf233fdb82?q=80&w=1471&auto=format&fit=crop"
    },
    {
      name: "BBA (Drone Entrepreneurship)",
      roles: "Drone Operator + Entrepreneurship & Aerial Services",
      nsqf: "4",
      hours: "420 + 300 Hr.",
      image: "https://i.postimg.cc/PrcVmB67/4.png"
    },
    {
      name: "BBA (Drone AI Robotics)",
      roles: "Drone Operator + Drone AI & Robotics",
      nsqf: "4",
      hours: "420 + 420 Hr.",
      image: "https://plus.unsplash.com/premium_photo-1714618854833-3445b52019d8?q=80&w=1581&auto=format&fit=crop"
    },
    {
      name: "BBA (Drone Technologies)",
      roles: "Drone Operator + Maintenance & Troubleshooting",
      nsqf: "4",
      hours: "420 + 420 Hr.",
      image: "https://plus.unsplash.com/premium_photo-1757913837786-f4d345aacff0?q=80&w=1632&auto=format&fit=crop"
    }
  ];

  const totalItems = courses.length;
  // Use a long tripled array for infinite effect
  const displayCourses = [...courses, ...courses, ...courses];
  
  const [itemsToShow, setItemsToShow] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const getGapValue = () => {
    if (itemsToShow <= 1) return 0;
    return window.innerWidth < 1024 ? 1 : 1.5;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1280) setItemsToShow(2);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    if (currentIndex >= totalItems * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - totalItems);
      }, 400); 
      return () => clearTimeout(timer);
    }
    if (currentIndex < totalItems) {
       const timer = setTimeout(() => {
         setIsTransitioning(false);
         setCurrentIndex(currentIndex + totalItems);
       }, 400);
       return () => clearTimeout(timer);
    }
  }, [currentIndex, totalItems]);

  const gapValue = getGapValue();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block">Our Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Choose Your Degree Program</h2>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-5 py-3 bg-white border border-slate-200 rounded-xl">
                <p className="text-slate-400 text-[9px] uppercase tracking-widest font-black mb-1">Accreditation</p>
                <p className="text-brand-dark font-bold text-sm">UGC-Recognized Degrees</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="rotate-180 w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden px-1">
          <motion.div 
            className="flex"
            style={{ gap: `${gapValue}rem` }}
            animate={{ 
              x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (gapValue / itemsToShow)}rem)` 
            }}
            transition={isTransitioning ? { type: "spring", stiffness: 100, damping: 20 } : { duration: 0 }}
          >
            {displayCourses.map((course, idx) => (
              <div
                key={idx}
                className="shrink-0"
                style={{ 
                  width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * gapValue / itemsToShow}rem)`
                }}
              >
                <div className="group h-full p-2 rounded-[28px] md:rounded-[32px] bg-white border border-slate-200 transition-all duration-300 hover:border-brand-primary/40 overflow-hidden flex flex-col shadow-sm">
                  <div className="relative h-48 md:h-60 rounded-[20px] md:rounded-[24px] overflow-hidden mb-4 md:mb-6">
                      <img 
                        src={course.image} 
                        alt={course.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="px-6 pb-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-extrabold text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors min-h-[56px]">
                        {course.name}
                      </h3>
                      
                      <div className="space-y-4 mb-2 flex-grow">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-2 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-brand-secondary"></span>
                            Key Roles
                          </p>
                          <p className="text-sm text-slate-600 font-semibold leading-relaxed line-clamp-2">
                            {course.roles}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  );
};

const WhyChooseSection = () => {
  const points = [
    {
      title: "Industry-Experienced Faculty",
      description: "Learn from aviation experts with real-world experience.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "University-Affiliated Programs",
      description: "UGC-recognized degrees with academic excellence.",
      icon: <School className="w-6 h-6" />
    },
    {
      title: "Career-Focused Curriculum",
      description: "Practical learning designed for today's aviation industry.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "100% Placement Assistance",
      description: "Dedicated support to help you land the right career.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block text-center w-full">Our Advantage</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Why Choose ADUA?</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-brand-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3 leading-tight">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -z-0 opacity-50"></div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto relative rounded-[8px] overflow-hidden min-h-[500px] md:min-h-[700px]">
        {/* Desktop Image */}
        <img 
          src="https://i.postimg.cc/xCwsJm3q/BG-Desktop.png" 
          alt="Aviation University Banner" 
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          referrerPolicy="no-referrer"
        />
        {/* Mobile Image */}
        <img 
          src="https://i.postimg.cc/280Cvjg1/BG-Mobile.png" 
          alt="Aviation University Banner Mobile" 
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const TrainingSection = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Tech-enabled learning environment for interactive education.",
      image: "https://i.postimg.cc/FFTBKf0c/1.png",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Real Aircraft Training",
      description: "Hands-on exposure with aircraft & aviation equipment.",
      image: "https://egstatic.net/dn/our-services/ground-handling/dnata-staff-on-ground-duty-w600x600.jpg?h=RiqdjLSg3L9pH6FC-fFM1w",
      icon: <Plane className="w-6 h-6" />
    },
    {
      title: "Airline-Level Safety Training",
      description: "Industry-standard safety protocols and drills.",
      image: "https://i.postimg.cc/P5gckBYW/3.png",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "DGCA-Compliant Drone Training",
      description: "State-of-the-art drones and certified training infrastructure.",
      image: "https://i.postimg.cc/PrcVmB67/4.png",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block text-center w-full">Hands-on Experience</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Practical Training & Infrastructure</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-slate-200 rounded-[32px] p-2 h-full transition-all duration-500 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5">
                <div className="relative mb-10">
                  <div className="h-56 rounded-[24px] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-x-0 -bottom-7 flex justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-brand-primary border-4 border-white flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-8 text-center mt-2">
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerSection = () => {
  const roles = [
    { title: "Airport Terminal Operations Executive", icon: <Users size={20} /> },
    { title: "Airline Ramp Executive", icon: <Plane size={20} /> },
    { title: "Cabin Crew", icon: <Users size={20} /> },
    { title: "Customer Service Executive", icon: <Phone size={20} /> },
    { title: "Cargo Operations / Assistant", icon: <Box size={20} /> },
    { title: "Security Executive / Airport Safety Crew", icon: <Shield size={20} /> },
    { title: "Ground Support Equipment Operator / Mechanic", icon: <Settings size={20} /> },
    { title: "Drone Operator / Entrepreneur", icon: <Zap size={20} /> },
    { title: "Drone AI & Robotics Specialist", icon: <Cpu size={20} /> },
    { title: "Drone Maintenance Technician", icon: <Wrench size={20} /> },
    { title: "Aerial Services Professional", icon: <Cloud size={20} /> }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block text-center w-full">Future Pathways</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Career Opportunities</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                {role.icon}
              </div>
              <span className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-tight">
                {role.title}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-brand-primary text-white font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-brand-primary/20 hover:bg-blue-700 transition-all"
          >
            Explore Your Potential
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const AdmissionProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Apply Online",
      description: "Fill the application form on our website.",
      icon: <ClipboardList size={24} />
    },
    {
      step: "02",
      title: "Counseling",
      description: "Get career guidance from our experts.",
      icon: <UserCheck size={24} />
    },
    {
      step: "03",
      title: "Document Submission",
      description: "Submit required documents.",
      icon: <FileCheck2 size={24} />
    },
    {
      step: "04",
      title: "Admission Confirmation",
      description: "Receive offer letter & pay fees.",
      icon: <CheckCircle2 size={24} />
    },
    {
      step: "05",
      title: "Start Your Journey",
      description: "Begin your BBA degree at ADUA!",
      icon: <Rocket size={24} />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block text-center w-full">Join ADUA</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Admission Process</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto"></div>
        </div>

        <div className="relative mb-24">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mx-auto mb-8 shadow-sm transition-all duration-300 group-hover:border-brand-primary group-hover:shadow-xl group-hover:scale-110">
                  <div className="text-slate-400 group-hover:text-brand-primary transition-colors">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-primary text-white text-[10px] font-black flex items-center justify-center border-4 border-white">
                    {item.step}
                  </div>
                </div>

                <div className="px-4">
                  <h3 className="text-lg font-bold text-brand-dark mb-3 uppercase tracking-tight group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[32px] border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Eligibility Criteria</h3>
            </div>
            <p className="text-slate-600 font-medium leading-relaxed">
              Students who have completed or are appearing for Class 12 can apply. Suitable for students interested in aviation, hospitality, airport operations, cargo, safety, customer service, and drone careers.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary p-8 md:p-12 rounded-[32px] text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-brand-secondary">
                <FileCheck2 size={20} />
              </div>
              <h3 className="text-xl font-bold">Documents Required</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-white/70">
              {[
                "Class 10 Marksheet",
                "Class 12 Marksheet",
                "Aadhaar Card",
                "Passport Size Photos",
                "Transfer Certificate",
                "Migration Certificate",
                "Other Required Docs"
              ].map((doc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div>
                  {doc}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[48px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="text-center md:text-left mb-12">
              <h3 className="text-2xl md:text-3xl font-black text-brand-dark mb-4">Parent & Student Counseling Support</h3>
              <p className="text-slate-500 font-medium max-w-2xl">We ensure every student and parent gets the right guidance to make informed decisions about their aviation career.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Course Selection", desc: "Choose the right course for you.", icon: BookOpen },
                { title: "Career Roadmap", desc: "Plan your future with experts.", icon: MapPin },
                { title: "Fee Clarity", desc: "Transparent fee & admission support.", icon: Shield },
                { title: "Interview Ready", desc: "Prepare for a successful career.", icon: Target }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-brand-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What degree courses are offered?",
      answer: "ADUA offers BBA programs in Airport Management, Aviation & Hospitality, Aviation Logistics & Cargo Management, Aviation Security & Safety, Ground Support Equipment Management, Drone Entrepreneurship & Aerial Services, Drone AI & Robotics, and Drone Technologies."
    },
    {
      question: "Are these UGC-recognized?",
      answer: "The programs are presented through MGCGV collaboration; students should verify latest recognition details with the official admission team."
    },
    {
      question: "What is the Annual Fee?",
      answer: "The annual fee is ₹101,300 for each listed BBA program."
    },
    {
      question: "Who can apply?",
      answer: "Students who have completed or are appearing for Class 12 (any stream) can apply."
    },
    {
      question: "Is there practical training?",
      answer: "Yes, our curriculum includes smart classrooms, real aircraft exposure, airline-level safety training, and advanced drone training infrastructure."
    },
    {
      question: "What about placement support?",
      answer: "ADUA provides comprehensive placement assistance, career guidance, and interview readiness programs to help students secure roles in the aviation industry."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block text-center w-full">Support Center</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === idx ? "border-brand-primary shadow-xl shadow-brand-primary/5" : "border-slate-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`font-bold transition-colors ${openIndex === idx ? "text-brand-primary" : "text-brand-dark"}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === idx ? "bg-brand-primary text-white rotate-0" : "bg-slate-100 text-slate-400 rotate-0"
                }`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 text-slate-500 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ananya Singh",
      course: "BBA Aviation & Hospitality",
      text: "ADUA gave me the perfect start to my aviation career. The training is practical and the faculty is amazing!",
      image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Rahul Verma",
      course: "BBA Drone Technologies",
      text: "The drone training here is world-class. I gained skills and confidence to build my career.",
      image: "https://plus.unsplash.com/premium_photo-1661637743614-a0aea42073c1?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Priya Sharma",
      course: "BBA Airport Management",
      text: "100% placement support is real. I got placed at a top airport right after my course!",
      image: "https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?q=80&w=687&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block text-center w-full">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Student Testimonials</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 relative group transition-all duration-500 hover:border-brand-primary/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col"
            >
              <Quote className="text-brand-primary/10 absolute top-8 right-8 w-12 h-12" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors">
                  <Quote size={40} fill="currentColor" />
                </div>
                
                <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg flex-grow italic">
                  "{item.text}"
                </p>
                
                <div className="pt-8 border-t border-slate-100 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-brand-primary/80 font-black uppercase tracking-[0.2em]">
                      {item.course}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoTestimonialsSection = () => {
  const videos = [
    { id: "heXr15KNhDY", title: "Aviation Training Experience", student: "Aviation & Hospitality Student" },
    { id: "ceXGtfEHGHU", title: "Drone Pilot Success", student: "Drone Technology Graduate" },
    { id: "szQFpkSfyl8", title: "Airport Career Insight", student: "Airport Terminal Management" },
    { id: "OQnVAl3wg8o", title: "ADUA Placement Story", student: "Placed at Major Airline" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block">Watch Their Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Video Testimonials</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-[32px] border border-slate-200/60 shadow-lg shadow-slate-200/40 relative group transition-all duration-300 hover:border-brand-primary/20 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <div className="relative aspect-[9/16] rounded-[24px] overflow-hidden bg-black shadow-inner mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-bold text-brand-dark text-base mb-1 tracking-tight group-hover:text-brand-primary transition-colors">
                  {video.title}
                </h4>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest text-[9px]">
                  {video.student}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactEnquirySection = () => {
  return (
    <section id="contact" className="py-24 bg-white text-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">Need Guidance?<br />Talk to Our Experts</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">Your Message</label>
                <textarea rows={4} placeholder="I'm interested in..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:outline-none transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-brand-primary text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all shadow-xl shadow-brand-primary/10">
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary border border-slate-100 group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">Visit Us</h4>
                  <p className="text-xl font-bold leading-relaxed">69, Master Plan, Lane no-3, Civil Line, Satna.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary border border-slate-100 group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">Call Us</h4>
                  <p className="text-xl font-bold font-mono tracking-tight">+91 95221 23707</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary border border-slate-100 group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  <Cloud size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">Website</h4>
                  <p className="text-xl font-bold">airdivitudan.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-100">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-brand-primary/5 border border-brand-primary/10">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Building Tomorrow's Professionals Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-secondary selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <CoursesSection />
        <WhyChooseSection />
        <CTABanner />
        <TrainingSection />
        <CareerSection />
        <AdmissionProcessSection />
        <TestimonialsSection />
        <VideoTestimonialsSection />
        <FAQSection />
        <ContactEnquirySection />
      </main>
      
      <footer className="bg-[#040d3a] pt-24 pb-12 text-white relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="bg-white p-4 rounded-2xl inline-flex items-center justify-center mb-8 shadow-xl shadow-black/5">
                <img 
                  src="https://i.postimg.cc/g0sPH7q0/Logo-AUDU.png" 
                  alt="ADUA Logo" 
                  className="h-12 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-white/50 text-sm leading-relaxed font-medium mb-8">
                Building Tomorrow's Aviation Professionals Today. Join Air Divit Udan Academy for world-class technical and career oriented education.
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-brand-secondary mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {["Home", "About ADUA", "MGCGV Courses", "Admission Process"].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/60 hover:text-brand-secondary transition-colors text-sm font-medium flex items-center gap-2 group">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-brand-secondary mb-8">Useful Links</h4>
              <ul className="space-y-4">
                {["Career Opportunities", "Infrastructure", "FAQ", "Contact Us"].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/60 hover:text-brand-secondary transition-colors text-sm font-medium flex items-center gap-2 group">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="space-y-8">
                {/* Office Address */}
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#f5e042] mb-3 flex items-center gap-2.5">
                    <MapPin size={20} className="shrink-0 text-[#f5e042]" />
                    <span>Office Address :</span>
                  </h4>
                  <p className="text-[#a0aed0] hover:text-white transition-colors text-[13px] leading-relaxed font-bold uppercase tracking-wider pl-7">
                    AIRDIVIT UDAN ACADEMY PRIVATE LIMITED 69,<br />
                    MASTER PLAN, CIVIL LINES SATNA, MP 485001,<br />
                    India
                  </p>
                </div>

                {/* Campus Address */}
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#f5e042] mb-3 flex items-center gap-2.5">
                    <MapPin size={20} className="shrink-0 text-[#f5e042]" />
                    <span>Campus Address :</span>
                  </h4>
                  <p className="text-[#a0aed0] hover:text-white transition-colors text-[13px] leading-relaxed font-bold pl-7">
                    MGCG University, Chitrakoot
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">© 2026-27 Airdivit Udan Academy (ADUA). All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] uppercase tracking-widest font-black text-white/30 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase tracking-widest font-black text-white/30 hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
