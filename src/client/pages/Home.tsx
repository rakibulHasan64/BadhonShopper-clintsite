// import Banner from "../components/home/Banner";
// import Explorelatest from "../components/home/Explorelatest";
// import TopSales from "../components/home/TopSales";


// export default function Home() {
//   return (
//     <>

//       <div className="">

//         <Banner />
//         <TopSales />
//         <Explorelatest />

//       </div>

//     </>
//   );
// }


import Banner from "../components/home/Banner";
import Explorelatest from "../components/home/Explorelatest";
import TopSales from "../components/home/TopSales";
import ScrollAd from "../components/home/ScrollAd";
import { useScrollRange } from "../hooks/useScrollRange";



export default function Home() {
  

  const showAd = useScrollRange(500, 1200); 


  return (
    <>
      <div className="">
        <Banner />
        <TopSales />
        <Explorelatest />
      </div>

      { showAd && (
        
        <>
          <div className="hidden md:block">
            <ScrollAd />
          </div>
        
        </>
        
      )} 

    </>
  );
}
