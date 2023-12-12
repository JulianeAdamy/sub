import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";


export const revalidate = 0

export default function Newcurso(){ 
  


  async function savecurso(formData: FormData){
    "use server"
    const name = formData.get("name") as string;
    const telefone = formData.get("telefone") as string;
    console.log("name, telefone")

    await sql`INSERT INTO estudo (name, telefone) VALUES(${name}, ${telefone})`
    console.log("Acessou função")


  }
  return (
    <div>
      <h1 className="text-black text-center text-4xl">Cadastrar Curso</h1>
      <form>
        <input type="text" name="name" placeholder="Nome do curso" /><br /><br />
        <input type="text" name="telefone" placeholder="Telefone do curso" /> <br /><br />
        <button formAction={savecurso} className="text-black">Salvar</button>
        <br />
      </form>
    </div>

  )
}