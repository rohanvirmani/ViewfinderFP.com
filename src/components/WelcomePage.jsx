// src/components/WelcomePage.jsx
import '../styles/pageStyles.css';

export default function WelcomePage() {
  return (
    <div className="page-wrapper welcome-page">
      <video 
        className="background-video object-cover w-full h-full" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/videos/VFP Home Page - Loop.mp4" type="video/mp4" />
      </video>
      <div className="welcome-page px-4 md:px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl mx-auto mt-[80px] md:mt-[130px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-bebas">
            Viewfinder Film Productions
          </h1>
          <p className="text-base md:text-lg lg:text-xl mx-auto font-bebas">
            Viewfinder Film Productions (VFP) Inc. is a marketing & production company dedicated to promoting the work of South Asian creators around the world.
          </p>
        </div>
      </div>
    </div>
  );
}