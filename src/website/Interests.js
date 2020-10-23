import React from 'react';
import Carousel from './Carousel';
import CarouselTravel from './CarouselTravel';
import Header2 from './Header2';
import Header from './Header';
import { Animated } from "react-animated-css";

import './Header2.css';
import './Interests.css';
import camera from './images/cards/camera.png';
import snappy from './images/cards/snappy.jpg';
import danceexam from './images/cards/danceexam.png';
import deer from './images/cards/lake.jpg';
import node from './images/cards/nodegirlslondon.png';
import java from './images/cards/java.png';
import piano from './images/cards/pianocircle.png';
import hollybourne from './images/cards/hollybourne.png';
import physical from './images/cards/physicalcircle.png';
import twitter from './images/cards/twitter.png';
import google from './images/cards/google.png';
import railsgirls from './images/cards/railsgirls.png';
import athena from './images/cards/athena.png';
import ballet from './images/cards/dancecircle.png';
import spines from './images/cards/spines4.png';
import arts from './images/cards/arts.png';



const Interests = () => {


    return (

        <>

       <br />
        <br />
        <br />
        <div className="body">
          <div className="performingarts" >
              <div className="performingtext">
          <h4>The Performing Arts</h4>
          <div className="performingimages">
            <img className="physical" src={physical} alt="physicaltheatre" />
            <img className="dance" src={ballet} alt="an early dance exam" />
            <img className="piano" src={piano} alt="piano" />
    
            </div>
           <p>Having grown up taking ballet, tap, modern dance, piano, violin and speech & drama lessons, I have
            and will always have a deep appreciation for all aspects of the performing arts. 
            Taking examinations in these areas on a yearly basis meant that I spent many an hour honing these skills,
            competing in competitions, performing at concerts, including local 
            Young Musician concerts, ABRSM High Scorers Concerts, and other concerts.
            I've also performed in various dance shows and musicals, including a performance at the St John Smith's Stadium 
            in Huddersfield.
            </p>
          
            </div>
            
    
            </div>
            <hr></hr>
            <div className="bookscontainer">
              <h3 align="center">Books</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="bookshelf">
              <img src={spines} className="spines" />
              <img src={spines} className="spines" />
              <img src={spines} className="spines" />
              </div>
            <br />
            <div className="reading">
            <p>My love of reading is what led me to my previous role. While I'll read most things, I'm especially fond of autobiographies and personal development books. 
             I have also read a lot of young adult fiction and will always have a soft spot for children's books</p>
             <br />
             <h3 align="center">My Picks</h3>
        
       <br />
       <br />
       <br />
     
        <div className="books">
            <br />
            <br />
        <p><strong>Autobiographies and memoirs</strong></p>
        <ul>
            <li><strong>My Life So Far</strong> - Jane Fonda</li>
            <li><strong>When Breath Becomes Air</strong>- Paul Kalanithi</li>
                <li><strong>A Lotus Grows In The Mud</strong> - Goldie Hawn</li>
                <li><strong>Long Walk To Freedom </strong>- Nelson Mandela</li>
                 <li><strong>Home</strong>- Julie Andrews</li>   
                 <li><strong>How To Be A Woman</strong> - Caitlin Moran</li>
                 <li><strong>Out Of Africa</strong> - Karen Blixen</li>
                 <li><strong>Hope In A Ballet Shoe</strong> - Michaela DePrince</li>
                 <li><strong>Eat, Pray, Love </strong>- Elizabeth Gilbert</li>
                 <li><strong>The Girl From Aleppo</strong> - Nujeen Mustafa</li>
                 <li><strong>Lean In</strong> - Sheryl Sandberg</li>
        </ul>
        <p><strong>Mixed non-fiction</strong></p>
        <ul>
            <li><strong>Year of Wonder</strong> - Clemency Burton-Hill</li>
            <li><strong>Art Nouveau </strong>- Camilla de la Bédoyère</li>
            <li><strong>The Art of Acting </strong>- Stella Adler</li>
            <li><strong>Annie Leibovitz At Work</strong> - Annie Leibovitz</li>
            <li><strong>Spark!</strong> - Dr John R Ratey</li>
            <li><strong>Parisian Intersections</strong>- Dr Helen Abbott</li>
        </ul>
        <br />
        </div>
        <div className="books2">
            <br />
            <br />
        <p><strong>Personal development</strong></p>
        <ul>
            <li><strong>Presence </strong>- Amy Cuddy</li>
            <li><strong>#Girlboss</strong> - Sophia Amoruso</li>
            <li><strong>Big Magic </strong>- Elizabeth Gilbert</li>
            <li><strong>The Seven Habits Of Highly Effective People</strong> - Stephen Covey</li>
            <li><strong>Mindset </strong>- Carol Dweck</li>
            <li><strong>A Monk's Guide To Happiness</strong> - Gelong Thubten</li>  
        </ul>
        <br />
        <p><strong>Young adult fiction</strong></p>
        <ul>
            <li><strong>Turtles All The Way Down</strong> - John Green</li>
            <li><strong>Boy 87 </strong>- Ele Fountain</li>
            <li><strong>Lies We Tell Ourselves </strong>- Robin Talley</li>
            <li><strong>Holding Up The Universe</strong> - Jennifer Niven</li>
            </ul>
        <p><strong>Children's Books</strong></p>
        <ul>
            <li><strong>The Enchanted Wood & The Magic Faraway Tree</strong> - Enid Blyton</li>
        </ul>
        </div>
        </div>
        </div>
        <br />
        <div className="lang">
        <h4>Languages and travel</h4>
        <br />
        <div className="languages">
          <p>There is something thrilling about being able to understand and communicate in another language and having studied modern languages at university, I've had the opportunity to learn a handful of languages; French, German and Dutch and a little Spanish.</p>
            <p>Studying languages also gave me the opportunity to live and work abroad; I worked in Brittany, France for six months before moving to Heidelberg to study at Germany's
            oldest university - the Ruprecht Karls Universitaet Heidelberg. </p>
             <p>Swipe or click 'next' to see some of the other places I've been</p>
        <div className="pink3" >

        <CarouselTravel />
        </div>
        </div>
        </div>
        <hr></hr>
        <h4 align="center">Photography</h4>
        <div className="photos" >
        <br />
        <br />
        <img className="snap" src={snappy} />
        <br />
        <img className="deer" src={deer} alt="deer" />
        <br />
        <img className="snap" src={snappy} />
      
        </div>
        <div>
        <a href="https://www.flickr.com/photos/51541259@N03/">See my very amateur shots on my Flicker account</a>
       <br />
       <br />
       <br />
        </div>
        <br />
        <br />
        <hr/>
        <h4>Tech</h4>
        <br />
        <p>I try to attend tech meetups when I can</p>
        <p>Below are a few I've been to.</p>
        <div className="tech">
        <img className="node" src={node} alt="nodegirlslondon" />
        <br />
        <img className="java" src={java} alt="codebarandroiddevelopment" />
        <img className="twitter" src={twitter} alt="twitter" />
        <br />
        </div>
        <div className="tech2">
        <img className="google" src={google} alt="googlecodebar" />
        <img className="athena" src={athena} alt="athenahack" />
        <img className="railsgirls" src={railsgirls} alt="railsgirlslondon" />
        </div>
        <hr></hr>
       
        <h4>Film</h4>
        <div className="film">
            <p>I'm a huge fan of films and enjoy most genres, but here are a few of my favourites</p>
        <Carousel/>
        </div>
    
        
       </div>
        </>
    )
}

export default Interests;