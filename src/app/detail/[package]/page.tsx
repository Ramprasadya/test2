"use client"
import PackageDetails from '@/components/website/PackageDetails'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
     const params = useParams()
        let packageName = typeof params.package === "string"
            ? decodeURIComponent(params.package)
            : ""
  return (
    <PackageDetails packageName={packageName} />
  )
}

export default page