'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
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
        console.log(">>>check data",title,author,content);
    }
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