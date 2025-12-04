import AboutUsPage from "~/sections/about-us/page";
import type { Route } from "./+types/about-us";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "About Us | SV Green India - Leading Waste Management Company",
    description:
      "Discover SV Green India's journey as a GPCB-authorized waste management company. Learn about our mission, vision, and commitment to sustainable waste management solutions in Gujarat, Maharashtra, and Rajasthan.",
    url: "https://sv-green.vercel.app/about-us",
    keywords: [
      "about SV Green India",
      "waste management company",
      "GPCB authorized waste management",
      "sustainable waste solutions",
      "waste management mission",
      "environmental services company",
    ],
  });
}

export default function AboutUs() {
  return <AboutUsPage />;
}
