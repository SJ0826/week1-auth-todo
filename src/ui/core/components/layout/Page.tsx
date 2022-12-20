import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function Page({ children }: Props) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #dae2b6;
`
