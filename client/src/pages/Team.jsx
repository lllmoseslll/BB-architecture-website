import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Team = () => {
    return (
      <div className="flex flex-col justify-center w-full h-auto bg-[#2D4966]">
          <div className="w-full h-auto bg-[url('/assets/greenHouse.jpg')] bg-cover bg-center ">
            <div className="bg-[#000000cc]">
            <Navbar />
            <div className="flex justify-center mt-20 mb-6">
                <h1 className="text-3xl text-[#ff8828] font-bold">Our Team</h1>
              </div> 
            <div className="flex justify-center py-[5%]">
            
            <div className=" grid max-sm:grid-cols-1 max-md:grid-cols-1  grid-cols-2 grid-flow-row gap-48 w-auto">
             <div className="h-[400px] w-[300px] max-sm:h-[400px] w-[300px];">
              <div className="bg-[url('/assets/girlinHejab.jpg')] bg-cover bg-center rounded-full h-[300px] w-full"></div>
              <div className="flex justify-center text-white text-2xl font-bold my-10"><h1>Manager </h1></div>
             </div>
             <div className="h-[400px] w-[300px] max-sm:h-[400px] w-[300px];">
              <div className="bg-[url('/assets/engineerYellowHelmate.jpg')] bg-cover bg-left rounded-full h-[300px] w-full"></div>
              <div className="flex justify-center text-white text-2xl font-bold my-10"><h1>Engineer </h1></div>
             </div>
            </div>
            
          </div>


          </div>
          </div>

          <div className="flex justify-center py-[5%] my-40">
            
            <div className=" grid max-sm:grid-cols-1 max-md:grid-cols-2  grid-cols-3 grid-flow-row gap-40 w-auto">
             <div className="h-[200px] w-[200px] max-sm:h-[300px] w-[200px];">
              <div className="bg-[url('/assets/engineerinGlasses.jpg')] bg-cover bg-center rounded-full h-[200px] w-full"></div>
              <div className="flex justify-center text-white text-2xl font-bold my-10"><h1>Researcher </h1></div>
             </div>

             <div className="h-[200px] w-[200px] max-sm:h-[300px] w-[200px];">
              <div className="bg-[url('/assets/girlWhitebackgound.jpg')] bg-cover bg-center rounded-full h-[200px] w-full"></div>
              <div className="flex justify-center text-white text-2xl font-bold my-10"><h1>Marketing Agent </h1></div>
             </div>
           

            <div className="h-[200px] w-[200px] max-sm:h-[300px] w-[200px];">
              <div className="bg-[url('/assets/engineerWorking.jpg')] bg-cover bg-center rounded-full h-[200px] w-full"></div>
              <div className="flex justify-center text-white text-2xl font-bold my-10"><h1>Engineer </h1></div>
             </div>
    
             </div>
          </div>
          <Footer />
        
      </div>
    )
  }
  
  export default Team;
  