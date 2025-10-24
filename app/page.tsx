// app/page.tsx
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Howitworks from "../components/Howitworks ";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
export default function Page() {
  return (
    <>
      <Hero />
      <Howitworks/>
     <Testimonials/>
     <Faq/>
      <Quote/>
    </>
  );
}
