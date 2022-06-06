import { HeroeList } from "../Heroe/HeroeList"

export const DcScreen = () => {
  return (
    <div>
      <h1>DC</h1>
      <hr/>
      <HeroeList 
        publisher='DC Comics'
      />
    </div>
  )
}