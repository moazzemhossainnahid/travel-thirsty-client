import { useEffect } from "react";
import { useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  const url = `http://localhost:5500/authentication/get-token?email=${email}`;
  useEffect(() => {
    if (email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setToken(data.accessToken));
    }
  }, [url, email]);
  return token;
};

export default useToken;
