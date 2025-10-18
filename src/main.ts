import './cylinder/cylinder.css';
import './circle/circle.css';
import './tube/tube.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import { Cylindar } from './cylinder/cylinder';
import { Circle } from './circle/circle';
import { Tube } from './tube/tube';

class App {
  smoother!: ScrollSmoother;
  cylindar!: Cylindar;
  circle!: Circle;
  tube!: Tube;

  constructor() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    this.init();
    this.addEventListeners();
  }

  init(): void {
    this.setupScrollSmoother();
    this.initAllEffects();
  }

  setupScrollSmoother(): void {
    this.smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }

  initAllEffects(): void {
    this.cylinder = new Cylindar();
    this.circle = new Circle();
    this.tube = new Tube();
  }

  addEventListeners(): void {
    window.addEventListener('resize', () => {
      this.cylinder.resize();
      this.circle.resize();
      this.tube.resize();
    });
  }
}

new App();
