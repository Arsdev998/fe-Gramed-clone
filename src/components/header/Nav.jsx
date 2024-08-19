import { get } from "@/utils/api";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";

const Nav = () => {
  const [data, setData] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await get("/api/category/get");
      setData(response.data);
    };
    fetchCategory();
  }, []);

  const handleFilter = (categoryName) =>{
     searchParams.set('category',categoryName)
     setSearchParams(searchParams);
     navigate(`/books?${searchParams.toString()}`)
  }

  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[18px] text-gramed hover:text-gramed/80">
              Kategory
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-4 p-4">
              {data.map((item) => (
                <ul className="" key={item.id}>
                  <li c>
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" onClick={() => handleFilter(item.name)}>
                        {item.name}
                      </Button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Nav;
