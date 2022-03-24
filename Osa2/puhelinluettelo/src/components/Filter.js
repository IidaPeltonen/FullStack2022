/* Iida Peltonen 2022 */
import React, {useState} from 'react'
import Person from './Person'

const Filter = ({ persons, filtPersons }) => {
    const [haetut, setHaetut] = useState([persons])

    function handleFilter (e) {
        const hakusana = e.target.value
            if (hakusana != "") {
                //käydään taulukon nimet läpi ja verrataan
                persons.forEach((item) => {
                    let nimi = item.name.toLowerCase()
                    //jos jo tallennettu nimi sisältään hakusanan
                    if (nimi.includes(hakusana.toLowerCase())) {
                        //nämä kaikki pitäisi sisällyttää tauluun, joka näytetään
                        haetut.push(item)
                    }
                    console.log(haetut)
                }) 
            }
    }

    //tuon retruenin laittaisin tuohon edeltävään ifiin, mutten saa toimimaan niin. ja sitten elseen toinen return, joka palauttaa person-tauöun
     
 return (
    <div>
         Hae kaveria <input onChange={handleFilter} />
         <ul>
          {persons.map(person =>
            <Person key={person.id} person={person} />
          )}
        </ul>
   </div>
 )
}

export default Filter