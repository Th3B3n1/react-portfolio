import { Year } from "./Year"

interface Footer
{
    name: string
}

export function Footer(props: Footer)
{
    return (
        <footer>
          <p>&copy; <Year /> {props.name}. All rights reserved.</p>
        </footer>
    )
}