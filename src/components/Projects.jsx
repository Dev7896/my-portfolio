import '../styles/projects.css' ;
import ProjectBox from './ProjectBox';
export default function Projects(){
    return(
        <div id="projects">
            <p className="regular-text text-center">browse my recents</p>
            <h1 className="heading text-center">projects</h1>
            <section className='boxes'>
            <ProjectBox heading={'project 1'} image={'https://upload.wikimedia.org/wikipedia/en/f/f9/Apple_Weather.png'} />
            <ProjectBox heading={'project 2'} image={'https://miro.medium.com/v2/resize:fit:786/format:webp/1*VyerXSttKlWek9Kub8HoTA.png'}/>
            <ProjectBox heading={'project 3'} image={'https://miro.medium.com/v2/resize:fit:720/format:webp/1*WF0GnDiTXbWpOD6D9xPINA.png'}/>
            </section>
        </div>
    )
}