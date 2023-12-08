import { useEffect, useState } from "react";

export default function UseFetch(url, header = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    fetch(url, header)
    .then((res) => {
        if (!res.ok) {
          throw new Error("Desculpe, sua solicitação não foi atendida");
        }
        return res.json();
      })
      .then((responseData) => setData(responseData))
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
  }, [url]);

  return { data, loading }
}
