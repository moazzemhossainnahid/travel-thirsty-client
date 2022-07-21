import { useEffect, useState } from "react";

const useToken = (email) => {
  console.log(email);
  const [token, setToken] = useState("");
  const url = `http://localhost:5500/api/v1/authentication/get-token?email=${email}`;
  useEffect(() => {
    if (email) {
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          console.log(accessToken);
          setToken(accessToken);
        });
    }
  }, [url, email]);
  return token;
};

export default useToken;
