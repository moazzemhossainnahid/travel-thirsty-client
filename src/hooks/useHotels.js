import { useState, useEffect } from "react";

const useHotel = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5500/api/v1/hotels/get-all-hotel")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data);
      });
  }, []);

  return [hotels];
};

export default useHotel;
