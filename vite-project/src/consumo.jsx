import { Card } from "./components/card"
import Menu from "./components/menu"

export const Consumo = () => {
    return(
        <div>
            <Menu/>
            <br />
            Consumo JSON
            <Card 
             name="Lucas"
             desc="coisa"
             value="10,00" 
             img="https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg"
            />
        </div>
    )
}