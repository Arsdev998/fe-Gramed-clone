import { getById } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import Loading from "../ui/Loading";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { BreadcrumbHeader } from "../ui/breadCrumsHeader";

const ProductDetail = ({ id }) => {
  const [data, setData] = useState(null); // Default state to null to indicate loading
  useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await getById("/api/book/get/" + id);
      setData(response);
    };
    fetchProductDetail();
  }, [id]);
  console.log(data);

  if (!data) {
    return <Loading />; // Show loading state while data is being fetched
  }

  return (
    <section>
    <BreadcrumbHeader current={data.title} />
      <div className="mt-[50px] p-5 flex flex-col md:flex-row w-full max-w-[1200px] mx-auto gap-x-10">
        <div className="flex justify-center md:justify-start p-5 rounded-md bg-white shadow-2xl">
          <img
            src={data.coverUrl}
            alt={data.title}
            className="w-[200px] h-[300px] object-cover rounded-lg"
          />
        </div>
        <div className="w-[500px] mt-5 md:mt-0">
          {/* head book */}
          <div className="flex justify-between items-center w-full mb-5">
            <div>
              <h1 className="text-gray-500 uppercase text-lg">{data.author}</h1>
              <h2 className="text-2xl font-semibold">{data.title}</h2>
            </div>
            <IoShareSocialSharp className="text-2xl text-gray-500 cursor-pointer" />
          </div>
          {/* detail book */}
          <div className="">
            <div className="flex gap-x-6 mb-5 font-semibold text-gray-500 text-md border-b pb-2">
              <a href="#" className="hover:text-gramed active:text-gramed">
                Pilih Format Buku
              </a>
              <a href="#">Deskripsi Buku</a>
              <a href="#">Detail Buku</a>
            </div>
            <div className="py-4">
              <h3 className="capitalize font-semibold text-black text-lg mb-3">
                Pilih Format Buku Yang Tersedia
              </h3>
              <div className="w-[200px] flex items-center justify-between p-4 border rounded-md border-gramed bg-gray-50">
                <div className="flex flex-col">
                  <h4 className="font-semibold text-xl">SOFT COVER</h4>
                  <p className="text-xs text-gray-500 mt-1">mulai dari</p>
                  <p className="text-lg text-gramed">
                    {data.price
                      ? `Rp ${data.price.toLocaleString("id-ID")}`
                      : "Harga tidak tersedia"}
                  </p>
                </div>
                <IoIosArrowDown className="text-gramed text-2xl cursor-pointer" />
              </div>
              <IoIosArrowBack className="text-gramed text-xl cursor-pointer absolute top-1/2 left-[-15px] transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
