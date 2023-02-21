import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BookList } from '../components/BookList'
import { ApolloProvider } from '@apollo/client'
import { client } from '../components/apollo-client'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BookList />
      </ApolloProvider>
    </div>
  )
}

export default App
