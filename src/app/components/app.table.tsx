'use client'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModel from './create.model';
interface IProps{
  blogs: IBlog[]
}
function AppTable(props: IProps) {
  const {blogs} = props;
  const [showModelCreate, setShowModelCreate] = useState<boolean>(false);
  // console.log(">>>check props blogs: ", blogs)
  return (
    <>
        <div className='mb-3'
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
            {blogs?.map( blog =>{  // dấu hỏi chấm khi dữ liệu undifined k lỗi
              return(
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant='warning' className='mx-3'>Edit</Button> 
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
    </>
  );
}

export default AppTable;