import comics from './../../public/img/comics.jpg';
import gif_app from './../../public/img/gif_app.jpg';
import calculadora from './../../public/img/calculadora.jpg';
import { ProjectCard } from '../ui/components/ProjectCard';

export const ProjectsPage = () => {
    const projects = [
        {
            title: 'Calculadora Interactiva',
            img: calculadora,
            repoLink: 'https://github.com/KHernandez94/Calculadora.git',
            liveLink: 'https://calc-interactiva.netlify.app/',
        },
        {
            title: 'Gif App',
            img: gif_app,
            repoLink: 'https://github.com/KHernandez94/react-gif-expert.git',
            liveLink: 'https://project-gif-app.netlify.app/',
        },
        {
            title: 'Heroes App',
            img: comics,
            repoLink: 'https://github.com/KHernandez94/heroesApp.git',
            liveLink: 'https://project-heroes.netlify.app/',
        }
    ];

    return (
        <div className="container text-center" style={{ overflowX: 'hidden', paddingBottom: '5rem' }}>
            <div className="mt-5">
                <h1 className="animate__animated animate__bounceInDown">Mis Proyectos</h1>
            </div>

            <div className="row justify-content-evenly" style={{ gap: '2rem', marginTop: '5rem' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};
