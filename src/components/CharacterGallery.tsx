import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"
import {useState} from "react";


type CharacterGalleryProps = {
    characters : Character [];
}

export default function CharacterGallery(props : CharacterGalleryProps){

    const [filterText, setFilterText] = useState("")
    const  filterCharacters = props.characters.filter( (char) => char.name.toLowerCase().includes(filterText.toLowerCase()))

// Conditional Rendering



    return (
        <section className={"item-center"}>
            <input  placeholder="Rick and Morty Characters ... " onChange={(event) => setFilterText(event.target.value)} />
            <p>Typed in: {filterText}</p>

            {/*Conditional Rendering - if Filtercharacter null war gib in <p> drinnen dieser Text ein */}
            {filterCharacters.length === 0 && <h3>No found any Character </h3>}
            {/*end*/}

            <div className = {"cards"}>
                {filterCharacters.map((character) =>
                    <div className = {"card"}>
                        <CharacterCard character = {character}/>
                    </div>)}
            </div>
        </section>
    )
}