//IMOORT BOOTSTRAP COMPONENTS
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//Import React
import { useState, useEffect } from 'react';
//Import CSS FILE
import './Product.css'
function ProductCreate() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const storedCategories = JSON.parse(localStorage.getItem('categoryData')) || [];
        setCategories(storedCategories);
    }, []);
    
    function AddProduct(e) {
        e.preventDefault();
        if(!title || !description || !category || !image) {
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
                categories : category,
                image,
                dateCreated: new Date().toLocaleDateString(),
            }
            products.push(newProduct);
            localStorage.setItem('productData', JSON.stringify(products));
            alert('Product created successfully');
            setTitle('');
            setDescription('');
            setCategory('');
            setImage('');
        }
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
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
                        <Form.Select aria-label="Default select example" className='mb-3'
                         name="category"
                         value={category}
                         onChange={(e) => setCategory(e.target.value)}
                         >
                            <option>Select Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.title}>{category.title}</option>
                            ))}
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                            />
                        </Form.Group>
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