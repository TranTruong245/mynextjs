'use client'
import Table from 'react-bootstrap/Table';
interface IProps{
  blogs: IBlog[]
}
function AppTable(props: IProps) {
  const {blogs} = props;
  console.log(">>>check props blogs: ", blogs)
  return (
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
              Edit, View, Delete
            </td>
          </tr>
          )
        })}
        
      </tbody>
    </Table>
  );
}

export default AppTable;