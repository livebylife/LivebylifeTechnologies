import React, { Component} from 'react';
import Slider from 'react-slick'
import * as styles from './blog-preview.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class BlogPreview extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
      }
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
      render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
          <div>
            <h2>Auto Play & Pause with buttons</h2>
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              <div className={styles.slide_container}>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
            <div style={{ textAlign: "center" }}>
                <br/>
                <br/>
                <br/>
                <br/>
              <button className="button" onClick={this.play}>
                Play
              </button>
              <button className="button" onClick={this.pause}>
                Pause
              </button>
            </div>
          </div>
        );
      }
}
