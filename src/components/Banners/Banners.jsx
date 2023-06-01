import React, {useEffect, useRef} from 'react';
import banner_1 from './img/1-1-banner-kurer.jpg'
import banner_2 from './img/bn-2.jpg'
import banner_3 from './img/bn-3.jpg'
import banner from './img/banner-big-sample.png'

import s from './Banners.module.css'

const Banners = ({height, setHeight}) => {

    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    },[height])


    return (
        <div ref={ref}>
            <section className={s.banners}>
                <div className={s.mainBanner}>
                        <div className={s.banner}>
                            <img src={banner}/>
                        </div>
                </div>
                <div className={s.smallBanner}>
                        <div className={s.banner}>
                            <img src={banner}/>
                        </div>
                        <div className={s.banner}>
                            <img src={banner}/>
                        </div>
                </div>
                {/*<div className="mobile-banners slick-initialized slick-slider slick-dotted" style="">
                    <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style="">Previous
                    </button>
                    <div className="slick-list draggable">
                        <div className="slick-track" style="opacity: 1; width: 0px;"><a
                            className="mp-banner slick-slide" href="#" data-slick-index="0" aria-hidden="true"
                            tabIndex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00"
                            style="width: 0px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms linear 0s;">
                            <div className="banner-content"><img src="/wp-content/uploads/2022/12/1-2-banner-kurer.jpg">
                            </div>
                        </a><a className="mp-banner slick-slide slick-current slick-active" href="#"
                               data-slick-index="1" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide01"
                               aria-describedby="slick-slide-control01"
                               style="width: 0px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;">
                            <div className="banner-content"><img src="/wp-content/uploads/2022/07/bn-m1.jpg"></div>
                        </a><a className="mp-banner slick-slide" href="#" data-slick-index="2" aria-hidden="true"
                               tabIndex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02"
                               style="width: 0px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms linear 0s;">
                            <div className="banner-content"><img src="/wp-content/uploads/2022/07/bn-m2.jpg"></div>
                        </a></div>
                    </div>


                    <button className="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button>
                    <ul className="slick-dots" style="" role="tablist">
                        <li className="" role="presentation">
                            <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00"
                                    aria-label="1 of 3" tabIndex="-1">1
                            </button>
                        </li>
                        <li role="presentation" className="slick-active">
                            <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01"
                                    aria-label="2 of 3" tabIndex="0" aria-selected="true">2
                            </button>
                        </li>
                        <li role="presentation" className="">
                            <button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02"
                                    aria-label="3 of 3" tabIndex="-1">3
                            </button>
                        </li>
                    </ul>
                </div>*/}
            </section>
        </div>
    );
};

export default Banners;