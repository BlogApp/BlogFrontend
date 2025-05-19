import AboutUs from "./about-us/about-us";
import CTA from "./cta/cta";
import FAQ from "./faq/faq";
import Features from "./features/features";
import Collaboration from "./folder/folder";
import Footer from "./footer/footer";
import Header from "./header/header";
import Hero from "./hero/hero";

export default function LandingPage() {
    return(
        <>
        <Header/>
        <Hero/>
        <Features/>
        <Collaboration/>
        <FAQ/>
        <CTA/>
        <AboutUs/>
        <Footer/>
        </>
    )
}