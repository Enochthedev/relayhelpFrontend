// Replace the 404 page with a simple redirect to the not-found page

import { notFound } from "next/navigation"

export default function Custom404Page() {
  notFound()
}
