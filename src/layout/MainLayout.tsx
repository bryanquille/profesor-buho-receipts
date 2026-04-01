import type React from "react"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"

type MainLayoutPropsTypes = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutPropsTypes) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-primary-neutral dark:bg-zinc-900">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout