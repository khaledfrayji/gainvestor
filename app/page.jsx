// app/page.tsx
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Howitworks from "../components/Howitworks ";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Marquee from "../components/Marquee";
import Ceosection from "../components/Ceosection";
export default function Page() {
  return (
    <>
      <Hero />
      <Marquee/>
      <Howitworks/>
     <Testimonials/>
     <Ceosection/>
     <Faq/>
      <Quote/>
    </>
  );
}
