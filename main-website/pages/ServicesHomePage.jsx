import Categories from "../src/Components/Services/Categories";
import ServiceListings from "../src/Components/Services/ServiceListings";
import ServicesHero from "../src/Components/Services/ServicesHero";

function ServicesHomePage() {
  return (
    <section>
      <ServicesHero />
      <Categories />
      <ServiceListings />
    </section>
  );
}

export default ServicesHomePage;
