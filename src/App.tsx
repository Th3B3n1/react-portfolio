import './App.css'
import { useState } from 'react'
import { Header } from './Header'
import { MainComponent, IEducation, IExperience } from './MainComponent';
import { Footer } from './Footer';

function App() {
  const [name] = useState("János Kovács");
  const [email] = useState("janos.kovacs@example.com");
  const [imageSrc] = useState("/profile.png");
  const [description] = useState("I am a web developer and graphic designer focused on applying the latest technologies and creative solutions to enhance user experience. I am passionate about working at the intersection of web applications and visual design.");
  const [quote] = useState('"I have never been wrong..., except for those instances when I was."')
  const [educations] = useState([{ degree: "Bachelors of Arts", degreeAbbreviation: "BA", profession: "Digital Design", institution: "Academy of Fine Arts", year: "2019" }, { degree: "Masters of Fine Arts", degreeAbbreviation: "MFA", profession: "Web Development", institution: "Art and Technology Institute", year: "2021" }] as IEducation[])
  const [experiences] = useState([{ title: "Lead Web Developer", company: "Creative Ltd.", time: "March 2022 - Present", description: "Developing websites and integrating technologies." }, { title: "Junior Graphic Designer", company: "Design Innovations Inc.", time: "August 2020 - February 2022", description: "Designed graphic elements and visual content." }] as IExperience[]);
  const [hobbies] = useState(["Web design and UI/UX design", "Creative writing and digital art", "Travel and exploring cultures"]);
  return (
    <>
      <Header name={name}/>
      <MainComponent name={name} email={email} imageSrc={imageSrc} description={description} quote={quote} educations={educations} experiences={experiences} hobbies={hobbies} />
      <Footer name={name} />
    </>
  )
}

export default App
