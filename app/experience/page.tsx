import Navigation from '@/components/Navigation'
import Experience from '@/components/Experience'

export const metadata = {
  title: 'Experience | Pavan V Anish',
  description: 'Professional experience and career journey of Pavan V Anish',
}

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pointer-events-none">
        <Experience />
      </main>
    </>
  )
}
