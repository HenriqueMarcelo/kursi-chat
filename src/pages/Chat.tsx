import Header from '../components/Header'
import Input from '../components/Input'
import Message from '../components/Message'

export default function Chat() {
  return (
    <div className="container mx-auto px-8 py-6 md:py-8 ">
      <Header />

      <div className="">
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
        <Input />
      </div>
    </div>
  )
}
