import { CardSection, CarePage, Customers, Footer, GallerySection, HeroSection, MainContact, MeetDoctors, Navbar, ServicesSection } from "../../components/ComponentExport";
const HomePage = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection />
      <ServicesSection />
      <MeetDoctors />
      <GallerySection />
      <Customers />
      <CarePage />
      <MainContact />
      <Footer />
    </>
  );
};

export default HomePage;
