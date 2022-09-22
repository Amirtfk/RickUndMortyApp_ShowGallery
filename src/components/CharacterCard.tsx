import {Character} from "../model/Character";
import "./CharacterCard.css"
type CharacterCardProps = {
    character : Character;
}

export function CharacterCard(props: CharacterCardProps){

    return <div>
        <h3> {props.character.name } </h3>
        <img src={props.character.image} alt={"character avatar"}/>
        <p> {props.character.status} </p>
    </div>
}