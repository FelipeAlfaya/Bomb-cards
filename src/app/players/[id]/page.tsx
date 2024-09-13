/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export const Page = () => {
  const params = useParams()
  const { id } = params

  const getPlayerDetails = async () => {
    const response = await fetch(`/api/players/?id=${id}`)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    getPlayerDetails()
  })
  return <div>page</div>
}
