import Navigation from '@/components/Navigation'
import ProjectsGrid from '@/components/ProjectsGrid'

export const metadata = {
  title: 'Projects | Pavan V Anish',
  description: 'Collection of projects, tools, and experiments by Pavan V Anish',
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pointer-events-none">
        <ProjectsGrid />
      </main>
    </>
  )
}
