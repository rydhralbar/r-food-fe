import React, { useState } from "react";
import '../styles/detailguest.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/organism/Footer";
import Comment from "../components/molecules/Comment";
import FoodRecipe from "../components/organism/FoodRecipe";
import Navbar from "../components/organism/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";

const user = [
  {
    name: "Garneta Sharina",
    comment: "This is the best recipe I've ever seen",
    picture: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/06/ustv-the-walking-dead-season-5-michonne.jpg?crop=0.750xw:1.00xh;0.150xw,0&resize=480:*"
  },
  {
    name: "Chef X",
    comment: "Good",
    picture: "https://comicvine.gamespot.com/a/uploads/original/11133/111335576/6444011-dsox8zevaaehyo_.jpg"
  }
]



function Detail() {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const {recipe} = useSelector((state) => state);
  const navigate = useNavigate();
  console.log({recipe})
  // let [menu, setMenu] = React.useState([]);
  // let [isLoading, setIsLoading] = React.useState(true);
  // const { state } = useLocation()

  function loginAlert() {
    alert("Login required!")
  }

  React.useEffect(() => {
    // console.log({state})
    // axios.get(`${process.env.REACT_APP_URL_BACKEND}/recipes?sort=title_asc`).then(({data}) => {
    //   console.log(data?.data)
    //   setMenu(data?.data)
    // })
    // .catch(() => setMenu([])).finally(() => setIsLoading(false))

    if(!recipe?.data){
      navigate("/")
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        return document.querySelector(".navbar").classList.add("navbar-background");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("navbar-background");
      }
    });
  }, []);


  return (
    <div>
      {/* <!-- navbar start --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      <section id="recipe" style={{display: "flex", justifyContent: "center"}}>
      <div>
          <FoodRecipe 
          title={recipe?.data?.title}
          photo={recipe?.data?.photo}
          ingredients={recipe?.data?.ingredients}
          />

        {/* <!-- Video steps --> */}
        <h2>Video Step</h2>
        <div className="videostep">
          <button onClick={openModal} className="video_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
            {modal ? (
            <section className="modal__bg">
              <div className="modal__align">
                <div className="modal__content" modal={modal}>
                  {/* <IoCloseOutline
                    className="modal__close"
                    arial-label="Close modal"
                    onClick={setModal}
                  /> */}
                  <div className="modal__video-align">
                    {videoLoading ? (
                      <div className="modal__spinner">
                        {/* <BiLoaderAlt
                          className="modal__spinner-style"
                          fadeIn="none"
                        /> */}
                      </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/NKtR3KpS83w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
          </button>

          <button onClick={openModal} className="video_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
            {modal ? (
            <section className="modal__bg">
              <div className="modal__align">
                <div className="modal__content" modal={modal}>
                  {/* <IoCloseOutline
                    className="modal__close"
                    arial-label="Close modal"
                    onClick={setModal}
                  /> */}
                  <div className="modal__video-align">
                    {videoLoading ? (
                      <div className="modal__spinner">
                        {/* <BiLoaderAlt
                          className="modal__spinner-style"
                          fadeIn="none"
                        /> */}
                      </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/NKtR3KpS83w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
          </button>

          <button onClick={openModal} className="video_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
            {modal ? (
            <section className="modal__bg">
              <div className="modal__align">
                <div className="modal__content" modal={modal}>
                  {/* <IoCloseOutline
                    className="modal__close"
                    arial-label="Close modal"
                    onClick={setModal}
                  /> */}
                  <div className="modal__video-align">
                    {videoLoading ? (
                      <div className="modal__spinner">
                        {/* <BiLoaderAlt
                          className="modal__spinner-style"
                          fadeIn="none"
                        /> */}
                      </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/NKtR3KpS83w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
          </button>
        </div>

        <div className="comment" style={{marginBottom: "30px"}}>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment :"></textarea>
          <Link onClick={loginAlert}><button type="button" className="btn btn-warning">Send</button></Link>
        </div>
        
        {/* <!-- user comment --> */}
        <div className="user-comment">
          <h2 className="comment-text">Comment</h2>
          <div>
            {user.map((item) => (
              <Comment 
              name={item?.name}
              comment={item?.comment}
              picture={item?.picture} />
            ))}
          </div>
      </div>
      </div>
      </section>

      {/* <!-- footer start --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  )
}

export default Detail;