//IMPORT Bootstrap components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Import React
import { useState, useEffect } from 'react';
//IMPORT CSS FILE
import './Product.css'

function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('productData')) || [];
        setProducts(storedProducts);
    }, []);

    useEffect(() => {
        const storedCategories = JSON.parse(localStorage.getItem('categoryData')) || [];
        setCategories(storedCategories);
    }, []);
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };


    return (
        <>
            <Container>
                <Row className="mb-3">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {selectedCategory ? `Selected Category: ${selectedCategory}` : 'Select Category'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleCategorySelect(null)}>All Categories</Dropdown.Item>
                            {categories.map((category, index) => (
                                <Dropdown.Item key={index} onClick={() => handleCategorySelect(category.title)}>
                                    {category.title}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row className="justify-content-md-center">
                    {products.filter(product => !selectedCategory || product.categories.includes(selectedCategory)).map((product) => (

                        <Col xs lg="3" key={product.id}>
                            <Card style={{ width: '18rem' }} className='mb-3'>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Card.Text>
                                        Category:  {product.categories}
                                    </Card.Text>
                                    <Button variant="primary">Add Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default Product