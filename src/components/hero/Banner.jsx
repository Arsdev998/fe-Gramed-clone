import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import banner1 from "@/assets/image/banner1.jpg";
import banner2 from "@/assets/image/banner2.png";
import banner3 from "@/assets/image/banner3.jpg";
import banner4 from "@/assets/image/banner4.jpg";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{ loop: true }}
        className="w-[700px] h-[350px] relative"
      >
        <CarouselContent className="w-full h-full">
          <CarouselItem className="w-full h-full">
            <div className="p-1">
              <img
                src={banner1}
                alt=""
                className="h-[350px] w-[700px] object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full">
            <div className="p-1">
              <img
                src={banner2}
                alt=""
                className="h-[350px] w-[700px] object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-[700px]">
            <div className="p-1">
              <img
                src={banner3}
                alt=""
                className="h-[350px] w-[700px] object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full">
            <div className="p-1">
              <img
                src={banner4}
                alt=""
                className="h-[350px] w-[700px] object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 text-red-500" />
        <CarouselNext className="absolute top-1/2 right-5 -translate-y-1/2 text-red-500" />
      </Carousel>
    </div>
  );
};

export default Banner;
