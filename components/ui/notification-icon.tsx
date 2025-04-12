import type { ReactNode } from "react"

interface NotificationIconProps {
  icon: ReactNode
  count?: number
  badgeColor?: string
}

export function NotificationIcon({ icon, count, badgeColor = "bg-red-500" }: NotificationIconProps) {
  return (
    <div className="relative">
      {icon}
      {count !== undefined && (
        <div
          className={`absolute -top-2 -right-2 w-5 h-5 ${badgeColor} rounded-full border-2 border-white flex items-center justify-center`}
        >
          <span className="text-white text-[10px] font-bold">{count}</span>
        </div>
      )}
    </div>
  )
}
