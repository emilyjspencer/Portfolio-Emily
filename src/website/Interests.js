import React from 'react';
import Carousel from './Carousel';
import CarouselTravel from './CarouselTravel';
import Header2 from './Header2';
import Header from './Header';
import { Animated } from "react-animated-css";
import Map from './Map';

import './Header2.css';
import './Interests.css';
import memoirs from './images/cards/memoirs.png';
import memoirs2 from './images/cards/memoirs2.png';
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
import spines from './images/cards/spines6.png';
import spines2 from './images/cards/spines7.png';
import arts from './images/cards/arts.png';
import nodecircle from './images/cards/nodecircle.png';
import javacircle from './images/cards/javacircle.png';
import railscircle from './images/cards/railscircle.png';
import twittercircle from './images/cards/twittercircle.png';
import athenacircle from './images/cards/athenacircle.png';
import googlecircle from './images/cards/googlecircle.png';



const Interests = () => {

    const flickrHandler = (url) => {
        window.open(url, "_blank");
      };

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
            I've also performed in various dance shows and musicals, including a performance at the John Smith's Stadium 
            in Huddersfield.</p>
            </div>
            </div>
            <div className="bookscontainer">
                <br />
              <h3 align="center">Books</h3>
              <br />
              <div className="bookshelf">
              <img src={spines2} className="spines" /><img src={spines2} className="spines" /><img src={spines2} className="spines2" />
              </div>
            <div className="reading">
                <br />
                <br />
            <p>My love of reading is what led me to my previous role. While I take delight in getting stuck into a good novel, I'm more of a fan of non-fiction, especially autobiographies and personal development books. 
             My previous role also dictated much of what I read during that time, so I have read plenty of young adult fiction books, from authors as varied as John Green, Holly Bourne, and Rainbow Rowell to Veronica Roth, 
             Patrick Ness, Nicola Yoon.</p>
             <br />
             <h5 align="center">My Picks</h5>
        <div className="books">
            <br />
            <br />
            <div className="memoirsmixed">
            <div className="memoirs">
                <br />
                <br />
        <p><strong>Memoirs</strong></p>
        <ul>
            <li><strong>My Life So Far</strong> - <a href="https://www.janefonda.com/">Jane Fonda</a></li>
            <li><strong>When Breath Becomes Air</strong>- Paul Kalanithi</li>
                <li><strong>A Lotus Grows In The Mud</strong> - Goldie Hawn</li>
                <li><strong>Long Walk To Freedom </strong>- Nelson Mandela</li>
                 <li><strong>Home</strong>- Julie Andrews</li>   
                 <li><strong>How To Be A Woman</strong> - <a href="https://www.caitlinmoran.co.uk/">Caitlin Moran</a></li>
                 <li><strong>Out Of Africa</strong> - <a href="http://www.karenblixen.com/">Karen Blixen</a></li>
                 <li><strong>Hope In A Ballet Shoe</strong> - <a href="http://www.michaeladeprince.com/about-1">Michaela DePrince</a></li>
                 <li><strong>Eat, Pray, Love </strong>- <a href="https://www.elizabethgilbert.com/">Elizabeth Gilbert</a></li>
                 <li><strong>The Girl From Aleppo</strong> 
                 - Nujeen Mustafa</li>
        </ul>
        </div>
        <br />
        <div className="mixed">
            <br />
            <br />
            <br />
        <p><strong>Mixed non-fiction</strong></p>
        <ul>
            <li><strong>Year of Wonder</strong> - Clemency Burton-Hill</li>
            <li><strong>Art Nouveau </strong>- <a href="http://camilladelabedoyere.co.uk/">Camilla de la Bédoyère</a></li>
            <li><strong>The Art of Acting </strong>- <a href="https://stellaadler.com/">Stella Adler</a></li>
            <li><strong>Annie Leibovitz At Work</strong> - <a href="https://www.instagram.com/annieleibovitz/?hl=en">Annie Leibovitz</a></li>
            <li><strong>Spark!</strong> - Dr John R Ratey</li>
            <li><strong>Parisian Intersections</strong>- <a href="https://www.birmingham.ac.uk/staff/profiles/languages/abbott-helen.aspx">Dr Helen Abbott</a></li>
        </ul>
        </div>
        </div>
        <br />
        </div>
        <div className="books2">
            <br />
            <br />
            <div className="personal">
                <br />
                <br />
                <br />
        <p><strong>Personal development</strong></p>
        <ul>
            <li><strong>Presence </strong>- <a href="https://www.amycuddy.com/">Amy Cuddy</a></li>
            <li><strong>#Girlboss</strong> - <a href="https://www.sophiaamoruso.com/">Sophia Amoruso</a></li>
            <li><strong>Big Magic </strong>- <a href="https://www.elizabethgilbert.com/">Elizabeth Gilbert</a></li>
            <li><strong>The Seven Habits Of Highly Effective People</strong> - Stephen Covey</li>
            <li><strong>Mindset </strong>- <a href="https://profiles.stanford.edu/carol-dweck">Carol Dweck</a></li>
            <li><strong>A Monk's Guide To Happiness</strong> - <a href="https://www.gelongthubten.com/">Gelong Thubten</a></li> 
            <li><strong>Lean In</strong> - <a href="https://www.instagram.com/sherylsandberg/?hl=en">Sheryl Sandberg</a></li> 
        </ul>
        </div>
        <br />
        <div className="ya">
            <br />
            <br />
            <br />
        <p><strong>Young adult fiction</strong></p>
        <ul>
            <li><strong>Turtles All The Way Down</strong> - <a href="https://www.johngreenbooks.com/">John Green</a></li>
            <li><strong>Boy 87 </strong>- Ele Fountain</li>
            <li><strong>Lies We Tell Ourselves </strong>- <a href="https://robintalley.com/">Robin Talley</a></li>
            <li><strong>Holding Up The Universe</strong> - Jennifer Niven</li>
            </ul>
        <p><strong>Children's Books</strong></p>
        <ul>
            <li><strong>The Enchanted Wood</strong>- Enid Blyton</li>
            <li><strong>The Magic Faraway Tree</strong> - <a href="https://www.enidblytonsociety.co.uk/">Enid Blyton</a></li>
        </ul>
        <br />
        <br />
       
        <br />
        <br />
        </div>
        <div className="bookshelf">
            <br />
            <br />
            <br />
              <img src={spines2} className="spines" /><img src={spines2} className="spines" /><img src={spines2} className="spines2" />
              </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="lang">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <h4>Languages and travel</h4>
        <br />
        <div className="languages">
          <p>There is something thrilling about being able to understand and communicate in another language and having studied modern languages at university, I've had the opportunity to learn a handful of languages; French, German and Dutch and a little Spanish.</p>
            <p>Studying languages also gave me the opportunity to live and work abroad; I worked in Brittany, France for six months before moving to Heidelberg to study at Germany's
            oldest university - the Ruprecht Karls Universitaet Heidelberg. </p>
             <p>Swipe or click 'next' to see some of the other places I've been</p>
        <div className="pink3" >

        <CarouselTravel />
        <br />
     
        </div>
        </div>
        </div>

        <br />
        <div className="pinkstrip">
        </div>
        <div className="photos">
        <div className="photostitle">
       
        <h4 align="center">Photography</h4>
        </div>
        <br />
        <div className="photostext">
        
       <br />
       <p>From the moment I was handed a camera (a Christmas present from my father when I was twelve years old), I've enjoyed capturing moments in time through the lens of a camera, whether
           that be a on phone, an SLR or an old-school digital model.
           I enjoy, as I'm sure many others do, looking back through old photographs of places I've been, people I've met,
           events I've been to or, simply moments captured with friends and family.
           I'm especially fond of the work of <a href="http://www.artnet.com/artists/annie-leibovitz/">Annie Leibovtiz</a> - renowned for her portraits of public figures and <a href="https://www.adambirdphotography.com/">Adam Bird</a>
           <br />
           <br />
           Click on the photograph to see some of my (admittedly amateur shots)
         </p>


</div>
        <br />
        <br />
        <br />
        <br />
        <div className="photoscontainer">
        <img className="deer" src={deer} alt="deer" 
           onClick={() =>
           flickrHandler("https://www.flickr.com/photos/51541259@N03/")
         }
          title="flickr"
          />
        <br />
        <br />
       
    
</div>
       <br />
       <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       <br />
        <br />
        <br />
        <br />
        <br />
        </div>
        <br />
       <div>
    
       
        </div>
        <hr/>
        <div className="techie">
        <h4>Tech</h4>
        <br />
        <p>I try to attend tech meetups when I can</p>
        <p>Below are a few I've been to.</p>
       <div className="tech">
        <img className="nodecircle" src={nodecircle} alt="nodegirlslondon" />
        <br />
        <img className="javacircle" src={javacircle} alt="codebarandroiddevelopment" />
        <img className="twittercircle" src={twittercircle} alt="twitter" />
        <br />
        <br />
        <br />
        </div>
        <div className="tech2">
        <img className="googlecircle" src={googlecircle} alt="googlecodebar" />
        <img className="athenacircle" src={athenacircle} alt="athenahack" />
        <img className="railscircle" src={railscircle} alt="railsgirlslondon" />
        </div>
       
        <hr></hr>
       
        <h4>Film</h4>
        <div className="film">
            <p>I'm a huge fan of films and enjoy most genres, but here are a few of my favourites</p>
        <Carousel/>
        </div>
    
        </div>
       </div>
        </>
    )
}

export default Interests;