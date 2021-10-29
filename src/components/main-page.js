import React from "react"
import { getQuotes } from "../services"

export const MainPage = () => {
  const [quotes, setQuotes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(
    () => 
      getQuotes()
        .then(response => response.json())
        .then(data => setQuotes(data)),
    []
  )
  
  return (
    <div>
      <img class="logo-simpsons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_logo_simpsons_yellow.svg/1200px-The_logo_simpsons_yellow.svg.png"></img>

      <div class="simpsons-center">
        <div>
          <ul>
            {quotes.map(({ quote }) => (
              <p class="simpsons-quote" key={quote}> "{quote}" </p>
            ))}
          </ul>

          <ul>
            {quotes.map(({ character }) => (
              <p class="simpsons-character" key={character}>{character} </p>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {quotes.map(({ image, character }) => (
              <img class="simpsons-img" key={character} src={image} alt={character}></img>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}