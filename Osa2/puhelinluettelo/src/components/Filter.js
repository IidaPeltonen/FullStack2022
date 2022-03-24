/* Iida Peltonen 2022 */
import React, {useState} from 'react'

const Filter = ({persons}) => {
    const [wordEntered, setWordEntered] = useState('') //kirjoitettu hakusana
    const [showAll, setShowAll] = useState(true)

    function handleFilter (e) {
        const hakusana = e.target.value
        setWordEntered(hakusana)
        const NewFilter = persons.forEach((item, index) => {
            // console.log(item.name)
        })(value => {
            return (
                value.item.name.toLowercase().includes(hakusana.toLowercase())
            )
        })
    }
        //käydään taulukon nimet läpi ja verrataan
        persons.forEach((item, index) => {
            // console.log(item.name)
        })
     
 return (
    <div>
         Hae kaveria <input onChange={handleFilter}></input>
    </div>
 )
}

export default Filter