import React from 'react';
import about1 from '../images/about-1.jpg';
import about2 from '../images/about-2.jpg';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="banner">
        <h1>About SportsStars</h1>
      </div>
      <div className="row">
        <div className="filler-text">
          <h2 className="bg-danger">Our Story</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam optio
            aspernatur libero eveniet dolorem repudiandae velit fuga explicabo
            expedita nemo ut porro minima magnam ea, debitis, pariatur ratione
            dolore eos! Architecto quia accusamus quos! Nihil veritatis facilis
            illo eum nostrum, animi aspernatur totam, cumque quisquam alias
            officia id est voluptates?
          </p>
        </div>
        <div className="image-container">
          <img src={about1} alt="football" />
        </div>
      </div>
      <div className="row">
        <div className="image-container">
          <img src={about2} alt="cycling" />
        </div>
        <div className="filler-text">
          <h2 className="bg-danger">What we stand for</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam optio
            aspernatur libero eveniet dolorem repudiandae velit fuga explicabo
            expedita nemo ut porro minima magnam ea, debitis, pariatur ratione
            dolore eos! Architecto quia accusamus quos! Nihil veritatis facilis
            illo eum nostrum, animi aspernatur totam, cumque quisquam alias
            officia id est voluptates?
          </p>
        </div>
      </div>
      <div className="banner banner-bottom">
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-3x"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram-square fa-3x"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square fa-3x"></i>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_
          blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
