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
                <Button variant="outline-primary">Trần Trường</Button>
                <button onClick={() => handleBtn()}>back home</button>
            </div>
        </div>
    )

}