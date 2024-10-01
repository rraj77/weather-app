"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function IndexPage() {
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard')
  }, [])

  return <span>Redirecting to Datshboard Console</span>
}

export default IndexPage
