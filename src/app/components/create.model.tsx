'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast} from 'react-toastify';
import { mutate } from 'swr';
interface IProps{
    showModelCreate: boolean;
    setShowModelCreate: (value: boolean) => void;
}
function CreateModel(props: IProps) {
    const {showModelCreate, setShowModelCreate} = props;
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [content,setContent] = useState("");
    const handleSave = () =>{
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
      fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({title, author, content})
      }).then(res => res.json())
        .then(res => {
          if(res){
            toast.success("Lưu thành công <3");
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
        setShowModelCreate(false);
    }
    return (
    <>
      <Modal
        show={showModelCreate}
        onHide={()=>handleClose()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Blogs</Modal.Title>
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
          <Button variant="primary" onClick={()=> handleSave()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModel
;