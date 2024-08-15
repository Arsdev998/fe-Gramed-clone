import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { get } from "@/utils/api";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const feetchBanner = async () => {
      const response = await get("/api/banner/get");
      setData(response.data);
    };
    feetchBanner();
  }, []);

  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full md:w-[800px] h-[150px] md:h-[400px] relative"
      >
        <CarouselContent className="w-full h-full">
          {data.map((item) => (
            <CarouselItem key={item.id} className="w-full h-full">
              <div className="p-1 rounded-md overflow-hidden">
                <img
                  src={item.bannerUrl}
                  alt={item.promo}
                  className="h-[150px] md:h-[400px] w-full md:w-[800px] object-cover rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 text-2xl -translate-y-1/2 text-red-500" />
        <CarouselNext className="absolute top-1/2 right-7 text-2xl -translate-y-1/2 text-red-500" />
      </Carousel>
    </div>
  );
};

export default Banner;
