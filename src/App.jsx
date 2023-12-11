import './App.css'
import NavBar from './components/ui/NavBar/NavBar.jsx'
import Hero from './components/ui/Hero/Hero.jsx'
import CursorFollower from "./components/ui/CursorFollower/CursorFollower.jsx";
import SplitType from "split-type";
import {gsap} from "gsap";

const ourText = new SplitType('p.reveal-text', { types: 'chars' })
const chars = ourText.chars
function App() {
    gsap.fromTo(
        chars,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2,
            ease: 'power4.out',
        }
    )

    gsap.set('.follower',{xPercent:-50,yPercent:-50});
    gsap.set('.cursor',{xPercent:-50,yPercent:-50});

    let follow = document.querySelector('.follower');
    let cur = document.querySelector('.cursor');

    window.addEventListener('mousemove',e => {
        gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
        gsap.to(follow,0.9,{x:e.clientX,y:e.clientY});
    });



    return (
      <>
          <NavBar/>
          <Hero />
          <CursorFollower/>
      </>
  )
}

export default App
