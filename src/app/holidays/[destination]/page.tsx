"use client"
import Destination from '@/components/website/Destination'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
    let destinationName = typeof params.destination === "string"
        ? decodeURIComponent(params.destination)
        : ""
  return (
    <Destination destinationName={destinationName} />
  )
}

export default page