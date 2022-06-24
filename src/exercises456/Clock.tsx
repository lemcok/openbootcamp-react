import { useEffect, useRef, useState } from "react"

interface Person {
   nombre: string
   apellidos: string
   edad: number
   fecha: Date
}
export const Clock = () => {
   const [person, setPerson] = useState<Person>({
      nombre: 'Martin',
      apellidos: 'San Jose',
      edad: 0,
      fecha: new Date()
   })
   const tick = () => {
      setPerson(prevSate => ({
         ...prevSate,
         edad: prevSate.edad + 1,
         fecha: new Date()
      } as Person ))
   }
   useEffect(() => {
      const timeID = setInterval(
         () => tick(), 1000
      )
     return () => {
      clearInterval(timeID)
      console.log( 'timer desmontado!!' )
     }
   }, [])
   
   return (
      <div className="mt-5 p-4 border shadow rounded-lg">
         <h2><span className="text-sky-600">Hora Actual:</span> {person.fecha.toLocaleTimeString()}</h2>
         <h3><span  className="text-sky-600">Usuario: </span>
             {person.nombre} {person.apellidos}
         </h3>
         <h1><span  className="text-sky-600"> Edad:</span> {person.edad}</h1>
      </div>
   );
}