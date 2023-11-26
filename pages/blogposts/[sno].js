import { useRouter } from 'next/router'
import React from 'react'

const blog = () => {
    const router=useRouter()
    const {sno}=router.query
  return (
    <div> blog:{sno}</div>
  )
}

export default blog