import React from 'react';
import './Review.css'
import ImagesPic1 from '../images/pic1.png'
import ImagesPic2 from '../images/pic2.png'
import ImagesPic3 from '../images/pic3.png'
const Review = () => {
    return (
        <div>
            <section className="review" id="review">

<h1 className="heading"> people's review </h1>

<div className="box-container">

    <div className="box">
        <i className="fas fa-quote-right"></i>
        <div className="user">
            <img src={ImagesPic1} alt=""/>
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
            </div>
        </div>
    </div>

    <div className="box">
        <i className="fas fa-quote-right"></i>
        <div className="user">
            <img src={ImagesPic2} alt=""/>
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
            </div>
        </div>
    </div>

    <div className="box">
        <i className="fas fa-quote-right"></i>
        <div className="user">
            <img src={ImagesPic3} alt=""/>
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
            </div>
        </div>
    </div>

</div>

</section>
        </div>
    );
};

export default Review;