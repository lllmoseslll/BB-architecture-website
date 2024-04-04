import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    
    <div className=" w-full m-h-screen flex flex-col bg-[url('/assets/blueTower.jpg')] bg-cover bg-no-repeat bg-center absolute  ">
      <div className="h-auto bg-[#00000066]">
      <Navbar />
        <div className="mt-[200px] max-md:mb-[200px] mb-[100px] max-sm:flex max-sm:justify-center">
          <div className="md:ml-20 w-[80%] max-sm:w-[90%]  max-md:w-[90%]   md:pl-[10%] ">
            <h1 className="my-6 text-[#ff8828] drop-shadow-2xl  font-bold text-3xl max-md:text-2xl p-2">Welcome to BB Architecture - Where Vision Meets Reality</h1>
            <p className="text-white text-2xl font-thin max-md:text-xl drop-shadow-2xl p-2">At BB Architecture, we believe in the transformative power of design. From concept to creation, we are dedicated to bringing your vision to life, ensuring every detail reflects your unique story and aspirations</p>
          </div>
        </div>
        <Footer />

      </div>
        
      
    </div>
    
  )
}

export default Home;
