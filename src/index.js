import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function for menu links
function MenuLink(props) {
  let target = '';
  if (props.target !== undefined)
    target = '_blank';
  return (<a className={"nav-link text-light " + target} href={props.link}>{props.text}</a>);
}

// function for slider bottom buttons
function SliderButton(props) {
  let name = ''
  if (props.name !== undefined)
    name = 'active'
  return (<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={props.number} className={name} />);
}

// fuction for slider images
function SliderImages(props) {
  let active = ''
  if (props.active !== undefined)
    active = 'active'
  return (<div className={"carousel-item " + active}>
    <img src={props.image} loading="lazy" className="d-block w-100" height={470} width={200} alt="..." />
    <div className="carousel-caption d-none d-md-block">
      <h5>{props.heading}</h5>
      <p className="text-capitalize">
        {props.text}
      </p>
    </div>
  </div>);
}

// function for slider previous and next slide button
function SliderPreNext(props) {
  return (<button className={props.Name} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide={props.slide}>
    <span className={props.spanclassname} aria-hidden="true" />
    <span className="visually-hidden"></span>
  </button>);
}

// function for accordion in about me section
function Accordion(props) {
  return (<div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.ariacontrol}>
        {props.heading}
      </button>
    </h2>
    <div id={props.id} className="accordion-collapse collapse text-capitalize" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">{props.text}</div>
    </div>
  </div>);
}

// function for video cards for videos section
function Videos(props) {
  return (<div className="col-lg-4 col-md-6 mb-3 d-flex align-items-stretch">
    <div className="card">
      <img src={props.image} loading="lazy" className="card-img-top rounded" alt="Card Image" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text mb-4 text-capitalize">
          {props.text1}
          <span className="h6"> {props.text2} </span>
        </p>
        <button type="button" className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target={props.target}>
          View Now
        </button>
      </div>
    </div>
  </div>);
}

