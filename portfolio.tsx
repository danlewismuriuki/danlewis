"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Menu,
  X,
  Download,
  ArrowRight,
  Code,
  Database,
  Server,
  Cloud,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentProject, setCurrentProject] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: "Python", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "PostgreSQL/SQL", level: 88 },
    { name: "Node.js/NestJS", level: 85 },
    { name: "AWS/Cloud", level: 82 },
    { name: "Docker/Kubernetes", level: 78 },
  ];

  const projects = [
    {
      title: "Data Center Management System",
      description:
        "Full-stack system for monitoring and managing rented data center assets including servers, GPUs, network cables, and power racks with real-time inventory tracking.",
      tech: [
        "Node.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Vue.js",
        "Quasar FrameWork",
        "Docker",
      ],
      image: "/datacenter.png?height=240&width=400",
      github: "https://github.com/danlewismuriuki",
      live: "https://intuitive-planner.vercel.app/",
    },
    {
      title: "Open Data Agriculture Platform",
      description:
        "Backend solutions supporting open data initiatives in agriculture and nutrition for GODAN, facilitating global stakeholder collaboration.",
      tech: ["Node.js", "NestJs", "PostgreSQL", "Prisma", "REST APIs", "Azure"],
      image: "/godan3.png?height=240&width=400",
      github: "https://github.com/danlewismuriuki",
      live: "https://www.godan.info/datahub",
    },
    {
      title: "Vitabu Vitabu",
      description:
        "Platform connecting Kenyan parents to exchange, buy, or donate school books. Save money while building stronger communities through book sharing, smart matching, and safe transactions.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "M-Pesa API"],
      // image: "/vitabuvitabu.png?height=240&width=400",
      image: "/vitabuvitabu.png",
      github: "https://github.com/danlewismuriuki",
      live: "https://vitabuvitabu.app/",
    },
    {
      title: "BizMasterPro",
      description:
        "An AI-powered business management ecosystem that transforms operations with quantum analytics, AI scheduling, financial automation, and enterprise-grade security — boosting productivity, cutting costs, and driving growth.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AI/ML"],
      image: "/bizpro.png?height=240&width=400",
      github: "https://github.com/danlewismuriuki",
      live: "https://bizmaster.co.ke",
    },
  ];

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "LogicSoft",
      period: "Feb 2023 - Nov 2024",
      location: "Nairobi, Kenya",
      description:
        "Led design and development of scalable RESTful APIs, supporting high-throughput business operations and seamless third-party integrations.",
      achievements: [
        "Reduced average API response time by 40% through optimization initiatives",
        "Owned key backend system architecture modules and design decisions",
        "Mentored junior developers and accelerated team productivity",
        "Authored comprehensive technical documentation and API specifications",
      ],
    },
    {
      title: "Founding Engineer (Backend Lead)",
      company: "Witz Africa",
      period: "Jan 2025 - Present",
      location: "Nairobi, Kenya (Remote)",
      description:
        "Spearheading architecture and development of robust backend systems supporting mobile and web applications, focusing on supply chain solutions.",
      achievements: [
        "Engineered end-to-end supply chain solutions bridging suppliers and vendors",
        "Built scalable distribution backend inspired by Twiga Foods model",
        "Led backend codebase governance through rigorous code reviews",
        "Collaborated across cross-functional teams to align technical implementation with product vision",
      ],
    },
    {
      title: "Backend Engineer (Consultant)",
      company: "Global Open Data for Agriculture and Nutrition (GODAN)",
      period: "Dec 2024 - June 2025",
      location: "International NGO, Hybrid",
      description:
        "Engineered backend solutions to support open data initiatives in agriculture and nutrition, promoting global data accessibility.",
      achievements: [
        "Built systems to share open data resources with stakeholders globally",
        "Designed collaboration tools for researchers, policymakers, and farmers",
        "Contributed to capacity-building efforts for sustainable agriculture",
        "Enhanced open data understanding and usage across international networks",
      ],
    },
    {
      title: "Python Developer",
      company: "Gebeya",
      period: "June 2020 - Oct 2022",
      location: "Nairobi, Kenya",
      description:
        "Developed and maintained backend services using Python and Flask, automating business workflows and enhancing data accessibility.",
      achievements: [
        "Built cloud-based solutions with REST APIs and containerized services",
        "Collaborated with AI/ML engineers on intelligent systems infrastructure",
        "Conducted rigorous testing ensuring system robustness and SLA compliance",
        "Enhanced codebase quality through documentation and CI pipeline improvements",
      ],
    },
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "IBM Data Science Certificate",
    "Google Data Analytics Certificate",
    "ALX Software Engineering Program",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Apple-style Sticky Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900/80 border-gray-800"
            : "bg-white/80 border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div
              className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dan Lewis Muriuki
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full relative overflow-hidden group ${
                    activeSection === item.id
                      ? "text-white"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-white"
                  }`}
                  style={{
                    backgroundImage:
                      activeSection === item.id
                        ? "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,97,255,1) 0%, rgba(96,239,255,1) 100.7%)"
                        : "none",
                  }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,97,255,1) 0%, rgba(96,239,255,1) 100.7%)",
                    }}
                  ></span>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              className={`md:hidden py-4 border-t backdrop-blur-xl transition-colors duration-300 ${
                isDarkMode
                  ? "border-gray-800 bg-gray-900/95"
                  : "border-gray-100 bg-white/95"
              }`}
            >
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg mx-2 my-1 relative overflow-hidden group ${
                    isDarkMode ? "hover:text-white" : "hover:text-white"
                  }`}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,97,255,1) 0%, rgba(96,239,255,1) 100.7%)",
                    }}
                  ></span>
                  <span
                    className={`relative z-10 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Apple-style Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-800 to-gray-900"
            : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        {/* Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Code
            className={`absolute top-20 left-10 w-8 h-8 rotate-12 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
          <Database
            className={`absolute top-32 right-20 w-12 h-12 -rotate-12 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
          <Server
            className={`absolute bottom-40 left-20 w-10 h-10 rotate-45 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
          <Cloud
            className={`absolute top-60 left-1/4 w-14 h-14 -rotate-6 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
          <Terminal
            className={`absolute top-1/3 left-1/2 w-9 h-9 rotate-12 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
          <Cpu
            className={`absolute top-40 right-1/3 w-11 h-11 -rotate-45 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
          <HardDrive
            className={`absolute bottom-20 left-1/3 w-8 h-8 rotate-30 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
          <Wifi
            className={`absolute top-80 right-1/4 w-10 h-10 -rotate-12 ${
              isDarkMode ? "text-white/5" : "text-black/5"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1
                className={`text-6xl lg:text-7xl font-bold leading-tight tracking-tight transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Software
                <span
                  className={`block bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode
                      ? "from-white to-gray-300"
                      : "from-gray-900 to-gray-600"
                  }`}
                >
                  Engineer
                </span>
              </h1>
              <p
                className={`text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hi, I'm Dan. I design and deliver scalable, high-performance
                systems that drive innovation and solve complex technical
                challenges.
              </p>
              <div
                className={`flex items-center justify-center space-x-2 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <MapPin size={16} />
                <span className="font-light">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className={`px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white hover:bg-gray-100 text-gray-900"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => scrollToSection("contact")}
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://github.com/danlewismuriuki"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/danlewismuriuki"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:danlewismuriuki2@gmail.com"
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style About Section */}
      <section
        id="about"
        className={`py-24 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        {/* Background Icons - Adjusted positioning and opacity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Database
            className={`absolute top-10 right-32 w-16 h-16 rotate-12 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
          <Server
            className={`absolute bottom-32 left-32 w-12 h-12 -rotate-12 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
          <Cloud
            className={`absolute top-1/2 right-10 w-10 h-10 rotate-45 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
          <Terminal
            className={`absolute bottom-10 right-1/3 w-14 h-14 -rotate-6 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
          <Code
            className={`absolute top-20 left-10 w-8 h-8 rotate-30 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2
              className={`text-5xl font-bold mb-6 tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto font-light leading-relaxed transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Results-driven Software Engineer with proven expertise in Python,
              JavaScript, and PostgreSQL, passionate about solving complex
              technical challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3
                className={`text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                My Journey
              </h3>
              <div
                className={`space-y-4 font-light leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <p>
                  Started my journey as a Python developer at Gebeya, where I
                  discovered my passion for building scalable backend systems.
                  Over 4+ years, I've evolved into a founding engineer who
                  architects solutions that drive business growth and
                  innovation.
                </p>
                <p>
                  Currently leading backend development at Witz Africa, where
                  I'm building supply chain solutions that bridge the gap
                  between suppliers and vendors across Africa. I believe in
                  clean code practices, system reliability, and mentoring teams
                  to achieve excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Systems Built" },
                { number: "4+", label: "Years Experience" },
                { number: "10+", label: "Team Members Mentored" },
                { number: "40%", label: "Performance Improvement" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 ${
                    isDarkMode ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold mb-2 tracking-tight transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div
            className={`rounded-3xl p-8 shadow-sm mb-16 border transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="text-center mb-8">
              <h3
                className={`text-3xl font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Technical Skills
              </h3>
              <p
                className={`max-w-2xl mx-auto transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Expertise across the full technology stack with focus on backend
                development and system architecture
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Skills Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Backend Skills */}
                <div className="space-y-4">
                  <h4
                    className={`font-semibold flex items-center transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <Server
                      size={18}
                      className={`mr-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                    Backend Development
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: "Python", level: 95 },
                      { name: "Node.js", level: 85 },
                      { name: "FastAPI", level: 90 },
                      { name: "Flask", level: 85 },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span
                          className={`text-sm font-medium transition-colors duration-300 ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-16 rounded-full h-1.5 ${
                              isDarkMode ? "bg-gray-600" : "bg-gray-200"
                            }`}
                          >
                            <div
                              className={`h-1.5 rounded-full transition-all duration-1000 ${
                                isDarkMode ? "bg-gray-300" : "bg-gray-600"
                              }`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span
                            className={`text-xs w-8 transition-colors duration-300 ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frontend Skills */}
                <div className="space-y-4">
                  <h4
                    className={`font-semibold flex items-center transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <Code
                      size={18}
                      className={`mr-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                    Frontend Development
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: "TypeScript", level: 90 },
                      { name: "React", level: 85 },
                      { name: "Next.js", level: 82 },
                      { name: "JavaScript", level: 90 },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span
                          className={`text-sm font-medium transition-colors duration-300 ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-16 rounded-full h-1.5 ${
                              isDarkMode ? "bg-gray-600" : "bg-gray-200"
                            }`}
                          >
                            <div
                              className={`h-1.5 rounded-full transition-all duration-1000 ${
                                isDarkMode ? "bg-gray-300" : "bg-gray-600"
                              }`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span
                            className={`text-xs w-8 transition-colors duration-300 ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data & Infrastructure */}
                <div className="space-y-4">
                  <h4
                    className={`font-semibold flex items-center transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <Database
                      size={18}
                      className={`mr-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                    Data & Infrastructure
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: "PostgreSQL", level: 88 },
                      { name: "MongoDB", level: 82 },
                      { name: "AWS", level: 82 },
                      { name: "Docker", level: 78 },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span
                          className={`text-sm font-medium transition-colors duration-300 ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-16 rounded-full h-1.5 ${
                              isDarkMode ? "bg-gray-600" : "bg-gray-200"
                            }`}
                          >
                            <div
                              className={`h-1.5 rounded-full transition-all duration-1000 ${
                                isDarkMode ? "bg-gray-300" : "bg-gray-600"
                              }`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span
                            className={`text-xs w-8 transition-colors duration-300 ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Technologies */}
              <div
                className={`border-t pt-6 transition-colors duration-300 ${
                  isDarkMode ? "border-gray-600" : "border-gray-100"
                }`}
              >
                <h4
                  className={`font-semibold mb-4 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Additional Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "GraphQL",
                    "Redis",
                    "Kubernetes",
                    "CI/CD",
                    "REST APIs",
                    "Microservices",
                    "WebSocket",
                    "JWT/OAuth",
                    "Git",
                    "Linux",
                    "Nginx",
                    "Apache Kafka",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                        isDarkMode
                          ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div
            className={`rounded-3xl p-12 shadow-sm transition-colors duration-300 ${
              isDarkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <h3
              className={`text-3xl font-semibold text-center mb-12 tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Certifications & Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-colors duration-300 ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      isDarkMode ? "bg-gray-400" : "bg-gray-400"
                    }`}
                  ></div>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {cert}
                  </span>
                </div>
              ))}
            </div>
            <div
              className={`mt-8 p-6 rounded-xl transition-colors duration-300 ${
                isDarkMode ? "bg-gray-600" : "bg-gray-50"
              }`}
            >
              <h4
                className={`font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Bachelor of Informatics and Computer Science
              </h4>
              <p
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Strathmore University, Nairobi, Kenya • 2021
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style Experience Section */}
      <section
        id="experience"
        className={`py-24 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2
              className={`text-5xl font-bold mb-6 tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Experience
            </h2>
            <p
              className={`text-xl font-light transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A journey of growth, innovation, and impactful contributions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 hover:shadow-lg transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="space-y-2">
                    <h3
                      className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      <Calendar size={14} className="mr-2" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p
                  className={`mb-6 font-light leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {exp.description}
                </p>

                <div className="space-y-4">
                  <h4
                    className={`font-semibold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Key Achievements
                  </h4>
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            isDarkMode ? "bg-gray-500" : "bg-gray-400"
                          }`}
                        ></div>
                        <span
                          className={`font-light leading-relaxed transition-colors duration-300 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple-style Projects Carousel Section */}
      <section
        id="projects"
        className={`py-24 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        {/* Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Cpu
            className={`absolute top-20 left-20 w-12 h-12 rotate-12 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
          <HardDrive
            className={`absolute bottom-30 right-10 w-10 h-10 -rotate-12 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
          <Wifi
            className={`absolute top-60 right-1/3 w-14 h-14 rotate-45 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
          <Server
            className={`absolute bottom-10 left-1/3 w-8 h-8 -rotate-30 ${
              isDarkMode ? "text-white/2" : "text-black/2"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2
              className={`text-5xl font-bold mb-6 tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Projects
            </h2>
            <p
              className={`text-xl font-light transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Showcasing innovative software solutions and system architecture
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div
                      className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 max-w-4xl mx-auto ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      }`}
                    >
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <h3
                            className={`text-3xl font-semibold mb-4 tracking-tight transition-colors duration-300 ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {project.title}
                          </h3>
                          <p
                            className={`mb-6 font-light leading-relaxed text-lg transition-colors duration-300 ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                  isDarkMode
                                    ? "bg-gray-600 text-gray-200"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex space-x-4">
                            <Button
                              variant="outline"
                              className={`flex-1 rounded-full py-3 transition-colors duration-300 ${
                                isDarkMode
                                  ? "border-gray-600 text-gray-300 hover:bg-gray-600"
                                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                              }`}
                              onClick={() =>
                                window.open(project.github, "_blank")
                              }
                            >
                              <Github size={16} className="mr-2" />
                              Code
                            </Button>
                            <Button
                              className={`flex-1 rounded-full py-3 transition-colors duration-300 ${
                                isDarkMode
                                  ? "bg-white hover:bg-gray-100 text-gray-900"
                                  : "bg-gray-900 hover:bg-gray-800 text-white"
                              }`}
                              onClick={() =>
                                window.open(project.live, "_blank")
                              }
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Demo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10 ${
                isDarkMode
                  ? "bg-gray-700/90 hover:bg-gray-700 text-gray-300 hover:text-white"
                  : "bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10 ${
                isDarkMode
                  ? "bg-gray-700/90 hover:bg-gray-700 text-gray-300 hover:text-white"
                  : "bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900"
              }`}
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? isDarkMode
                        ? "bg-white w-8"
                        : "bg-gray-900 w-8"
                      : isDarkMode
                      ? "bg-gray-600 hover:bg-gray-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style Contact Section */}
      <section
        id="contact"
        className={`py-24 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2
              className={`text-5xl font-bold mb-6 tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {"Let's Connect"}
            </h2>
            <p
              className={`text-xl font-light transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ready to build something amazing together? {"Let's"} discuss your
              next software project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "danlewismuriuki2@gmail.com",
                    color: isDarkMode
                      ? "bg-blue-900 text-blue-300"
                      : "bg-blue-50 text-blue-600",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+254746106100",
                    color: isDarkMode
                      ? "bg-green-900 text-green-300"
                      : "bg-green-50 text-green-600",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Nairobi, Kenya",
                    color: isDarkMode
                      ? "bg-orange-900 text-orange-300"
                      : "bg-orange-50 text-orange-600",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 ${contact.color} rounded-2xl flex items-center justify-center transition-colors duration-300`}
                    >
                      <contact.icon size={20} />
                    </div>
                    <div>
                      <div
                        className={`font-semibold transition-colors duration-300 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {contact.label}
                      </div>
                      <div
                        className={`font-light transition-colors duration-300 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 pt-8">
                <Button
                  className={`rounded-full px-6 transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-white hover:bg-gray-100 text-gray-900"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                  onClick={() =>
                    window.open("https://github.com/danlewismuriuki", "_blank")
                  }
                >
                  <Github size={18} className="mr-2" />
                  GitHub
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 text-white"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/danlewismuriuki",
                      "_blank"
                    )
                  }
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <div
              className={`rounded-3xl p-8 transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      First Name
                    </label>
                    <Input
                      className={`rounded-xl focus:ring-0 transition-colors duration-300 ${
                        isDarkMode
                          ? "border-gray-600 focus:border-gray-500 bg-gray-700 text-white"
                          : "border-gray-200 focus:border-gray-400 bg-white"
                      }`}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Last Name
                    </label>
                    <Input
                      className={`rounded-xl focus:ring-0 transition-colors duration-300 ${
                        isDarkMode
                          ? "border-gray-600 focus:border-gray-500 bg-gray-700 text-white"
                          : "border-gray-200 focus:border-gray-400 bg-white"
                      }`}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <Input
                    className={`rounded-xl focus:ring-0 transition-colors duration-300 ${
                      isDarkMode
                        ? "border-gray-600 focus:border-gray-500 bg-gray-700 text-white"
                        : "border-gray-200 focus:border-gray-400 bg-white"
                    }`}
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <Input
                    className={`rounded-xl focus:ring-0 transition-colors duration-300 ${
                      isDarkMode
                        ? "border-gray-600 focus:border-gray-500 bg-gray-700 text-white"
                        : "border-gray-200 focus:border-gray-400 bg-white"
                    }`}
                    placeholder="Software Development Project"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <Textarea
                    className={`rounded-xl focus:ring-0 transition-colors duration-300 ${
                      isDarkMode
                        ? "border-gray-600 focus:border-gray-500 bg-gray-700 text-white"
                        : "border-gray-200 focus:border-gray-400 bg-white"
                    }`}
                    placeholder="Tell me about your software requirements..."
                    rows={5}
                  />
                </div>
                <Button
                  className={`w-full py-4 rounded-xl font-medium transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-white hover:bg-gray-100 text-gray-900"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style Footer */}
      <footer
        className={`py-16 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <div
              className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dan Lewis Muriuki
            </div>
            <p
              className={`font-light max-w-2xl mx-auto transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Software Engineer • Building scalable systems that drive
              innovation across Africa
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, url: "https://github.com/danlewismuriuki" },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/danlewismuriuki",
                },
                { icon: Mail, url: "mailto:danlewismuriuki2@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white"
                      : "bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div
              className={`border-t pt-8 transition-colors duration-300 ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <p
                className={`font-light transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                © {new Date().getFullYear()} Dan Lewis Muriuki. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
