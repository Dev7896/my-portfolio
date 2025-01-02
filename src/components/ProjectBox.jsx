export default function ProjectBox({ image, heading, link1, link2 }) {
  return (
    <div className="box flex flex-column gap-1">
      <img src={image} alt="" />
      <h1 className="heading text-center">{heading}</h1>
      <article className="btn-group">
        <button>
          <a href={link1}>github</a>
        </button> 
        <button>
          <a href={link2}>demo</a>
        </button>
      </article>
    </div>
  );
}
