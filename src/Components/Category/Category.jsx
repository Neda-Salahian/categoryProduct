//IMOORT BOOTSTRAP COMPONENTS
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


//Import React
import { useState, useEffect } from 'react';
//Import CSS FILE

function CategoryCreate() {

    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const storedCategories = JSON.parse(localStorage.getItem('categoryData')) || [];
        setCategories(storedCategories);
    }, []);
    function AddCategory(e) {
        e.preventDefault();
        if (!title) {
            alert('Please fill all the fields')
            return
        }

        const categories = JSON.parse(localStorage.getItem('categoryData') || '[]');
        const category = categories.find(category => category.title === title);
        if (category) {
            alert('Category already exists')
            return
        } else {
            const newCategory = {
                title,
                dateCreated: new Date().toLocaleDateString(),
            }
            categories.push(newCategory);
            localStorage.setItem('categoryData', JSON.stringify(categories));
            alert('Category created successfully');
            setCategories(categories);
            setTitle('');

        }
    }

    return (
        <>
            <Container className='form-container'>
                <Row className="justify-content-md-center">
                    <h3>CategoryCreate</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title Category</Form.Label>
                            <Form.Control type="title" placeholder="Enter Title Category" name='title' onChange={(e) => setTitle(e.target.value)} value={title} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={AddCategory} className="mb-3">
                            Submit
                        </Button>
                    </Form>
                </Row>
                <Row className="justify-content-md-center">
                    <ListGroup>
                        {categories.map((category, index) => (
                            <ListGroup.Item  key={index}>{category.title}</ListGroup.Item>
                        ))}
                      
                    </ListGroup>
                </Row>
            </Container>
        </>
    )
}

export default CategoryCreate