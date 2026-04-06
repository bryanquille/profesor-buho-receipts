import type React from "react"
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"

type MainLayoutPropsTypes = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutPropsTypes) {
  return (
    <div className="w-full max-w-5xl min-h-screen mx-auto flex flex-col items-center gap-4 bg-primary-neutral dark:bg-zinc-900">
      <Header />
      <main className="w-11/12 max-w-5xl flex flex-col justify-center items-center gap-4 md:flex-row md:items-start">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout