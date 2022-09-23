import {Character} from "../model/Character";
import {CharacterCard} from "./CharacterCard";
import "./CharacterGallery.css"
import {useState} from "react";


type CharacterGalleryProps = {
    characters : Character [];
}

export default function CharacterGallery(props : CharacterGalleryProps){

const [filterText, setFilterText] = useState("")
const  filterCharacters = props.characters.filter( (char) => char.name.toLowerCase().includes(filterText.toLowerCase()))


    return (
        <section className={"item-center"}>
            <input onChange={(event) => setFilterText(event.target.value)} />
            <p>Typed in: {filterText}</p>

            <div className = {"cards"}>
                {filterCharacters.map((character) =>
                    <div className = {"card"}>
                        <CharacterCard character = {character}/>
                    </div>)}
            </div>
        </section>
    )
}