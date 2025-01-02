import "../styles/Aboutme.css";
import author2 from "../assets/author_secon.jpg";

export default function Aboutme() {
  return (
    <div className="aboutme" id="Aboutme">
      <p className="regular-text text-center">get to know more </p>
      <h1 className="heading text-center">about me</h1>
      <div className="aboutme-wrapper gap-1">
        <img src={author2} alt="" />
        <article className="flex  flex-column gap-1">
          <div className="knowledge-wrapper-box">
            <article className="knowledge-wrapper text-center">
              <i class="ri-briefcase-line ri-2x"></i>

              <p className="regular-text bold">Experience</p>
              <p className="regular-text">2+ years</p>
              <p className="regular-text">Full stack Development</p>
            </article>
            <article className="knowledge-wrapper text-center">
              <i class="ri-graduation-cap-line ri-2x"></i>

              <p className="regular-text bold">Education</p>
              <p className="regular-text">Bsc Computer Science</p>
            </article>
          </div>
          <p className="regular-text text-center bold">
            Passionate about technology and software development, I thrive on
            solving problems and building innovative solutions. Whether it’s
            coding, exploring new tools, or staying up-to-date with the latest
            tech trends, I’m always eager to learn and grow in the ever-evolving
            world of tech. Let’s build something amazing together!
          </p>
        </article>
      </div>
    </div>
  );
}
