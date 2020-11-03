import React from 'react';

import './Photography.css';

import deer from './images/cards/lake.jpg';


const Photography = () => {

    const flickrHandler = (url) => {
        window.open(url, "_blank");
      };

    return (
        <>
        <div className="photos">
        <div className="photostext">
            <h3 id="photoheader" align="center">Photography</h3>
       <p>From the moment I was handed a camera (a Christmas present from my father when I was twelve years old), I've enjoyed capturing moments in time through the lens, whether
           that be with a phone, an SLR or an old-school digital model.
           I enjoy, as many others do, looking back through old photographs of places I've been, people I've met,
           events I've been to or, simply moments captured with friends and family.
           I'm especially fond of the work of <a href="https://www.adambirdphotography.com/">Adam Bird</a> and <a href="http://www.artnet.com/artists/annie-leibovitz/">Annie Leibovitz</a> - renowned for her portraits of public figures.
         </p>
         <br />
         <br />
         <br />
         <p className="lagerfeldquote"><strong><em>"What I like about photographs is that they capture a moment that’s gone forever, <br />
         impossible to reproduce."</em></strong> ~ Karl Lagerfeld</p>
        </div>
        <div className="photoscontainer">
        <figure>
        <img className="deer" src={deer} alt="deer" 
           onClick={() =>
           flickrHandler("https://www.flickr.com/photos/51541259@N03/")
         }
          title="flickr"
          />
        <figcaption className="caption"><strong>Click on the image to see some of my amateur shots</strong></figcaption>
        </figure> 
       </div>
        </div>
       <div>
        </div>
        </>
    )
}


export default Photography;