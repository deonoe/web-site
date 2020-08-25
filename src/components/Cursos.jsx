import React from 'react';
import { Layout } from 'antd';
import CourseCard from './CourseCard';
import courses from '../courses';
import categorias from '../categorias';
import Category from './CategoryCard';
import Slider from 'react-slick';

const { Content } = Layout;

function Cursos() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Content id="cursos">
      <section className="intro">
        <h2>
          The Angola's largest selection of Engineering and Technology courses
        </h2>
        <p>Choose from our +100 courses with high qualified instructors.</p>
      </section>
      <section className="cursos-container">
        <div className="carousel-container">
          <div className="carousel-scroll carousel-grid">
            {categorias.map((categoria) => {
              return (
                <div key={categoria.id}>
                  <Category title={categoria.title} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Slider {...settings} arrows="true">
        {courses.map((curso) => {
          return (
            <div key={curso.id}>
              <CourseCard
                img={curso.img}
                title={curso.title}
                instructor={curso.instructor}
              />
            </div>
          );
        })}
      </Slider>
    </Content>
  );
}

export default Cursos;
