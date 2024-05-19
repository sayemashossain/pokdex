import * as d3 from "d3"
import csvFile from "../../assets/pokemon.csv"

export const PokedexGridItem = () => {
    const data = d3.csv(csvFile).then((x)=>  x);

    return [1,2,3,4,5,6].map((hjj)=> <div>
         {hjj}
     </div>)
 }