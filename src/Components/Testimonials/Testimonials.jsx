import React, { useRef } from 'react';
import './Testimonials.css';
import nextIcon from '../../assets/next.png';
import backIcon from '../../assets/back.png';
import User1 from '../../assets/testiimg1.avif'
import User2 from '../../assets/testiimg2.jpg';
import User3 from '../../assets/testiimg3.png';
import User4 from '../../assets/testiimg4.jpg'


export const Testimonials = () => {

    const slider = useRef()
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`


    }
    return (
        <div className='testimonials'>
            <img src={nextIcon} alt='' className='next_btn' onClick={slideForward}/>
            <img src={backIcon} alt='' className='back_btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={User1} alt='' />
                                <div>
                                    <h2>William Jackson 1</h2>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was the one of the best decisions I've ever made, The supportive comunity, state-of the-art facilities, and commitment to academic excellience have truly exdeeded my expectations.
                            </p>
                        </div>
                    </li>

                     <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={User2} alt='' />
                                <div>
                                    <h2>William Jackson 2</h2>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was the one of the best decisions I've ever made, The supportive comunity, state-of the-art facilities, and commitment to academic excellience have truly exdeeded my expectations.
                            </p>
                        </div>
                    </li>

                     <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={User3} alt='' />
                                <div>
                                    <h2>William Jackson 3</h2>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was the one of the best decisions I've ever made, The supportive comunity, state-of the-art facilities, and commitment to academic excellience have truly exdeeded my expectations.
                            </p>
                        </div>
                    </li>

                     <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={User4} alt='' />
                                <div>
                                    <h2>William Jackson 4</h2>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was the one of the best decisions I've ever made, The supportive comunity, state-of the-art facilities, and commitment to academic excellience have truly exdeeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
