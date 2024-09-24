interface Header
{
    name: string
}

export function Header(props: Header)
{
    return (
        <>
            <nav>
                <h1>{props.name}</h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}