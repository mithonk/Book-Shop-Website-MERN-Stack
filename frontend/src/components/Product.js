import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='card1 my-3 mx-2 rounded' style={{ width:' 230px'}} >
      <Link to={`/product/${product._id}`}>
        <Card.Img className='cardImg' src={product.image} height='250px'  variant='top' />
      </Link>

      <Card.Body >
        <Link to={`/product/${product._id}`}>
   
          <Card.Text  >
          <div className='pName'>
            <strong>{product.name}</strong>
            </div>
          </Card.Text>
         
        </Link>

        <Card.Text as='div' className='my-2'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h5'>LKR.{product.price}</Card.Text>
      </Card.Body>
   
    </Card>
  )
}

export default Product