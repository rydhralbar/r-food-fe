import React, { useEffect, useState } from "react";
import "../styles/detail.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/organism/Footer";
import Comment from "../components/molecules/Comment";
import FoodRecipe from "../components/organism/FoodRecipe";
import Navbar from "../components/organism/Navbar";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

const user = [
  {
    name: "Garneta Sharina",
    comment: "This is the best recipe I've ever seen",
    picture:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/06/ustv-the-walking-dead-season-5-michonne.jpg?crop=0.750xw:1.00xh;0.150xw,0&resize=480:*",
  },
  {
    name: "Chef X",
    comment: "Good",
    picture:
      "https://comicvine.gamespot.com/a/uploads/original/11133/111335576/6444011-dsox8zevaaehyo_.jpg",
  },
];

const Detail = () => {
  const [videoLinks, setVideoLinks] = useState([]);

  const data = useSelector((state) => state.recipe);
  const navigate = useNavigate();

  const profile = useSelector((state) => state.profile);

  const recipe = data?.data?.payload;

  const loginAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Login required !",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc720",
    });
  };

  const maintenance = () => {
    Swal.fire({
      icon: "error",
      title: "This feature is currently under maintenance !",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc720",
    });
  };

  useEffect(() => {
    if (!data) {
      navigate("/");
    }

    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipe-video`)
      .then((res) => {
        const video = res?.data?.data?.filter(
          (item) => item?.recipe_id === recipe?.id
        );
        setVideoLinks(video);
      })
      .catch((err) => console.log(err));

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        return document
          .querySelector(".navbar")
          .classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);

  return (
    <div>
      <Navbar />

      <section
        id="recipe"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <FoodRecipe
            title={recipe?.title}
            photo={recipe?.photo}
            ingredients={recipe?.ingredients}
          />

          <div>
            <h2 className="video-text">Video Step</h2>
            <div className="videostep">
              {videoLinks.map((item, key) => (
                <>
                  <button
                    className="video_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#video-step-modal"
                    key={key}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                    </svg>
                  </button>
                  <div
                    className="modal fade"
                    id="video-step-modal"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content" style={{ height: "90vh" }}>
                        <div className="modal-body">
                          <iframe
                            width="100%"
                            height="100%"
                            src={item?.video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="comment-column" style={{ marginBottom: "30px" }}>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Comment :"
            ></textarea>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                if (profile?.profile?.payload) {
                  maintenance();
                }
              }}
              disabled={!profile?.profile?.payload}
            >
              Send
            </button>
          </div>

          <div className="user-comment">
            <h2 className="comment-text">Comment</h2>
            <div>
              {user.map((item) => (
                <Comment
                  name={item?.name}
                  comment={item?.comment}
                  picture={item?.picture}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer start --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Detail;
