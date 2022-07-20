import { useEffect } from "react";
import { useState } from "react";

const useTours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5500/api/v1/tour/all-tour-plan")
      .then((res) => res.json())
      .then((data) => setTours(data.data));
  }, []);
  return [tours];
};
export default useTours;
