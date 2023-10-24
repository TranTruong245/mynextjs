'use client'
import useSWR from "swr";
import AppTable from "../components/app.table";

export default function Blogs(){
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const {data, error, isLoading} = useSWR("http://localhost:8000/blogs", fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    });
    //****************cách fetching bằng useEffect*********
    // useEffect(() => {
    //   const fetchDate = async() =>{
    //     const res = await fetch("http://localhost:8000/blogs");
    //     const data = await res.json(); 
    //     console.log(">> Data", data);
    //   }
    // fetchDate();
    // }, [])
    if (isLoading){
      return <div>Loading...</div>
    }
    return(
        <div className="mt-3">
            <AppTable 
      blogs={data?.sort((a:any, b:any) => b.id - a.id)}
    />
        </div>
    )
}