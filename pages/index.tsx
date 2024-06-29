import React, { useEffect, useState } from "react";
import Navbar from "@/components/modules/Navbar/Navbar";
import PosterCard from "@/components/templates/index/Postercard";
import SectionApi from "@/components/templates/index/SectionApi";
import Articles from "@/components/templates/index/Articles";
import Banner from "@/components/templates/index/Banner";
import Footer from "@/components/templates/index/Footer";
import Modal from "@/components/modules/Modal/Modal";

// Example type definitions for the components
interface NavbarProps {}
interface PosterCardProps {}
interface SectionApiProps {}
interface ArticlesProps {}

// Assuming the components do not take any props, otherwise, define them accordingly
const NavbarComponent: React.FC<NavbarProps> = () => <Navbar />;
const PosterCardComponent: React.FC<PosterCardProps> = () => <PosterCard />;
const SectionApiComponent: React.FC<SectionApiProps> = () => <SectionApi />;
const ArticlesComponent: React.FC<ArticlesProps> = () => <Articles />;

const Home: React.FC = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(() => {
  // Open the modal immediately
  setIsModalOpen(true);
  // Auto-close the modal after 5000 ms
  const timer = setTimeout(() => {
    setIsModalOpen(false);
  }, 5000);

  // Cleanup the timeout on unmount
  return () => clearTimeout(timer);
}, []);
  return (
    <>
      <div className="z-50">
       
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="font-medium text-[20px]">Hello Welcome to our site.👋❤️</h2>
<hr  className="m-2"/>
<p className="mt-2  capitalize "> please turn on your vpn to get the shorten link 😉 </p>

        </Modal>
      </div>
      <NavbarComponent />
      <div className="overflow-hidden">
        <PosterCardComponent />
      </div>
      <div className="w-full h-[1500px] sm:h-[900px] bg-[var(--bg-gray-00)] relative mt-[150px]">
        <div className="absolute bg-transparent top-[calc(-84px)]  w-full">
          <SectionApiComponent />
          <div className="flex items-center w-full justify-center">
            <ArticlesComponent />
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
