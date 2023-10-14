'use client'
import { useRouter } from "next/navigation";
import Button from 'react-bootstrap/Button';

export default function Facebook(){
    const router = useRouter();
    const handleBtn = () =>{
        router.push("/");        
    } 
    return(
        <div>
            Facebook
            <div>
                <Button variant="outline-primary" >Trần Trường</Button>
                <span style={{ marginLeft: '10px' }}></span>
                <Button variant="outline-warning" onClick={() => handleBtn()}>Back Home</Button>
            </div>
        </div>
    )

}