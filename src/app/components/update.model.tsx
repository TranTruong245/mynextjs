'use client'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast} from 'react-toastify';
import { mutate } from 'swr';
interface IProps{
    showModelUpdate: boolean;
    setShowModelUpdate: (value: boolean) => void;
    blog: IBlog|null;
    setBlog: (value: IBlog|null) => void;
}
function UpdateModel(props: IProps) {
    const {showModelUpdate, setShowModelUpdate, blog, setBlog} = props;
    const [id, setId] = useState<number>(0);
    const [title,setTitle] = useState<string>("");
    const [author,setAuthor] = useState<string>("");
    const [content,setContent] = useState<string>("");
    useEffect (()=>{
        //Kiểm tra có tồn tại blog và blog.id ?
        if(blog && blog.id){ 
            setId(blog.id);
            setTitle(blog.title);
            setAuthor(blog.author);
            setContent(blog.content);
        }
    }, [blog])
    const handleUpdate = () =>{
      if (!title){
        toast.error("Not empty title");
        return;
      }
      if (!author){
        toast.error("Not empty author");
        return;
      }
      if (!content){
        toast.error("Not empty content");
        return;
      }
      fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({title, author, content})
      }).then(res => res.json())
        .then(res => {
          if(res){
            toast.warning("Successful update <3");
            handleClose();
            mutate("http://localhost:8000/blogs");// load lại trang sau khi lưu
          }
        });
    }
    // Xử lí nút close
    const handleClose = () =>{
        setTitle("");
        setAuthor("");
        setContent("");
        setBlog(null);//trick khi click vào edit nhiều lần mà vẫn fill được 
        setShowModelUpdate(false);
    }
    return (
    <>
      <Modal
        show={showModelUpdate}
        onHide={()=>handleClose()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update A Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="..." 
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="..."
                                  value={author}
                                  onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleUpdate()}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModel
;