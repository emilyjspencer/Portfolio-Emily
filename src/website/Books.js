import React from 'react';

import './Books.css'
import spines7 from './images/cards/spines7.png';
import rose from './images/cards/rose.svg';

const Books = () => {

    return (
        <>
        <div className="bookscontainer">
        <div className="bookstitle">
          <h3 className="booksh3" align="center">Books</h3>
        </div>
        <div className="bookshelf">
          <img src={spines7} className="spines" /><img src={spines7} className="spines" /><img src={spines7} className="spines2" />
        </div>
        <br />
        <br />
        <p className="readingparagraph">My love of reading is what led me to my previous role. While I enjoy getting stuck into a good novel, I prefer to read non-fiction, especially autobiographies and personal development books. 
        My previous role also dictated much of what I read during a two-year period, so I have read plenty of young adult fiction books, from authors as varied as <strong>John Green</strong>, <strong>Holly Bourne</strong>,and <strong>Rainbow Rowell</strong> to <strong>Veronica Roth</strong>, 
        <strong> Patrick Ness</strong>, and <strong>Nicola Yoon</strong>. Some favourites:</p>
        <br />
        <br />
        <br />
        <div className="memoirspersonal">
        <div className="memoirs">
        <p className="jane"><strong>Memoirs</strong></p>
        <ul className="memoirslist">
          <li><strong>My Life So Far</strong> - <a href="https://www.janefonda.com/">Jane Fonda</a></li>
          <li><strong>When Breath Becomes Air</strong>- Paul Kalanithi</li>
          <li><strong>A Lotus Grows In The Mud</strong> - <a href="https://mindup.org/about/">Goldie Hawn</a></li>
          <li><strong>Long Walk To Freedom </strong>- Nelson Mandela</li>
          <li><strong>The Girl From Aleppo</strong> 
         - <a href="https://www.unhcr.org/uk/nujeen-mustafa.html">Nujeen Mustafa</a></li>  
           <li><strong>How To Be A Woman</strong> - <a href="https://www.caitlinmoran.co.uk/">Caitlin Moran</a></li>
           <li><strong>Out Of Africa</strong> - <a href="http://www.karenblixen.com/">Karen Blixen</a></li>
           <li><strong>Hope In A Ballet Shoe</strong> - <a href="http://www.michaeladeprince.com/about-1">Michaela DePrince</a></li>
           <li><strong>Home</strong>- Julie Andrews</li> 
           <li><strong>Eat, Pray, Love </strong>- <a href="https://www.elizabethgilbert.com/">Elizabeth Gilbert</a></li>       
        </ul>
        <img src={rose} className="rosememoirs" />
        </div>
        <br />
        <div className="personal">
        <br />
        <br />
        <br />
        <p className="amycuddy"><strong>Personal development</strong></p>
        <ul className="personallist">
          <li><strong>Presence </strong>- <a href="https://www.amycuddy.com/">Amy Cuddy</a></li>
          <li><strong>#Girlboss</strong> - <a href="https://www.sophiaamoruso.com/">Sophia Amoruso</a></li>
          <li><strong>Big Magic </strong>- <a href="https://www.elizabethgilbert.com/">Elizabeth Gilbert</a></li>
          <li><strong>A Monk's Guide To Happiness</strong> - <a href="https://www.gelongthubten.com/">Gelong Thubten</a></li>
          <li><strong>The Seven Habits Of Highly Effective People</strong> - Stephen Covey</li>
          <li><strong>Mindset </strong>- <a href="https://profiles.stanford.edu/carol-dweck">Carol Dweck</a></li> 
          <li><strong>Lean In</strong> - <a href="https://www.instagram.com/sherylsandberg/?hl=en">Sheryl Sandberg</a></li> 
       </ul>
       <img src={rose} className="rosepersonal" />
       </div>
       </div>
       <br /> 
       <div className="mixedya">
       <br />
       <br />
       <br />
       <div className="mixed">
        <br />
        <br />
        <br />
        <p className="clemency"><strong>Mixed non-fiction</strong></p>
        <ul className="mixedlist">
          <li><strong>Year of Wonder</strong> - <a href="https://www.instagram.com/clemencybh/?hl=en">Clemency Burton-Hill</a></li>
          <li><strong>Art Nouveau </strong>- <a href="http://camilladelabedoyere.co.uk/">Camilla de la Bédoyère</a></li>
          <li><strong>The Art of Acting </strong>- <a href="https://stellaadler.com/">Stella Adler</a></li>
          <li><strong>Annie Leibovitz At Work</strong> - <a href="https://www.instagram.com/annieleibovitz/?hl=en">Annie Leibovitz</a></li>
          <li><strong>Spark!</strong> - <a href="http://www.johnratey.com/">Dr John R Ratey</a></li>
          <li><strong>Parisian Intersections</strong>- <a href="https://www.birmingham.ac.uk/staff/profiles/languages/abbott-helen.aspx">Professor Helen Abbott</a></li>
        </ul>
        <img src={rose} className="rosemixed" />
       </div>
       <br />
       <div className="ya">
       <br />
       <br />
       <br />
       <p className="john"><strong>Young adult fiction</strong></p>
       <ul className="yalist">
         <li><strong>Turtles All The Way Down</strong> - <a href="https://www.johngreenbooks.com/">John Green</a></li>
         <li><strong>Boy 87 </strong>- <a href="https://elefountainpen.com/about-me-2/">Ele Fountain</a></li>
         <li><strong>Lies We Tell Ourselves </strong>- <a href="https://robintalley.com/">Robin Talley</a></li>
         <li><strong>Holding Up The Universe</strong> -<a href="https://www.jenniferniven.com/">Jennifer Niven</a></li>
       </ul>
       <br />
       <p className="enid"><strong>Children's Books</strong></p>
       <ul className="childrenslist">
         <li><strong>The Enchanted Wood</strong>- Enid Blyton</li>
         <li><strong>The Magic Faraway Tree</strong> - <a href="https://www.enidblytonsociety.co.uk/">Enid Blyton</a></li>
       </ul>
       <img src={rose} className="roseya" />
       </div>
       <hr />
       <div className="pinkstrip"></div> 
       </div>
       <hr />
       </div>
       </>
       )
    }


export default Books;