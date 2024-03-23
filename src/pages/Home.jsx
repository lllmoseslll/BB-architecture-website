import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    
    <div className=" w-full h-auto flex flex-col bg-[url('./src/assets/blueTower.jpg')] bg-cover bg-no-repeat bg-center absolute  ">
      <div className="h-auto bg-[#00000066]">
      <Navbar />
        <div className="mt-[200px] mb-[100px] flex justify-start">
          <div className=" w-[60%]  max-md:w-[90%]   pl-24">
            <h1 className="text-[#ff8828] drop-shadow-2xl  font-bold text-3xl p-2">Welcome to BB Architecture - Where Vision Meets Reality</h1>
            <p className="text-white drop-shadow-2xl p-2">At BB Architecture, we believe in the transformative power of design. From concept to creation, we are dedicated to bringing your vision to life, ensuring every detail reflects your unique story and aspirations</p>
          </div>
        </div>
        <Footer />

      </div>
        
      
    </div>
    
  )
}

export default Home;
