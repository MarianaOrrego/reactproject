import { HeroeList } from "../Heroe/HeroeList"

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <hr/>
      <HeroeList
        publisher='Marvel Comics'
      />
    </div>
  )
}

