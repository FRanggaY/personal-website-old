import React, { useState, useEffect } from 'react'
import { Button, Container} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Masonry from 'react-masonry-css';
import {AnimatePresence, motion} from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import ImageKPB from '../assets/image/portfolio/laravel_kpb.jpeg';
import ImageBookstore from '../assets/image/portfolio/bookstore.png';
import ImageKuisSejarah from '../assets/image/portfolio/kuis-sejarah.png';
import ImageSurveyCovid from '../assets/image/portfolio/surveycovid.png';
import ImageComicList from '../assets/image/portfolio/comiclist.png';
import ImagePortfolio from '../assets/image/portfolio/portfolio.png';


function Portfolio() {
  const [selectedData, setSelectedData] = useState({});
  const [show, setShow] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState('all');

  useEffect(() => {
    if(active === 'all'){
      setFiltered(data.cardData);
      return
    }
    const filtered = data.cardData.filter((item)=>
      item.category.includes(active)
    );
    setFiltered(filtered);
  }, [active]);

  const handleClose = () => setShow(false);
  const handleShow = (item) => [
    setShow(true),
    setSelectedData(item)
  ];

  const data = {
    cardData: [
      {
        id: 1,
        imgSrc: ImageKPB,
        title: 'KPB',
        desc: 'Website yang menyediakan sistem informasi seputar Komunitas Pengawas Belajar',
        category: "website",
        tags: ["Project School","Laravel", "Bootstrap", "MySQL", "Stisla"],
        githubUrl: 'https://github.com/FRanggaY/laravel-kpb-remake'
      },
      {
        id: 2,
        imgSrc: ImageBookstore,
        title: 'Bookstore',
        desc: 'Website yang memanajemen buku sekolah',
        category: "website",
        tags: ["Project School", "Laravel", "Bootstrap", "MySQL", "AdminLTE"],
        githubUrl: 'https://github.com/FRanggaY/bookstore'
      },
      {
        id: 3,
        imgSrc: ImageKuisSejarah,
        title: 'Kuis Sejarah',
        desc: 'Aplikasi kuis berisi soal - soal sejarah',
        category: "desktop",
        tags: ["Project School", "Unity 3D", "Coreldraw"]
      },
      {
        id: 4,
        imgSrc: ImageSurveyCovid,
        title: 'Survey Covid',
        desc: 'Aplikasi survei berisi soal survey Covid-19',
        category: "desktop",
        tags: ["Project School", "Visual Basic.Net", "Microsoft Access"],
        githubUrl: 'https://github.com/FRanggaY/Covid-19-Survey'
      },
      {
        id: 5,
        imgSrc: ImageComicList,
        title: 'Comic List',
        desc: 'Website berisi data dan informasi seputar komik',
        category: "website",
        tags: ["On-Progress", "Project Personal", "React Js", "Styled-Components", "Express Js", "MongoDB"],
        githubUrl: 'https://github.com/FRanggaY/react-comiclist'
      },
      {
        id: 6,
        imgSrc: ImagePortfolio,
        title: 'Personal Portfolio V1',
        desc: 'Website versi pertama berisi data dan informasi jejak pribadi',
        category: "website",
        tags: ["Project Personal", "React Js", "Styled-Components"],
        githubUrl: 'https://github.com/FRanggaY/react-portfolio'
      },
    ],
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="border-bottom pb-5" id="portfolio">
      <Container className="pt-5">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" offset={80}>
        <div>
          <h3 className="fw-bold pb-2">PORTFOLIO</h3>
          <div className="d-flex gap-2 flex-wrap justify-content-center mb-3">
            <Button variant={active === 'all' ? 'primary' : 'outline-primary' }  onClick={()=> setActive('all')} >All</Button>{' '}
            <Button variant={active === 'website' ? 'primary' : 'outline-primary' }  onClick={()=> setActive('website')} >Website</Button>{' '}
            <Button variant={active === 'desktop' ? 'primary' : 'outline-primary' }  onClick={()=> setActive('desktop')} >Desktop</Button>{' '}
            {/* <Button variant="outline-primary">Other</Button>{' '} */}
          </div>
          
          <motion.div layout>
            <AnimatePresence>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {filtered.map((item, i)=>{
                  return(
                    <motion.div layout animate={{ opacity: 1}} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={i} onClick={()=>handleShow(item)}>
                      <img src={item.imgSrc} className="customPortfolioButton" style={{'width' : '100%' }} alt=""/>
                      <p className="text-center text-muted">{item.title}</p>
                    </motion.div>
                  )
                })}
              </Masonry>
            </AnimatePresence>
          </motion.div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedData.imgSrc} style={{'width' : '100%' }} className="mb-3" alt=""/>
              <div className="d-flex gap-2 flex-wrap">
                {selectedData.tags 
                ? selectedData.tags.map((tag, i)=>{
                      return(
                        <Badge key={i} bg="secondary">{tag}</Badge>
                      )
                  })
                : <div></div>
                }
              </div>
              <p className="lead">{selectedData.desc}</p>
              <div className="d-flex gap-2 flex-wrap">
                {selectedData.url ? <a href={selectedData.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" >Demo</a> : <div></div>}
                {selectedData.githubUrl ? <a href={selectedData.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark" >Github</a> : <div></div>}
              </div>
            </Modal.Body>
          </Modal>
        </div>
        </AnimationOnScroll>
      </Container>
    </div>
  )
}

export default Portfolio