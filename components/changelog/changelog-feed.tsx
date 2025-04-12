"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { changelogData } from "./changelog-data"

// Type definitions
type ChangelogCategory = "Feature" | "Fix" | "AI" | "UI" | "All"

export default function ChangelogFeed() {
  const [selectedCategory, setSelectedCategory] = useState<ChangelogCategory>("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter changelog items based on selected category and search query
  const filteredItems = changelogData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Group changelog items by month and year
  const groupedItems = filteredItems.reduce(
    (groups, item) => {
      const date = new Date(item.date)
      const monthYear = `${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`

      if (!groups[monthYear]) {
        groups[monthYear] = []
      }

      groups[monthYear].push(item)
      return groups
    },
    {} as Record<string, typeof changelogData>,
  )

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <FilterButton label="All" active={selectedCategory === "All"} onClick={() => setSelectedCategory("All")} />
            <FilterButton
              label="Features"
              active={selectedCategory === "Feature"}
              onClick={() => setSelectedCategory("Feature")}
            />
            <FilterButton
              label="Fixes"
              active={selectedCategory === "Fix"}
              onClick={() => setSelectedCategory("Fix")}
            />
            <FilterButton label="AI" active={selectedCategory === "AI"} onClick={() => setSelectedCategory("AI")} />
            <FilterButton label="UI" active={selectedCategory === "UI"} onClick={() => setSelectedCategory("UI")} />
          </div>

          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search updates..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20 focus:border-[#ED1C24]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Changelog feed */}
        <div className="max-w-4xl mx-auto">
          {Object.keys(groupedItems).length > 0 ? (
            Object.entries(groupedItems).map(([monthYear, items]) => (
              <div key={monthYear} className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[#ED1C24]" />
                  {monthYear}
                </h2>

                <div className="space-y-8">
                  {items.map((item, index) => (
                    <ChangelogItem key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No updates found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Filter button component
function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active ? "bg-[#ED1C24] text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {label}
    </motion.button>
  )
}

// Changelog item component
function ChangelogItem({ item, index }: { item: (typeof changelogData)[0]; index: number }) {
  const categoryColors = {
    Feature: "bg-green-100 text-green-800",
    Fix: "bg-blue-100 text-blue-800",
    AI: "bg-purple-100 text-purple-800",
    UI: "bg-amber-100 text-amber-800",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[item.category as keyof typeof categoryColors]}`}
            >
              {item.category}
            </span>
            <span className="text-sm text-gray-500">{item.date}</span>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>

          {item.link && (
            <Link
              href={item.link}
              className="inline-flex items-center text-sm font-medium text-[#ED1C24] hover:text-[#ED1C24]/80"
            >
              Learn more
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>

        {item.image && (
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
