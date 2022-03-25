/* Iida Peltonen 2022 */

//näyttää yhden maan tiedot

const Maalista = ({ maa }) => {
    return (
        <div>
            <ul>
                <li key={maa.name.official}>
                    {maa.name.official}
                </li>
            </ul>
        </div>
    )
  }
  
  export default Maalista