import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import MyApp from './page'


export default function App() {
  return (
    <ChakraProvider>
      <div>
        <h1>Hello, world!</h1>
        <MyApp />
      </div>
    </ChakraProvider>
  )
}

