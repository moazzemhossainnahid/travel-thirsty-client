import { useEffect } from "react";
import { useState } from "react";

const useHotel = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5500/hotels/get-all-hotel")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data);
      });
  }, []);
  return hotels;
};

export default useHotel;
