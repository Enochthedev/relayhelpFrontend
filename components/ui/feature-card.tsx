import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  floatEffect?: string
}

export function FeatureCard({
  title,
  icon,
  children,
  className = "",
  hoverEffect = true,
  floatEffect = "",
}: FeatureCardProps) {
  return (
    <div
      className={`
      ${hoverEffect ? "transform transition-all duration-500 hover:-translate-y-2" : ""}
      ${floatEffect}
    `}
    >
      <div className={`bg-white rounded-xl shadow-xl p-4 ${className}`}>
        <div className="flex items-center gap-3 mb-3">
          {icon && <div>{icon}</div>}
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  )
}
