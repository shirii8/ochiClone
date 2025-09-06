import  { useState, useEffect } from "react";

function Eyes() {

  const [rotate, setRotate]=useState(0)
  

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
    const mouseX= e.clientX;
    // const mouseY= e.clientY;

    const deltaX= mouseX- window.innerWidth/2;
      const deltaY= mouseX- window.innerHeight/2;

      var angle= Math.atan2(deltaY,deltaX)* (180/(Math.PI)); //in deg
      setRotate(angle-180)
      });
  });

  return (
  <div className="eyes w-full h-screen overflow-hidden">
  <div className='relative w-full bg-cover bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
    <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
        <div className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900"> PLAY
          <div style={{transform: `translate(-50%, -50%)  rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10">
            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
        <div className="relative flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900"> PLAY
           <div style={{transform: `translate(-50%, -50%)  rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10">
            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Eyes;
