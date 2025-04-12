"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Rocket, Star } from "lucide-react"

export default function AboutTimeline() {
  const timelineItems = [
    {
      date: "October 2023",
      title: "The Idea",
      description: "Frustrated with existing tools, we sketched the first version of RelayHelp.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      color: "#ED1C24",
    },
    {
      date: "December 2023",
      title: "First Test",
      description: "Built an MVP and tested it with 5 startup founders in our network.",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "#E14B32",
    },
    {
      date: "February 2024",
      title: "Waitlist",
      description: "Opened our waitlist and got 500+ signups in the first week.",
      icon: <Star className="h-6 w-6 text-white" />,
      color: "#F05E23",
    },
    {
      date: "April 2024",
      title: "Launch",
      description: "Officially launched RelayHelp to the public.",
      icon: <Rocket className="h-6 w-6 text-white" />,
      color: "#F7931E",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">Our Journey</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to launch, the story of RelayHelp.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:translate-x-px"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div key={item.title} className="relative mb-12 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-gray-200 transform -translate-x-1/2 flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                    whileInView={{
                      scale: [1, 1.5, 1],
                      transition: {
                        duration: 1,
                        repeat: 1,
                        repeatType: "reverse",
                        delay: index * 0.2 + 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-2"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.date}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Icon (only visible on mobile) */}
                <div className="md:hidden flex-shrink-0 ml-12">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Icon (only visible on desktop) */}
                <motion.div
                  className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? "md:order-first" : ""
                  }`}
                  style={{ backgroundColor: item.color }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 15px ${item.color}80`,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.icon}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