// function for pop up of all videos in website
function VideosModals(props) {
  return (<div className="modal fade" id={props.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-dark">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            {props.heading}
          </h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <iframe width="100%" height={315} src={props.source} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <div className="modal-footer bg-dark">
          <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>)
}

// function for playlist section
function Playlists(props)
{
  return(<div className="col-sm-6 mb-3 mb-sm-0">
  <div className="card">
    <div className="card-body text-center">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text text-capitalize">{props.text}</p>
      <a href={props.src} className="btn btn-dark" target="_blank">Explore Playlist</a>
    </div>
  </div>
</div>);
}

// the main function
function Site() {
  return (
    <div className="bg-dark text-light">

      {/* navbar - starts from here*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary sticky-top pt-0 pb-0">
        <div className="container-fluid bg-dark pb-2 pt-2">
          <img src="./images/LogoTransparent.jpg" loading="lazy" height={50} width={50} className="me-3" />
          <a className="navbar-brand text-light" href="#carouselExampleCaptions">Jyot-Yt</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <MenuLink link='#carouselExampleCaptions' text='Home' />
              <MenuLink link='#about' text='About Me' />
              <MenuLink link='#videos' text='My Videos' />
              <MenuLink link='#Myplaylist' text='My Playlist' />
              <MenuLink link='https://www.youtube.com/@JYOTYT111' text='Subscribe Now' target='_blank' />
            </div>
          </div>
        </div>
      </nav>
      {/* navbar - ends here*/}

      {/* dummy div */}
      <div className="mb-2" />
      {/* dummy div */}

      {/* slider - starts from here*/}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <SliderButton number='0' name='active' />
          <SliderButton number='1' />
          <SliderButton number='2' />
        </div>
        <div className="carousel-inner">
          <SliderImages image='./images/EnterAWorld.jpg' heading="Go Youtube" text='enter in to my youtube channel for endless fun.' active='active' />
          <SliderImages image='./images/PlayConquer.jpg' heading="Let's Play" text='play with us, compete with others, conquer the games.' />
          <SliderImages image='./images/LetsMakeItReal.jpg' heading="Achieve Your Dreams" text="Let's make our dreams become Real." />
        </div>
        <SliderPreNext Name='carousel-control-prev' slide='prev' spanclassname='carousel-control-prev-icon' />
        <SliderPreNext Name='carousel-control-next' slide='next' spanclassname='carousel-control-next-icon' />
      </div>
      {/* slider - ends here*/}

      {/* dummy div */}
      <div className="mb-5" id="about" />
      {/* dummy div */}

      {/* About us - starts from here*/}
      <h5 className="text-center">About Me</h5>

      {/* dummy div */}
      <div className="mb-5" />
      {/* dummy div */}

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 mb-2">
            <div className="card text-center">
              <div className="card-body">
                <h6 className="text-center mb-2">Watch This</h6>
                <img src="./images/TrailerThumbnail.jpg" loading="lazy" className="card-img-top w-100 image-fluid rounded" />
                <p className="pt-2 text-center text-capitalize">
                  This is my channel trailer you can watch it for getting more
                  information about me so click on the button below to watch it.
                </p>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  View Trailer
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card text-center">
              <div className="card-header">
                <h6>Read This</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Jyot yt is a gaming youtube channel which uploads amazing
                  Gaming videos with amazing gameplay and thriller editing to
                  take your gaming expierience to another level. it will provide
                  best entertainment as well as motivation &amp; learning for new
                  players so they can perform better in game. so join with us to
                  improve your skills by practicing tips and tricks, Learn new
                  things by observing tutorials, be entertain by watching
                  gameplay and highlights. i think this much information is more
                  than enough but if you want more information just click on the
                  video to the right side. lets
                  <span className="h6">"Make It Real..."</span>
                </p>

                <div className="accordion accordion-flush" id="accordionFlushExample">

                  <Accordion id='flush-collapseOne' target='#flush-collapseOne' ariacontrol='flush-collapseOne' heading='all about videos' text='on jyot yt i am uploading amazing gaming content which includes shorts,
                        montages, full gameplays, collaborations and funny movements. on videos section i planted demo
                        videos for you.'/>
                  <Accordion id='flush-collapseTwo' target='#flush-collapseTwo' ariacontrol='flush-collapseTwo' heading='all about playlists' text='on jyot yt have many playlist which includes playlists like channel
                        trailer, funny Movements, short videos, collection videos, collaborations, montage videos and full
                        gameplay videos. i have given you some demo playlists in my playlist section for you.'/>
                  <Accordion id='flush-collapseThree' target='#flush-collapseThree' ariacontrol='flush-collapseThree' heading='all about second channel' text='my main channel is jyot yt but i also have second channel called jyot yt
                        2.0 which has awesome sort videos, unboxing videos and e-sports videos also has other content my
                        second channel has playlists like unboxing in free fire, funny shorts, short videos, e-sports,
                        collaborations you can go and checkout them also.'/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for channel trailer*/}
      <VideosModals id='exampleModal' heading='Trailer - Click On The Video To Play' source='https://www.youtube.com/embed/iD-3RVyeFUo'/>
      {/* Modal for channel trailer*/}
      {/* About us - ends here*/}

      {/* dummy div */}
      <div className="mb-5" id="videos" />
      {/* dummy div */}

      {/* videos starts from here*/}
      {/* videos line1 - starts from here*/}
      <h5 className="text-center">My Videos</h5>
      <section className="bg-dark pt-5 pb-5 shadow-sm text-center">
        <div className="container-fluid">
          <div className="row">

            <Videos image='./images/WeaponCollection.jpg' title='Weapon Collection Video' target='#exampleModal1' text1='it is a video showing all the weapon skins in my free fire
                    account including' text2='guns,throwables,launchers and melee weapons.' />
            <Videos image='./images/CarolbellsMontage.jpg' title='Carol Of The Bells - Montage Video' target='#exampleModal2' text1=' it is a montage video which shows owesome gameplay clips and
                    has thriller editing with having music' text2="'Carol Of The Bells' - by Lindsey Stirling." />
            <Videos image='/images/JyotXBriz.jpg' title='Jyot vs Briz' target='#exampleModal3' text1='it is a funny video and it is also a collaboration video with "This Is Briz" who has 100k plus subscribers on Youtube' text2='This video also contains funny memes.' />

          </div>
        </div>
      </section>

      {/* videos line2 - starts from here*/}
      <section className="bg-dark pb-5 shadow-sm text-center">
        <div className="container-fluid">
          <div className="row">
            <Videos image='./images/WTF2.jpg' title='Funny Movements Part-1' target='#exampleModal5' text1='It is a video showing some of the funny movements happened during gameplay which will make you laugh
                    it contains some funny memes also and with no background song also it is a 250 subscriber
                    special video- Part-1' />
            <Videos image='/images/WTF3.jpg' title='Funny Movements Part-2' target='#exampleModal6' text1='It is a video showing some of the funny movements happened during gameplay which will make you laugh
                    so hard it contains some funny memes also and with no background song - Part-2' />
            <Videos image='./images/WTF1.jpg' title='Funny Movements Part-3' target='#exampleModal4' text1='It is a video showing some of the funny movements happened during gameplay which will make you laugh
                    so hard it contains some funny memes also and with no background song - Part-3' />
          </div>
        </div>
      </section>

      {/* modals for all videos 1 to 6 respectively by row - starts from here*/}
      <VideosModals id='exampleModal1' heading='Weapon Collection Video' source='https://www.youtube.com/embed/BEqcAX4F7j0' />
      <VideosModals id='exampleModal2' heading='Carol Of The Bells - Montage Video' source='https://www.youtube.com/embed/qTCvxhurkbU' />
      <VideosModals id='exampleModal3' heading='Jyot vs Briz' source='https://www.youtube.com/embed/rEksHDxqPHY' />
      <VideosModals id='exampleModal5' heading='Funny Movements Part-1' source='https://www.youtube.com/embed/QLTYF3Gv2Sw' />
      <VideosModals id='exampleModal6' heading='Funny Movements Part-2' source='https://www.youtube.com/embed/NJzXSDIWtis' />
      <VideosModals id='exampleModal4' heading='Funny Movements Part-3' source='https://www.youtube.com/embed/2-JmWmI7LmY' />
      {/* modals for all videos 1 to 6 respectively by row - ends here*/}
      {/* videos - ends here*/}

      {/* my playlist - starts from here*/}
      <h5 className="text-center" id="Myplaylist">My Playlists</h5>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row pt-5">
              <Playlists title='Funny Movements' text='here is a playlist for all funny movements video which you can
                      watch for entertainment purpose click on the button below to go to playlist.' src='https://youtube.com/playlist?list=PLqIORBHWW76WvySHol5Qs99vmA8pAdYe-'/>
              <Playlists title='Montage Videos' text='here is a playlist for all killing montage videos which includes
                      one taps, clutches and also a meaningful editing click on the button below to visit playlist.' src='https://youtube.com/playlist?list=PLqIORBHWW76VeCdvgRzNBjjDIzzDhSGoN'/>
            </div>
          </div>
        </div>
      </div>
      {/* my playlist - ends here*/}

      {/* dummy div */}
      <div className="mb-5" id="videos" />
      {/* dummy div */}

      {/* footer - starts from here*/}
      <footer className="text-center bg-dark text-white mt-5 py-2">
        <p>© 2023 Jyot Yt | All rights reserved.</p>
      </footer>
      {/* footer - ends here*/}

    </div>
  );
}
root.render(<Site />);