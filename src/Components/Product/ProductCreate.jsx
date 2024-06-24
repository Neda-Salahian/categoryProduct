//IMOORT BOOTSTRAP COMPONENTS
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


//Import React
import { useState } from 'react';
//Import CSS FILE
import './Product.css'
function ProductCreate() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [category, setCategory] = useState('');


    function AddProduct(e) {
        e.preventDefault();
        if(!title || !description) {
            alert('Please fill all the fields')
            return
        }

        const products = JSON.parse(localStorage.getItem('productData') || '[]');
        const product = products.find(product => product.title === title);
        if(product) {
            alert('Product already exists')
            return
        } else {
            const newProduct = {
                title,
                description,
                // category,
                dateCreated: new Date().toLocaleDateString(),
            }
            products.push(newProduct);
            localStorage.setItem('productData', JSON.stringify(products));
            alert('Product created successfully');
            setTitle('');
            setDescription('');
            // setCategory('');
            
        }
    }
    
    return (
        <>

            <Container className='form-container'>
                <Row className="justify-content-md-center">
                    <h3>ProductCreate</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title Product</Form.Label>
                            <Form.Control type="title" placeholder="Enter Title Product" name='title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name='description' onChange={(e) => setDescription(e.target.value)} value={description}/>
                        </Form.Group>
                        {/* <Form.Select aria-label="Default select example" className='mb-3'>
                            <option>Select Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select> */}
                        <Button variant="primary" type="submit" onClick={AddProduct}>
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>

        </>
    )
}

export default ProductCreate