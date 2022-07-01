import React from 'react'
import Search from '@mui/icons-material'
function Search(){
return(
    <>
    <Form>
    <Form.Group className="mb-3" controlId="subscribeInput">
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Form>
    </>
);
}
export default Search;