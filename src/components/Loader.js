import React, { useRef, useEffect, Fragment } from 'react';
import gsap from 'gsap'

const Loader = () => {
   // Added References to my individual circle objects in my SVG
   const blue = useRef(null);
   const red = useRef(null);
   const yellow = useRef(null);
   const green = useRef(null);
   
   const tl = gsap.timeline() //creating my timeline reference 
   useEffect(() => {
      tl.pause() //start the animation in a paused state
      //animating the blue and yellow at the same time, to repeat forever
      tl.fromTo([blue.current, yellow.current], {y: 20}, {y: -20, yoyo: true, repeat: -1})
      //animating the red and green at the same time, to repeat forever
      tl.fromTo([red.current, green.current], {y: -20}, {y: 20, yoyo: true, repeat: -1}, "<")
   })

   return (
      <Fragment>
         <svg viewBox="0 0 150 33.2" width="180" height="150">
            {/* Added References to my individual circle objects in my SVG */}
            <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
            <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
            <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
            <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
         </svg>
         {/* Added ability to play and pause */}
         <button onClick={() => tl.play()}>Play</button>
         <button onClick={() => tl.pause()}>Pause</button>
      </Fragment>
   );
}

export default Loader;
