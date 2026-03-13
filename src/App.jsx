
import './App.css'
import PCGamesPass from "./assets/PCGamePass_2.png";
import acer from "./assets/acer-4.svg";
import monitor from "./assets/browse-popular-categories-monitors.avif";
import chromebook from "./assets/browse-popular-categories-chromebooks.avif";
import desktop from "./assets/browse-popular-categories-desktops.avif";
import laptop from "./assets/browse-popular-categories-laptops.avif";
import projectors from "./assets/browse-popular-categories-projectors.avif";
import nitro from "./assets/nitro-radeon-rx-7900-gre-an-rx7900gre-oc-01-1.avif";
import windows11 from "./assets/Windows-11.png";
import vero from "./assets/vero-family.png";
import windows11pro from "./assets/Windows-11-Pro_1.png"
function App() {


  return (
    <>
    <nav className='w-full   h-11.25  bg-black '>
      <div className='w-full h-full flex items-center justify-center  rellative'>
        <div className=' '>
        <p className='text-white  font-bold lg:block hidden  absolute left-15 top-3  '>Acer Brands</p>
        </div>
        <div className=' '>
        <p className='text-white font-bold  cursor-pointer hover:underline   '>Discover the best deals at accer shop-shop now</p>
        </div>
      </div>

    </nav>
       <header className='w-full h-20 flex items-center px-4 md:px-10'>
       <div className='w-ful h-full flex items-center gap-5  overflow-x-hidden'> 
        <button className='ml-auto lg:hidden text-2xl'>☰</button>
        <img src={acer} alt="logo" className='h-5 ' />
        <ul className='w-full hidden lg:flex list-none gap-15 font-semibold text-[20px] ml-25  '>
          <li>Store</li>
          <li>AI</li>
          <li>Products</li>
          <li>Business</li>
          <li>Education</li>
          <li>Support</li>
          <li>Events</li>
        </ul>
        
     </div>
      </header>
        <div className='w-full h-[550px] bg-black flex justify-center'>
          <img src={monitor}alt='logo' className='h-100'></img>



      </div>
      <div className='w-full h-50 flex justify-center text-center '>
        <h1 className='text-5xl mt-13 font-bold'>Browse Popular Categories</h1>
         </div>
        <div className=' w-full  grid-flow-col auto-cols-max overflow-x-auto gap-6 px-4 flex  '>
          <img src={chromebook} className='h-39'/>
          <img src={desktop} alt="logo" className='h-39' />
          <img src={monitor} alt='logo' className='h-39'/>
          <img src={projectors} alt='logo' className='h-39'/>
          <img src={laptop} alt='logo' className='h-39'/>
          <img src={nitro} alt='logo' className='h-39'></img>
      </div>     
      <div className='w-full text-center '>
        <h1 className='text-5xl flex justify-center mt-35 font-bold '>Discover More with Acer</h1>
        <div className='w-full grid px-14 mt-18  gap-9 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 overflow-x-auto'>
          <div className='w-full'>
          <img src={windows11} alt='logo' className='h-auto w-full object-cover'></img>
          <p className='text-2xl font-bold mt-5'>Windows 11</p>
          <p className='mt-3 text-lg'>Introducing Windows 11</p>
          <p className='mt-6 text-green-500 text-2xl hover:underline '>Learn More</p>
          </div>
          <div className='w-full'>
          <img src={PCGamesPass} alt='logo' className='h-auto w-full object-cover'></img>
          <p className='text-2xl font-bold mt-5'>PC GAME PASS</p>
          <p className='mt-3 text-lg'>Three-month trial included with your<br></br> new Acer laptop.</p>
          <p className='mt-6 text-green-500 text-2xl hover:underline'>Learn More</p>
          </div>
          <div className='w-full'>
            <img src={vero} alt='logo' className='h-auto w-full object-cover'></img>
            <p className='mt-5 text-2xl font-bold'>Acer Vero</p>
            <p className='mt-3 text-lg'>Green PC Products</p>
            <p className='mt-6 text-green-500 text-2xl hover:underline'>Learn More</p>
          </div>
          <div className='w-full'>
            <img src={windows11pro}alt='logo' className='h-auto w-full object-cover'></img>
            <p className='text-2xl font-bold mt-5'>Windows 11 Pro</p>
            <p className='mt-3 text-lg'>Windows 11 Pro for Acer business<br></br> laptops</p>
            <p className='mt-6 text-green-500 text-2xl hover:underline'>Learn More</p>
          </div>
        </div>
      </div>
      <div className='w-full mt-6  '>
        <button className='w-full h-10 hover:bg-gray-300'>Back To Top</button>
      </div>
      <footer className='w-full'>
        <div className='w-full  hidden xl:grid grid-cols-5 gap-25 px-15 py-10'>
          <div>
            <h1 className='font-semibold text-2xl  '>Products</h1>
            <ul className='text-gray-700 space-y-4 text-lg mt-4'>
              <li>laptops</li>
              <li>Desktops</li>
              <li>Accer Chromebooks</li>
              <li>Tablets and Phones</li>
              <li>Monitors</li>
              <li>Projectors</li>
              <li>Digital Signage</li>
              <li>Electronics & Accessories</li>
              <li>Networking</li>
              <li>Mobility</li>
              <li>Handheld Gaming</li>
              <li>Appliances</li>
              <li>Sustainable Products</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold text-2xl'>Support</h1>
            <ul className='text-gray-700 space-y-4 text-lg mt-4'>
              <li>Acer Id</li>
              <li>Register a Product</li>
              <li>Accer Community</li>
              <li>Drivers and Mannuals</li>
              <li>Acer Answers </li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div>
          <h1 className='font-semibold text-2xl'>Resources</h1>
          <ul className='text-gray-700 space-y-4 text-lg mt-4'>
            <li>Acer Corner</li>
            <li>Acer Global Account Portals</li>
            <li>Find a Store</li>
            <li>Acer Technologies</li>
            <li>Mcaffe</li>
          </ul>
          </div>
          <div>
            <h1 className='font-semibold text-2xl'>About Acer</h1>
            <ul className='text-gray-700 space-y-4 text-lg mt-4'>
              <li>Contact Us</li>
              <li>Investor Relation</li>
              <li>Press</li>
              <li>Awards</li>
              <li>Events</li>
            </ul>
            <h1 className='font-semibold text-2xl mt-10'>Sustainability</h1>
            <ul className='text-gray-700 space-y-4 text-lg mt-4'>
              <li>Corporate social Responsibility</li>
              <li>Product Carbon Footprint</li>
              <li>Project Humanity</li>
              <li>Earthion</li>
            </ul>
            </div>
             </div>
             <div className="block xl:hidden">
    <div className="border-b px-4 py-4">
      <h2 className="text-xl font-semibold">Products</h2>
      
    </div>

    <div className="border-b px-4 py-4">
      <h2 className="text-xl font-semibold">Support</h2>
  
    </div>

    <div className="border-b px-4 py-4">
      <h2 className="text-xl font-semibold">Resources</h2>
      
    </div>

    <div className="border-b px-4 py-4">
      <h2 className="text-xl font-semibold">About Acer</h2>
    
    </div>

    <div className="border-b px-4 py-4">
      <h2 className="text-xl font-semibold">Sustainability</h2>
   
    </div>
  </div>
       





      </footer>
    </>
  )
}

export default App
