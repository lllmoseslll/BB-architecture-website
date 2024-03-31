import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#2D4966] w-full h-auto">
      <Navbar />
        <div className="flex justify-center my-20 text-3xl font-bold text-[#ff8828]">
          <h1>Contact</h1>
        </div>
        <div className="flex justify-center">
        <div className=" h-auto w-auto   md:flex flex-col; mx-[5%] mb-20">
          <div className="w-[350px] h-[420px]  md:w-[400px] md:h-[520px] lg:w-[460px] lg:h-[720px] bg-[#00000066]">
            <div className="text-white  p-4 flex flex-col h-full">
              <div className="my-5 md:my-8 md:text-2xl lg:my-10 lg:text-3xl ml-2">
                    <h1>RECRUITMENT:</h1>
                    <h2>jobs@bbarchitects.com</h2>
              </div>
           
              <div className="my-5 md:my-8 md:text-2xl lg:my-10 lg:text-3xl ml-2">
              <h1>ANY OTHER MATTERS:</h1>
              <h2>touch@bbarchitects.com</h2>
              </div>
              <div className="my-5 md:my-8 md:text-2xl lg:my-10 lg:text-3xl ml-2">
              <h1>PHONE:</h1>
              <h2>(+211) 27 22 44 90 90</h2>
              </div>
            <div className="my-5 md:my-8 md:text-2xl lg:my-10 lg:text-3xl ml-2">
            <h1>ADDRESS:</h1>
            <h2>Juba, South Sudan</h2>
            </div>
            
            </div>
           
          </div>
          <div className="w-[350px] h-[420px] md:w-[400px] md:h-[520px] lg:w-[460px] lg:h-[720px] bg-[url('/assets/workingOnthePhone.jpg')] bg-cover brightness-50 bg-center ">
            <div className=""></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;