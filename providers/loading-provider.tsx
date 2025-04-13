"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { PageLoader } from "@/components/ui/loaders/page-loader"
import { RouteProgress } from "@/components/ui/loaders/route-progress"
import { Suspense } from "react"

type LoadingContextType = {
  showLoader: () => void
  hideLoader: () => void
  isLoading: boolean
}

const LoadingContext = createContext<LoadingContextType>({
  showLoader: () => {},
  hideLoader: () => {},
  isLoading: false,
})

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  const showLoader = () => setIsLoading(true)
  const hideLoader = () => setIsLoading(false)

  return (
    <LoadingContext.Provider value={{ showLoader, hideLoader, isLoading }}>
      <Suspense fallback={null}>
        <RouteProgress />
      </Suspense>
      <PageLoader isLoading={isLoading} />
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
