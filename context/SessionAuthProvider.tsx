"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'

interface Props{
    children: React.ReactNode
}

function SessionAuthProvider({children}: Props) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionAuthProvider
