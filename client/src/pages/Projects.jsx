import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Projects = () => {
    return (
      <>
      <div className="bg-[#2D4966] h-auto flex flex-col ">
         <Navbar />
         <div className="flex justify-center my-6 text-[#ff8828] font-bold text-3xl">
          <h1 className="">Projects</h1>
         </div>
         <div className="grid grid-cols-3 grid-flow-row gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 w-auto h-auto  mb-10 mx-auto p-10 ">
          <div className="h-[250px] w-[250px] flex flex-col justify-between">
            <div className="h-[200px] bg-[url('/assets/DesertHotel.jpg')] bg-cover"></div>
            <div>
            <p className="text-white text-2xl">Desert hotel</p>
            </div>
          </div>
          <div className="h-[250px] w-[250px] flex flex-col justify-between">
            <div className="h-[200px] bg-[url('/assets/hutHouse.jpg')] bg-cover"></div>
            <div>
            <p className="text-white text-2xl">The Hut Mansion</p>
            </div>
          </div>
          <div className="h-[250px] w-[250px] flex flex-col justify-between">
            <div className="h-[200px] bg-[url('/assets/woodsHouse.jpg')] bg-cover bg-center"></div>
            <div>
            <p className="text-white text-2xl">The Woods Mansion</p>
            </div>
          </div>
          <div className="h-[250px] w-[250px] flex flex-col justify-between">
            <div className="h-[200px] bg-[url('/assets/grayHouse.jpg')] bg-cover bg-center"></div>
            <div>
            <p className="text-white text-2xl">The Grey House</p>
            </div>
          </div>
          <div className="h-[250px] w-[250px] flex flex-col justify-between">
            <div className="h-[200px] bg-[url('/assets/blueTower.jpg')] bg-cover bg-center"></div>
            <div>
            <p className="text-white text-2xl">The Blue Tower</p>
            </div>
          </div>
         </div>
         <Footer />

      </div>
        
      </>
    )
  }
  
  export default Projects;
  