import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const getData = async (id:string) => {
 

  const res = await fetch(`https://randomuser.me/api?id=${id}`) 
    
     // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
    
  return res.json()
    
 
 

}


const Children =  async ({ params }: { params: { slug: string } }) => {
   
const result = await getData(params.slug)

   const person = result.results[0]

  return (
    <div>
        <Link href={`/dashboards/persons`}>Back</Link>
      <div style={{ textAlign: 'center', color: "green" }}>Children</div>
      <div style={{ border: "1px solid red" , marginTop:"4rem" ,display:"inline-block" }}>
        <h3>{person.name.first} {person.name.last}</h3>

        <h3>{person.email}</h3>
        <Image src={person.picture.medium} alt={person.email} width={50} height={50}
        />
      </div>
    </div>
  )
}

export default Children