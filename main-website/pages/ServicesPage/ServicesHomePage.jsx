import Categories from "../../src/Components/Services/Categories";
import Header from "../../src/Components/Services/Header";
import ServiceListings from "../../src/Components/Services/ServiceListings";
import ServicesHero from "../../src/Components/Services/ServicesHero";

function ServicesHomePage() {
  return (
    <div className="relative">
      <Header />
      <section>
        <ServicesHero />
        <Categories />
        <ServiceListings />
      </section>
    </div>
  );
}

export default ServicesHomePage;
