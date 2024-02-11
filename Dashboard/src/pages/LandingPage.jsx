function LandingPage (){
 return(<div className="bg-gray-200 my-2 flex justify-center items-center h-screen "
 style={{
    backgroundImage:
    'url("public/Screenshot from 2024-02-10 14-27-04.png")',
    backgroundRepeat: 'no-repeat',
    width: 'auto',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}
 >
<div className="flex w-2/3 h-auto mx-3 my-16 ">

    <div className="h-auto bg-white ">
    <h1 className="text-center items-center text-3xl text-blue-900">Welcome to  Your  Fav Site</h1>
   <div className="mx-3 justify-center items-center my-10  ">
   {/* Img  */}
    <div className="">
        <img src="public/La.png" alt="some advert image" className="w-full h-96" />
    </div>
    {/* some descrption */}
    <p className="text-gray-500 bg-white mx-10">

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at qui aperiam incidunt sunt eaque iste sed. Dolores obcaecati, ullam ducimus, praesentium eaque corrupti veniam, debitis error dolorem iste dicta.
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, voluptas doloremque! Saepe, dolorum architecto natus ullam unde dignissimos praesentium repudiandae corrupti odit eos quis omnis veritatis quasi. Sunt, assumenda quos. 
    </p>
    {/* buttons */}
   <div className="flex items-center justify-center">
   <button className="bg-blue-500 text-gray-100 p-3 pr-5 pl-5  flex justify-center items-center rounded-md hover:opacity-75">
        GET START
    </button>
   </div>
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