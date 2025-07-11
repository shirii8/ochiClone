import React from "react";

function Features() {
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl">
      <div className='text-6xl font-["Neue_Montreal"] m-2 p-20'>
        Featured Projects
      </div>
      <div className="line border-t-[1px] border-zinc-700 mt-2"></div>
       <div className="cards p-20 w-full flex gap-10">
          <div className="card w-1/2 h-[80vh] ">
            <div className="text px-20 mb-10">
              <span className=" text-zinc-100 flex gap-10">
                SALIENCE LABS{" "} <div className="flex justify-center w-4 mt-1 h-4 rounded-full bg-zinc-100"></div>
              </span>
            </div>
            <img
              className="rounded-xl"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              alt=""
            />

            <div className="text mb-10 flex gap-4 m-4">
              <button className="border border-zinc-100 px-4 py-2 rounded-3xl text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 transition duration-3000">
                BRAND IDENTITY
              </button>
              <button className="border border-white px-4 py-2 rounded-3xl text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900  transition duration-3000">
                PITCH DECK
              </button>
            </div>
          </div>

          <div className="card w-1/2 h-[80vh] ">
            <div className="text px-20 mb-10">
              <span className=" text-zinc-100 flex gap-10 ">
                CARDBOARD SPACESHIP{" "}  <div className="flex justify-center mt-1 w-4 h-4 rounded-full bg-zinc-100"></div>
              </span>
            </div>
            <img
              className="rounded-xl"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt=""
            />

            <div className="text mb-10 flex gap-4 m-4">
              <button className="border border-zinc-100 px-4 py-2 rounded-3xl text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 transition duration-1000">
                BRANDED TEMPLATE
              </button>
              <button className="border border-white px-4 py-2 rounded-3xl text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900  transition duration-1000">
                SALES DECK
              </button>
              <button className="border border-white px-4 py-2 rounded-3xl text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900  transition duration-1000">
                SOCIAL MEDIA TEMPLATE
              </button>
            </div>
          </div>

      {/* <div className='boxes flex'>

            <div className='texts '>
                     <span class="w-2 h-2 rounded-full bg-current">
                        <div class="text-sm uppercase mb-15 flex items-center">
							<span>Salience Labs</span>
						<span class="w-10 h-10 flex-shrink-0 rounded-full bg-current mr-8"></span></div>
                     </span>
                 </div>
                <div className='img flex gap-10 justify-center items-center '>
                    <div className='img1'>  
                        <img className='bg-cover w-[50vw] h-[45vw] p-20' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png " alt="" />
                     </div>
                   
                  

                    <div className="img2">
                        <img className='bg-cover w-[50vw] h-[45vw] p-20' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                        </div>
                    
                </div>
        </div> */}
    </div>

    <footer className=" flex justify-center items-center mt-[60px]">
      <button className="flex gap-20 border border-zinc-200 px-5 py-2 rounded-full">VIEW ALL CASE STUDIES  
         <span className=" mt-2.5 flex justify-center w-2 h-2 rounded-full bg-zinc-100"></span>
      </button>
      
    </footer>
  </div>);
}


export default Features;
