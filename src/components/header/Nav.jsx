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

const Nav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await get("/api/category/get");
      setData(response.data);
    };
    fetchCategory();
  }, []);

  console.log(data);
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
                      <a className="" href="/">
                        {item.name}
                      </a>
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
