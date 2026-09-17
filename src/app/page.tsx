import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { Catalog } from "@/components/catalog";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Catalog />
      <Pricing />
      <FinalCta />
    </>
  );
}