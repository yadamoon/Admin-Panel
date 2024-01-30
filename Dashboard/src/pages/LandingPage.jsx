function LandingPage (){
 return(<div className="bg-gray-200 my-2 flex justify-center items-center "
 style={{
    backgroundImage:
    'url("public/La.png")',
    backgroundRepeat: 'no-repeat',
    width: 'auto',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}
 >
<div className="flex w-2/3 h-screen mx-3 my-16">
    <div className="border  col-span-1 bg-white  h-56">

   <div className="mx-3 justify-center items-center my-10">
    <p>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at qui aperiam incidunt sunt eaque iste sed. Dolores obcaecati, ullam ducimus, praesentium eaque corrupti veniam, debitis error dolorem iste dicta.
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, voluptas doloremque! Saepe, dolorum architecto natus ullam unde dignissimos praesentium repudiandae corrupti odit eos quis omnis veritatis quasi. Sunt, assumenda quos. 
    </p>
    <button className="bg-blue-500 text-gray-100 p-2 justify-center items-center">
        GET START
    </button>
   </div>



    </div>


    {/* for Img */}
    {/* <div className=" border  col-span-1 bg-white mx-6"
    
    >


    </div> */}
   
</div>
    </div>)
}
export default LandingPage;