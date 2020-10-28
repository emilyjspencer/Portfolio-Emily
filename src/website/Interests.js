import React from 'react';
import Carousel from './Carousel';
import CarouselTravel from './CarouselTravel';
import Header2 from './Header2';
import Header from './Header';
import { Animated } from "react-animated-css";

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
import arts from './images/cards/arts.png';



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
            in Huddersfield.
            </p>
            </div>
            </div>
            <div className="bookscontainer">
              <h3 align="center">Books</h3>
              <br />
              <div className="bookshelf">
              <img src={spines} className="spines" /><img src={spines} className="spines" /><img src={spines} className="spines" /><img src={spines} className="spines" />
              </div>
            <br />
            <div className="reading">
            <p>My love of reading led me to my previous role. While I'll read most things, I'm especially fond of autobiographies and personal development books. 
             I have also read a lot of young adult fiction and will always have a soft spot for children's books</p>
             <br />
             <h3 align="center">My Picks</h3>
             <br />
        <div className="books">
            <br />
            <br />
            <div className="memoirsmixed">
            <div className="memoirs">
        <p><strong>Autobiographies and memoirs</strong></p>
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
                 <li><strong>The Girl From Aleppo</strong> - Nujeen Mustafa</li>
                 <li><strong>Lean In</strong> - <a href="https://www.instagram.com/sherylsandberg/?hl=en">Sheryl Sandberg</a></li>
        </ul>
        </div>
        <div className="mixed">
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
        <p><strong>Personal development</strong></p>
        <ul>
            <li><strong>Presence </strong>- <a href="https://www.amycuddy.com/">Amy Cuddy</a></li>
            <li><strong>#Girlboss</strong> - <a href="https://www.sophiaamoruso.com/">Sophia Amoruso</a></li>
            <li><strong>Big Magic </strong>- <a href="https://www.elizabethgilbert.com/">Elizabeth Gilbert</a></li>
            <li><strong>The Seven Habits Of Highly Effective People</strong> - Stephen Covey</li>
            <li><strong>Mindset </strong>- <a href="https://profiles.stanford.edu/carol-dweck">Carol Dweck</a></li>
            <li><strong>A Monk's Guide To Happiness</strong> - <a href="https://www.gelongthubten.com/">Gelong Thubten</a></li>  
        </ul>
        </div>
        <br />
        <div className="ya">
        <p><strong>Young adult fiction</strong></p>
        <ul>
            <li><strong>Turtles All The Way Down</strong> - <a href="https://www.johngreenbooks.com/">John Green</a></li>
            <li><strong>Boy 87 </strong>- Ele Fountain</li>
            <li><strong>Lies We Tell Ourselves </strong>- <a href="https://robintalley.com/">Robin Talley</a></li>
            <li><strong>Holding Up The Universe</strong> - Jennifer Niven</li>
            </ul>
            </div>
            <div className="children">
        <p><strong>Children's Books</strong></p>
        <ul>
            <li><strong>The Enchanted Wood & The Magic Faraway Tree</strong> - <a href="https://www.enidblytonsociety.co.uk/">Enid Blyton</a></li>
        </ul>
        </div>
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
        <div className="photos">
            <br />
        <h4 align="center">Photography</h4>
        <br />
        <br />
        <br />
        <br />
        <br />
        <img className="deer" src={deer} alt="deer" 
           onClick={() =>
           flickrHandler("https://www.flickr.com/photos/51541259@N03/")
         }
          title="flickr"
          />
          <p>Click on the photo to see my very amateur shots</p>
        <br />
        <br />
        <br />
        <br />
        <br />
       
        <div className="photostext">
        
       <br />
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus, tellus quis elementum imperdiet, nisi enim pellentesque elit, 
           sit amet maximus tellus est nec lorem. Cras velit mi, fermentum eu rhoncus sit amet, posuere vel justo. Nulla congue mi et euismod viverra.
            Aenean vitae nunc pulvinar, consectetur turpis pretium, imperdiet arcu. Aenean eget neque ipsum. Curabitur id urna ligula. Nulla vel cursus neque,
             quis sollicitudin lorem. Nullam rutrum condimentum tincidunt. Sed dapibus fermentum diam, a pretium ex vehicula a. Curabitur consectetur metus purus.

Sed interdum magna ac convallis mattis. Cras malesuada luctus quam, ut sagittis lacus euismod nec. Mauris tincidunt in elit in sollicitudin. Nullam in lacinia nisi, i
n fermentum purus. Maecenas mattis dignissim sapien ut lobortis. Mauris at feugiat ante, ac viverra ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.
 Duis porta turpis nec imperdiet ornare. Duis eget molestie ligula. Integer posuere dictum diam id finibus. Nullam sagittis sollicitudin dui, ac malesuada augue pharetra sit amet. 
 Fusce ornare purus magna, id porta est elementum mattis. Ut blandit mi justo, at ullamcorper magna elementum ut. Suspendisse sit amet nibh sed libero pulvinar luctus ac a ante. Mauris imperdiet ac metus iaculis venenatis.
</p>
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