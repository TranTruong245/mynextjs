'use client'
import Link from "next/link"
import { Button, Card } from "react-bootstrap"
import useSWR, { Fetcher } from 'swr'

const ViewDetailBlog = ({params} : {params : {id : string}}) =>{
    const fetcher : Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());
    const {data, error, isLoading} = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    });
    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    return(
        <div>
            <Link href={"/blogs"}>
                <Button className="my-3">Go back</Button>
            </Link>
            <Card className="text-center">
                <Card.Header>Title: {data?.title}</Card.Header>
                <Card.Body>
                   
                    <Card.Text>
                        Content: {data?.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
            </Card>
        </div>
    )
}
export default ViewDetailBlog;