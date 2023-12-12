import Header from "./components/Header";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className='text-center'>Minha Avaliação Substitutiva</h1>
    <a href="/admin">fazer login</a>
    </div>
  )
}
