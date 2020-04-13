import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
  Container, 
  Row, 
  Col,
  Card,
  CardTitle,
  CardText,
} from 'reactstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/posts/')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log("Error retrieving data", error)
      })
  }, [posts])

  return (
    <div className="cards-wrapper">
      {posts.map((post) => (
        <Container style={{ margin: '50px auto' }} className="card-wrapper">
          <Row>
            <Col xs="12" lg={{ size: 4, offset: 4 }}>
              <Card className="card" key={post.id}>
                <CardTitle className="card-title">
                  Quote: {post.title}
                </CardTitle>
                <CardText>
                  {post.contents}
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>  
      ))}
    </div>
  )
}

export default Posts;