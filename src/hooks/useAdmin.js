import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const url = `http://localhost:5500/api/v1/authentication/get-admin`;
  useEffect(() => {
    if (email) {
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.isAdmin) {
            setIsAdmin(true);
          }
        });
    }
  }, [url, email]);

  return isAdmin;
};

export default useAdmin;
