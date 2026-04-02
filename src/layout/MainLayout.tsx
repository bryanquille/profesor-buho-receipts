import type React from "react"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"

type MainLayoutPropsTypes = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutPropsTypes) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-4 bg-primary-neutral dark:bg-zinc-900">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout