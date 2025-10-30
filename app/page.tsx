import Hero from '@/app/components/Hero'
import MiningExplanation from '@/app/components/MiningExplanation'
import About from '@/app/components/About'
import Consulting from '@/app/components/Consulting'
import FutureProjects from '@/app/components/FutureProjects'
import ContactForm from '@/app/components/ContactForm'

export default function Page() {
  return (
    <>
      <Hero />
      <MiningExplanation />
      <About />
      <Consulting />
      <FutureProjects />
      <ContactForm />
    </>
  )
}

