'use client'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModel from './create.model';
import UpdateModel from './update.model';
import Link from 'next/link';
interface IProps{
  blogs: IBlog[]
}
function AppTable(props: IProps) {
  const {blogs} = props;
  const [blog,setBlog] = useState<IBlog|null>(null);
  const [showModelUpdate, setShowModelUpdate] = useState<boolean>(false);
  const [showModelCreate, setShowModelCreate] = useState<boolean>(false);
  // console.log(">>>check props blogs: ", blogs)
  return (
    <>
        <div className='my-3'
             style={{display: 'flex', justifyContent:"space-between"}}
        >
          <h3>Table Blogs</h3>
          <Button onClick={()=>setShowModelCreate(true)}>Add New</Button>
        </div>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {blogs?.map( item =>{  // dấu hỏi chấm khi dữ liệu undifined k lỗi
              return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                
                    <Link className="btn btn-primary" href={`/blogs/${item.id}`}>View
                    </Link>
                    
                  <Button variant='warning' className='mx-3' 
                    onClick={()=>{
                    setBlog(item);
                    setShowModelUpdate(true);
                    }}
                  >Edit</Button> 
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
                )
            })}
          </tbody>
        </Table>
        <CreateModel
            showModelCreate = {showModelCreate}
            setShowModelCreate = {setShowModelCreate}
        />
        <UpdateModel
          showModelUpdate = {showModelUpdate}
          setShowModelUpdate = {setShowModelUpdate}
          blog = {blog}
          setBlog= {setBlog}
        />
    </>
  );
}

export default AppTable;