import React from 'react'
import { Col, Container, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

function About() {
  const data = {
    about: {
      desc: 'Currently developing applications using Python and PHP.',
      statistic: [
        {
          id: 1,
          title: 'Complete Projects',
          value: '10+',
        },
        {
          id: 2,
          title: 'Happy Clients',
          value: '8+',
        },
        // {
        //   id: 3,
        //   title: 'Years of Experience',
        //   value: '',
        // },
      ]
    },
  }

  return (
    <div className="border-bottom pb-5 aboutCustom" id="about">
      <Container className="pt-5">
        <Row>
          <Col>
            <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} >
              <div>
                <h3 className="fw-bold">ABOUT ME</h3>
                <p className="lead">{data.about.desc}</p>
              </div>
            </motion.div>
          </Col>
          <Col>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 1 }} >
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {data.about.statistic.map((item, i) => (
                <Card key={i} className="text-center" style={{ width: '12rem' }}>
                  <Card.Body>{item.title} <h2 className="fw-bold">{item.value}</h2> </Card.Body>
                </Card>
              ))}
            </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About