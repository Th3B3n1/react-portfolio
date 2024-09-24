import { Year } from "./Year";

export interface IEducation
{
    degree: string;
    degreeAbbreviation: string,
    profession: string,
    institution: string;
    year: string;
}

export interface IExperience 
{
    title: string,
    company: string,
    time: string,
    description: string
}

interface MainComponent extends IAbout, IEducations, IExperiences, IHobbies, IContact {}

interface IName
{
    name: string
}

interface IAbout extends IName
{
    imageSrc: string,
    description: string
}

interface IEducations
{
    educations: IEducation[]
}

interface IExperiences
{
    experiences: IExperience[]
}

interface IHobbies
{
    hobbies: string[]
}

interface IContact extends IName
{
    email: string,
    quote: string
}

export function MainComponent(props: MainComponent)
{
    
    return (
        <>
            <main>
                <About name={props.name} imageSrc={props.imageSrc} description={props.description} />
                <Education educations={props.educations} />
                <Experience experiences={props.experiences}/>
                <Hobbies hobbies={props.hobbies} />
                <Contact name={props.name} email={props.email} quote={props.quote} />
            </main>
        </>
        
    )
}

function About(props: IAbout)
{
    return (
        <section id="about">
            <div className="container">
                <h2>About</h2>
                <figure>
                    <img src={props.imageSrc} alt={`Picture of ${props.name}`} />
                    <figcaption>{props.name}, <Year /></figcaption>
                </figure>
                <p>{props.description}</p>
            </div>
        </section>
    )
}

function Education(props: IEducations)
{
    return (
        <section id="education">
            <div className="container">
                <h2>Education</h2>
                {props.educations.map((education, index) =>
                (
                    <p key={index}><abbr title={education.degree}>{education.degreeAbbreviation}</abbr> {education.profession} - {education.institution}, {education.year}</p>
                ))}    
            
            </div>
        </section>
    )
}

function Experience(props: IExperiences)
{
    return (
        <section id="experience">
            <div className="container">
                <h2>Experience</h2>
                {props.experiences.map((experience, index) =>
                (
                    <article key={index}>
                        <h3>{experience.title} - {experience.company}</h3>
                        <p><time>{experience.time}</time></p>
                        <p>{experience.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )   
}

function Hobbies(props: IHobbies)
{
    return (
        <>
            <section id="hobbies">
                <div className="container">
                    <h2>Hobbies</h2>
                    <ul>
                        {props.hobbies.map((hobbie, index) => 
                        (
                            <li key={index}>{hobbie}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

function Contact(props: IContact)
{
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact</h2>
                <p>If you would like to get in touch, please email me at:</p>
                <address>
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                </address>
                <blockquote>
                    <p>{props.quote} - {props.name}</p>
                </blockquote>
            </div>
        </section>
    )
}