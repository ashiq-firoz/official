"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, Github, Linkedin, Mail, Brain, Code, Database, Cloud, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.8,
      ease: [0.21, 1.02, 0.73, 0.97],
    },
  }),
}

const projects = [
  {
    title: "Multilingual Sentiment Analysis",
    description: "A multilingual, multilabel sentiment analysis model using XLM-RoBERTa and Graph Neural Networks.",
    tech: ["Python", "PyTorch", "NLP", "GNN"],
    github: "https://github.com/ashiq-firoz/Multilingual-Multilabel-Sentiment-Analysis"
  },
  {
    title: "Microservice Behavior Predictor",
    description: "A microservice behavior prediction system utilizing Temporal Graph Neural Networks.",
    tech: ["Python", "TensorFlow", "Docker", "Kubernetes"],
    github: "https://github.com/ashiq-firoz/microservice-and-tgnn"
  },
  {
    title: "Histopathological Classifier",
    description: "A histopathological image classifier for lung cancer detection using PyTorch and ResNet50.",
    tech: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
    github: "https://github.com/ashiq-firoz/histopathological-image-classifier"
  },
  {
    title: "Full stack E-Commerce Store FAVOME",
    description: "This is a ecommerce store, with a portfolio page and a store. The payment gateway used was Razorpay, used Firebase for DB . It have live inventory management and order management.",
    tech: ["NextJS", "Tailwind CSS", "Firebase", "Razorpay"],
    github: "https://github.com/ashiq-firoz/Freelance-03-Favome-"
  }
]

const skills = [
  {
    category: "Languages & Frameworks",
    icon: Code,
    items: ["Python", "PyTorch", "TensorFlow", "React", "Next.js","NodeJS","ExpressJS","C++","Dart"]
  },
  {
    category: "AI & ML",
    icon: Brain,
    items: ["NLP", "Computer Vision", "Deep Learning", "Graph Neural Networks"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Minikube", "Istio", "Grafana", "Prometheus"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Neo4j","Firebase","Casandradb"]
  }
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const [key, setKey] = useState(0)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const id = target.hash.replace('#', '')
      const element = document.getElementById(id)
      
      if (element) {
        setActiveSection(id)
        setKey(prev => prev + 1)
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll as EventListener)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="hidden md:block">
        <NavBar />
      </div>
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/me.png"
            alt="Background"
            className="w-full h-full object-cover filter blur-[8px] scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold tracking-tight"
          >
            Ashiq Firoz
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            AI/ML Researcher • Full-Stack Dev • DevOps Enthusiast
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <a
              href="https://github.com/ashiq-firoz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://openreview.net/profile?id=~Ashiq_Firoz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashiq-firoz-30335a203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ashiqfiroz08@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about">
          <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        key={`about-${key}`}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        id="about"
        className="py-20 px-6 scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square rounded-full overflow-hidden ">
              <img
                src="/me2.png"
                alt="Ashiq Firoz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left space-y-4">
              <p className="text-lg">
                I&apos;m a passionate AI/ML researcher and full-stack developer with expertise in deep learning, computer vision, and natural language processing. I specialize in building scalable AI solutions and deploying them in production environments.
              </p>
              <p className="text-muted-foreground">
                With a strong background in both research and development, I bridge the gap between cutting-edge AI research and practical software engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        key={`skills-${key}`}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        id="skills"
        className="py-20 px-6 bg-muted/50 scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.category}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="p-6 rounded-lg bg-card border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-primary/10 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        key={`projects-${key}`}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        id="projects"
        className="py-20 px-6 scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="h-full">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-primary/10 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        key={`contact-${key}`}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        id="contact"
        className="py-20 px-6 bg-muted/50 scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" asChild>
              <a href="mailto:ashiqfiroz08@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/ashiq-firoz-30335a203/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </main>
  )
}