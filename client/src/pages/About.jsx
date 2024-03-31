import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const About = () => {
    return (
      <div className=" w-full h-auto flex flex-col justify-between bg-[url('/assets/blueGlassHouse.jpg')] bg-cover bg-no-repeat bg-center absolute">
                <div className="bg-[#00000066]">

          <Navbar />
          <div className="mt-[6%] mb-8 flex justify-center text-[#ff8828] text-3xl font-bold">
            <h1>About</h1>
          </div>
          
          <div className="flex flex-col justify-center bg-[#00000066] mb-[10%] mx-[10%] p-10 text-white  ">
            <p>Welcome to BB Agency, where architectural excellence meets innovative design solutions. We are a dynamic architecture agency dedicated to crafting spaces that inspire, function, and elevate the human experience.</p><br />
            <p>At BB Agency, we believe that architecture is more than just buildings; it's a reflection of culture, a fusion of art and science, and a catalyst for positive change. With a passionate team of architects, designers, and visionaries, we strive to push the boundaries of conventional design to create spaces that resonate with their surroundings and inhabitants.</p><br />
            <p>Our approach to architecture is deeply rooted in collaboration and client-centricity. We understand that each project is unique, with its own set of challenges and opportunities. That's why we work closely with our clients, listening attentively to their needs, aspirations, and visions. From conceptualization to completion, we guide our clients through every step of the design process, ensuring that their dreams are brought to life with precision and creativity.</p><br />
            <p>At BB Agency, we are committed to sustainability and environmental stewardship. We integrate sustainable practices and technologies into our designs, minimizing our ecological footprint while maximizing energy efficiency and resource utilization. Our dedication to sustainability not only benefits the environment but also creates healthier, more resilient spaces for future generations to enjoy.</p><br />
            <p>Whether it's a commercial development, residential project, or community initiative, BB Agency is dedicated to delivering architectural solutions that are both functional and inspiring. With a portfolio spanning diverse sectors and scales, we have the expertise and versatility to tackle any design challenge with confidence and creativity.</p>
        
          </div>
          
          <Footer />
          </div>
      </div>
    )
  }
  
  export default About;
  