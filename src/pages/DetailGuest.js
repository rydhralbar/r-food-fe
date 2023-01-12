import React from "react";
import '../styles/detailguest.css';
import { Link } from "react-router-dom";
import Footer from "../components/organism/Footer";
import Comment from "../components/molecules/Comment";
import FoodRecipe from "../components/organism/FoodRecipe";
import Navbar from "../components/organism/Navbar/NavbarGuest";

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

const recipe = [
  {
    title: "Chicken Kare",
    photo: "https://kurio-img.kurioapps.com/20/11/03/cc453f8b-71d7-4089-be4b-3fb597920a47.jpg",
    ingredients: ["- 1 egg", " - 2 egg", " - 3 egg", " - 4 egg"]
  }
]



function DetailGuest() {

  function loginAlert() {
    alert("Login required!")
  }

  React.useEffect(() => {
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
        {recipe.map((item) => (
          <FoodRecipe 
          title={item?.title}
          photo={item?.photo}
          ingredients={item?.ingredients} />
        ))}

        {/* <!-- Video steps --> */}
        <h2>Video Step</h2>
        <div className="videostep">
          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <button type="button" className="btn btn-primary btn-video2" data-bs-toggle="modal" data-bs-target="#modalVideo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
          </button>
          
          {/* <!-- Modal --> */}
          <div className="modal fade" id="modalVideo" tabindex="-1" aria-labelledby="modalVideoLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title fs-5" id="modalVideoLabel">Risotto</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <iframe title="Frame Video" src="https://youtube.com/embed/NKtR3KpS83w" style={{width: "50rem", height: "25rem", display: "block", margin: "auto"}}></iframe>
                </div>
              </div>
            </div>
          </div>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>
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

export default DetailGuest;