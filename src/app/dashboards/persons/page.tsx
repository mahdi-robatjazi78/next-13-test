import React from 'react'


import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://randomuser.me/api/?page=3&results=10&inc=gender,name,picture,email,id&nat=IR')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Page = async () => {
   const data = await getData()
  const people = data.results 

  console.log("people .>>  " , people)

  return (
    <div>
        <Link href={`/dashboards/`}>Back</Link>
      
      <div style={{ color: "lightblue", textAlign: "center" }}>THIS IS PERSON PAGE</div>
      <div style={{display:"flex" ,justifyContent:"space-around" , flexWrap:"wrap"}}>
      {
        people.map((item:any ,index:number) => (

        <Link href={`/dashboards/persons/children/${item.email}`} key={index} style={{ border: "1px solid red" }}>
            
        <h3>{item.gender}</h3>
        <h3>{item.name.first} {item.name.last}</h3>
        <h3>{item.email}</h3>
        <Image src={item.picture.medium} alt={item.picture.medium} width={50}  height={50} />

      </Link>
        )) 
      }
      
      </div>
      </div>
  )
}

export default Page