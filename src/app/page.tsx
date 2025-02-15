import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import image from '../../public/image.webp'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { title } from "process";
import { FaBook } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Chilanka } from "next/font/google";
import { cardData } from "./data";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex flex-col">
    <TopSection/>
    <SecondView/>
    <ThirdView/>
    <BottomSection/>
  </div>
  );
}


 function TopSection(){
  return (
    <div className="mx-28  flex flex-col lg:flex-row items-center justify-end h-[900px] lg:h-[600px] pt-6 gap-y-6  lg:gap-x-20 ">
      <div className="flex   flex-col gap-8 w-[800px] ">
        <h1 className="text-6xl ">
        Streamline your export <br /> processes
        </h1>
        <p className="text-3xl font-extralight " >
        Order management, quality control, logistics, <br /> insurance, and payments — all on a single platform
        </p>
        <Button className="flex gap-2 w-fit p-8 rounded-xl">
           <p className="text-lg">Request Demo</p>
            <FaArrowRight /></Button>
      </div>
      <div className=" 700 grow h-[360px] mb-20  ">
      <Image 
      src='/image.webp'
      width={600}
      height={474}
      alt="Picture of oure services"
    />
      </div>
    </div>
  )

}


function SecondView(){
  return(
    <div className="h-screen mt-40 flex  flex-col">
      <div className="flex justify-center">
      <p className="text-6xl font-semibold text-center">The all-in-one export <br /> management platform system</p>

      </div>
      <div className=" mx-28  mt-20 grid gap-10 grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 ">
        {cardData.map((item)=><CardForSecondSection title={item.title} description={item.description}><FaBook color="green" size={30}/></CardForSecondSection>)}
      </div>
    </div>
  )
}

function ThirdView(){
  return (
    <div className="h-screen mt-[2000px] lg:mt-[1200px] xl:mt-40 g flex flex-col items-center gap-4">
     <h1 className="text-7xl font-semibold text-center mt-40">The backbone for global trade </h1>
     <p className="text-2xl  text-gray-400  text-center mt-10">With Pazago's cross-border tech, grow, manage and optimize your international <br /> trades. Specially built for Indian Importers and Exporters.</p>
     <Button className="flex gap-2 w-fit p-8 rounded-xl">
           <p className="text-xl">Why Expo ? </p>
            <FaArrowRight /></Button>
     <Image 
     src='/backbone_trade_tab.avif'
     height={211}
     width={823}
     alt="picture of our sevices"
     />
    </div>
  )
}

function BottomSection(){
  return (
    
    <div className="h-[400px] mt-40 bg-black flex items-center justify-between">
     <div className="flex flex-col items-center justify-center gap-2 mx-28">
     <Link className="flex gap-4  w-full"  href="/" > 
           
          <h1  className="text-3xl text-white font-semibold">Expo</h1>

           </Link>
           <Link className="flex gap-4 items-center "  href="" > 
           
          <h1  className="text-xl text-white hover:underline ">ayaanmemon1912@gmail.com</h1>

           </Link>
           <Link className="flex gap-4 w-full items-center "  href="" > 
           
           <h1  className="text-xl text-white hover:underline ">+91 999999999</h1>
 
            </Link>
     </div>
     <div className="flex flex-col items-center justify-center gap-2 mx-28">
     <Link className="flex gap-4 w-full items-center "  href="" > 
           
           <h1  className="text-xl text-white hover:underline ">Why Expo ?</h1>
 
            </Link><Link className="flex gap-4 w-full items-center "  href="" > 
           
           <h1  className="text-xl text-white hover:underline ">Blogs</h1>
 
            </Link><Link className="flex gap-4 w-full items-center "  href="" > 
           
           <h1  className="text-xl text-white hover:underline ">Privacy Policy</h1>
 
            </Link><Link className="flex gap-4 w-full items-center "  href="" > 
           
           <h1  className="text-xl text-white hover:underline ">Terms of Service</h1>
 
            </Link>
     
     </div>
     
    </div>
  )
}







interface CardForSecondSectionProps{
  children:React.ReactNode
title:string,
description:string
  }






function CardForSecondSection({title,description,children}:CardForSecondSectionProps){
  return (
    <div className="">
      <Card className="w-[400px] h-[350px]">
  <CardHeader>
    <CardTitle>{children}</CardTitle>
    <CardDescription className="text-4xl text-black font-bold">{title}</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl font-light text-gray-400 ">{description}</p>
  </CardContent>
</Card>
    </div>
  )
}