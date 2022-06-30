import { useEffect, useState } from "react";

const useHotel = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('/hotelData.json').then(res => res.json())
            .then(data => {
                setHotels(data);
            })
    }, []);

    return [hotels];
}

export default useHotel;