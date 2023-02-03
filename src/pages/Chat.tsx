import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import Message from '../components/Message'

export default function Chat() {
  const messagesElemntsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    messagesElemntsRef.current?.scrollTo(
      0,
      Number(messagesElemntsRef.current?.scrollHeight),
    )
  }, [])

  return (
    <div className="container mx-auto px-8 py-6 md:py-8 h-screen overflow-hidden flex flex-col ">
      <Header />

      <div className="px-2 overflow-y-auto" ref={messagesElemntsRef}>
        <h5 className="text-center mb-8">Hoje 11:30</h5>

        <Message
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          authorName="Marcelo Henrique"
        />
        <Message
          text="Nesse pull request, um erro não identificado causou a race condition da renderização de floats parciais."
          authorName="Marcelo Henrique"
          myself
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
          myself
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
          myself
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
          myself
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
        />
        <Message
          text="Explica pro Product Onwer que um erro não identificado facilitou a resolução de conflito dos parametros passados em funções privadas."
          authorName="Marcelo Henrique"
          myself
        />
      </div>
      <Input />
    </div>
  )
}
