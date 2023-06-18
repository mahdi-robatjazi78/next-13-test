import Link from 'next/link'
import React from 'react'

const Dashboards = () => {
  return (
    <div >
        <Link href={`/`}>Back</Link>
      <div style={{ textAlign: "center", color: "red" }}>Dashboards</div>
        <Link href={`/dashboards/persons`}>Go To Persons Page</Link>

    </div>
  )
}

export default Dashboards