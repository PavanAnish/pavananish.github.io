import Navigation from '@/components/Navigation'
import About from '@/components/About'

export const metadata = {
  title: 'About | Pavan V Anish',
  description: 'Learn more about Pavan V Anish - Engineering Student & Aspiring AI Developer',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pointer-events-none">
        <About />
      </main>
    </>
  )
}
