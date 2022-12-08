import { useEffect, useState } from "react";
import { FetchData } from "../ts/types";

export default function useFetch(url: string) {
  const [data, setData] = useState<Array<FetchData>>();
  const [data2, setData2] = useState<Array<FetchData>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Peticion()
  }, [url]);

  const Peticion = async () => {
    setLoading(true)
    const res = await fetch(`https://kirianime.fly.dev/${url}`)
    const data = await res.json()
    setData(data.animes)
    setData2(data.animes[0])
    setLoading(false)
  }

  return { data, setData, loading , data2 };
}
