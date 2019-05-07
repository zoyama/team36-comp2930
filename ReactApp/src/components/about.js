import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
<<<<<<< HEAD
import View_art_but from './view_art_but.js'
import { CSSTransition } from 'react-transition-group'
import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'
import Zach from './images/zach_mug.png'
import Alec from './images/alec_mug.png'
import Joel from './images/joel_mug.png'
import Manuel from './images/manuel_mug.png'
import Paolo from './images/paolo_mug.png'
import Standards from './images/ecostandards.jpg'
import Konami from './konami.js'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true,
    }
  }
  render() {
    const test = this.state
    return (
      <div id="holder">
        <nav class="navbar navbar-expand-md fixed-top">
          <div class="container">
            <div class="navbar-collapse collapse nav-content order-2">
              <div class="row mx-auto">
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    Environment
                  </button>
                </div>
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    Politics
                  </button>
                </div>
              </div>
            </div>
            <div class="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-2">
              <a class="navbar-brand" href="#">
                <Image src={Logo} className="Logo_Image" fluid rounded />
              </a>
              <button
                id="mobile-nav-button"
                class="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target=".nav-content"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
            </div>
            <div class="ml-auto navbar-collapse collapse nav-content order-3 order-md-3">
              <div class="row mx-auto">
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    About
                  </button>
                </div>
                <div class="col-md-6">
                  <button
                    class="btn btn-outline-success nav-option"
                    type="button"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div id="main-content" class="container">
          <h1 class="font-el">What is VEN?</h1>
          <p>
            VEN, short for <i>Vancouver Eco News</i>, is a Vancouver-based news
            aggregator that collects articles on the environment from our
            various trusted sources, and places them all in one webpage for
            easy, comfy viewing! You may also anonymously chat about these
            articles with other Vancouverites using VEN’s built in commenting
            functionality!
          </p>

          <p>
            This website was built using HTML5, CSS3, JavaScript, Bootstrap and
            ReactJS on the front-end, while MongoDB and NodeJS were used for the
            back-end. Our website is hosted on Amazon Web Services. It was also
            specifically designed for BCIT’s second-term Projects Course, which
            was sponsored by the folks at EcoCity.
          </p>

          <h1 class="font-el">Our Mission</h1>
          <p>
            Vancouver Eco News was created so that Vancouverites (and others
            around the world) could easily keep up with all of the eco-based
            news that our city has to offer. Normally, if one is concerned with
            environmental topics, it can be a pain to jump from website to
            website to find out that is happening with our environment.
          </p>

          <p>
            We hope to alleviate those problems with VEN- your local news
            aggregate for all things green! With all of these articles condensed
            onto one website, it’ll be far easier to see the bigger picture of
            our environment, and how we fit into EcoCity’s standards for a truly
            green city.
          </p>

          <a href="ecostandards.jpg">
            <Image
              src={Standards}
              className="person-mug mx-auto d-block"
              alt="Eco Standards"
              fluid
              rounded
            />
          </a>

          <p>
            Only with proper knowledge can we truly make Vancouver a true
            EcoCity. Be sure to check VEN daily to see Vancouver’s current
            status, and perhaps learn what you can do to help our environment-
            every little bit helps!
          </p>

          <h1 class="font-el">The People of VEN</h1>
          <p>Here is the team of nerds that worked on VEN.</p>
          <div class="row">
            <div class="col-md-4">
              <h2 class="font-el text-center">Manuel</h2>
              <Image
                src={Manuel}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Manuel is a taekwondo enthusiast and instructor, who now
                practices web development at BCIT. He has a passion for gaming
                and anime, and also enjoys combat sports and exercise.
              </p>
            </div>
            <div class="col-md-4">
              <h2 class="font-el text-center">Joel</h2>
              <Image
                src={Joel}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Joel is a hard worker who did labour jobs for three years before
                coming to BCIT so that he could join the growing industry of
                programmers. He’s a fan of gaming, especially platformer games.
              </p>
            </div>
            <div class="col-md-4">
              <h2 class="font-el text-center">Paolo</h2>
              <Image
                src={Paolo}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Paolo is fresh out of highschool, and he aspires to become a
                fully-fledged game developer, and is fascinated by the games
                industry and all of its happenings. For now though, he is more
                than happy to study at BCIT.
              </p>
            </div>
            <div class="col-md-4">
              <h2 class="font-el text-center">Alec</h2>
              <Image
                src={Alec}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Alec is an approachable person that loves to learn and work. He
                strives to learn new things every day, and become the best that
                he can be. In his spare time, he loves to hang out with friends
                or play video games like DotA.
              </p>
            </div>
            <div class="col-md-4">
              <h2 class="font-el text-center">Zachary</h2>
              <Image
                src={Zach}
                className="Mug_Image"
                alt="Mugshot of Person"
                fluid
                rounded
              />
              <p>
                Zachary is the product owner of Vancouver Eco News. He’s quite
                active, playing plenty of sports- specifically, basketball and
                soccer. In his spare time, he also enjoys playing tabletop games
                with his friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
=======
import Alert from 'react-bootstrap/Alert'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="root">

        <div id="holder">

            <div id="about-us" class="container">
              <h1 class="font-el">Who is VEN?</h1>
              <p>We're a bunch of nerds, who specialize in makin' memes and designin' themes.</p>

              <h2 class="font-el">Our Mission</h2>
              <p>We wish to conquer the earth or something.</p>

              <h2 class="font-el">The People of VEN</h2>
              <p>Here is the team of nerds that worked on VEN.</p>
              <div class="row">
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Manuel Andaya</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" />
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Joel Colussi</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Paolo Del Rio</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Alec Martin</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
                <div class="col-md-4 person-id">
                  <h3 class="font-el">Zachary Oyama</h3>
                  <img src="https://dummyimage.com/200x200/000/fff&text=Person" class="person-mug" alt="Mugshot of Person"/>
                        <p>Person is a...</p>
                </div>
              </div>
            </div>
        </div>


        </div>
        )
      }
    }
    
    export default LandingPage
>>>>>>> 9307d10449edc451eb492830efc15c0b80b753e0