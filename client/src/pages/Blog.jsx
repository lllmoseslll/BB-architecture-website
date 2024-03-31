import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Blog = () => {
  return (
    <div className="bg-[#2D4966] h-auto flex flex-col">
        <Navbar />
        <div className="flex justify-center">
          <h1 className="text-[#ff8828] text-3xl font-bold mt-6">Blogs</h1>
        </div>
        <div className="flex justify-center mb-20 my-16">
          <div className=" w-[80%] h-auto max-md:flex-col lg:flex lg:flex-wrap  ">
            <div className="p-10 lg:flex lg:justify-center max-md:w-[100%] w-[50%] h-[350px] max-lg:w-[100%] ">
              <div className="mr-2 w-[100%] lg:h-[100%] lg:w-[80%] h-[70%] bg-[url('/assets/goldenHouse.jpg')] bg-cover bg-center "></div>
              <div className=" flex justify-center flex-col text-white text-xl font-semibold">
                <h1 className="my-4 flex justify-center">The top 10 wonders of architecture</h1>
                <button className="border-4 border-[#ff8828] hover:bg-[#ff8828] rounded-xl p-2">Learn more &rArr; </button>
                </div>
            </div>

            <div className="p-10 lg:flex lg:justify-center max-md:w-[100%] w-[50%] h-[350px] max-lg:w-[100%] ">
              <div className="mr-2 w-[100%] lg:h-[100%] lg:w-[80%] h-[70%] bg-[url('/assets/greenHouse.jpg')] bg-cover bg-center "></div>
              <div className=" flex justify-center flex-col text-white text-xl font-semibold">
                <h1 className="my-4 flex justify-center">Architecture and nature 
</h1>
                <button className="border-4 border-[#ff8828] hover:bg-[#ff8828] rounded-xl p-2">Learn more &rArr; </button>
                </div>
            </div>

            

           
         



          </div>
       
        </div>

      <Footer />
    </div>
  )
}

export default Blog;
