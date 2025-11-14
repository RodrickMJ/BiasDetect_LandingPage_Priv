import Header from '../components/organisms/Header/Header'
import Hero from '../components/organisms/Hero/Hero'
import Benefits from '../components/organisms/Benefits/Benefits'
import HowItWorks from '../components/organisms/HowItWorks/HowItWorks'
import Audience from '../components/organisms/Audience/Audience'
import BetaForm from '../components/organisms/BetaForm/BetaForm'
import Footer from '../components/organisms/Footer/Footer'

export default function Landing() {
    return (
        <>
            <Header />
            <Hero />
            <Benefits />
            <HowItWorks />
            <Audience />
            <BetaForm />
            <Footer />
        </>
    )
}