import author from "../assets/rahul_acharya.jpg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="section1">
      <img className="first-image" src={author} alt="author image" />
      <article className="wrapper">
        <p className="regular-text">Hello I' m</p>
        <h1 className="heading">rahul acharya</h1>
        <p className="change regular-text">frontend developer</p>
        <div className="btn-group">
          <button>download cv</button>
          <button>contact info</button>
        </div>
        <div className="social-icons">
          <i class="ri-linkedin-box-fill ri-2x"></i>
          <i class="ri-github-fill ri-2x"></i>
        </div>
      </article>
    </div>
  );
}
