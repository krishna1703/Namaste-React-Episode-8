
import { useEffect, useState } from "react";


const useRestaurantMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+ resId );
   
    const json = await data.json();
    
    setResinfo(json.data);
  };

  return resinfo;
};

export default useRestaurantMenu;