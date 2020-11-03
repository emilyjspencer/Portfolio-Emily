import React from 'react';

import CarouselTravel from './CarouselTravel';

import './LangTravel.css';


const Langtravel = () => {


    return (
        <>
        <div className="languages">
        <h3 className="languagesss">Languages and travel</h3>
        <br />
          <p>There is something thrilling about being able to understand and communicate in another language and having studied modern languages at university, I've had the opportunity to learn a handful of languages; <strong>French, German and Dutch</strong> and a little <strong>Spanish</strong>.</p>
            <p>Studying languages also gave me the opportunity to live and work abroad; I worked in <strong>Brittany</strong>, France for six months before moving to <strong>Heidelberg</strong> to study at Germany's
            oldest university - the <strong>Ruprecht Karls Universitaet Heidelberg.</strong></p>
             <p>Swipe or click 'next' to see some of the other places I've been</p>
        <div className="pink3" >
        <CarouselTravel />
        </div>
        </div>
       </>
    )
}


export default Langtravel;