import Header from "/workspaces/sub/app/components/Header.tsx";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCurso() {
    async function deleteCurso(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from estudo where id=${id}`
        revalidatePath("/admin/courses/new")
    }
    const { rows } = await sql`SELECT * from estudo`;
    return (
        <div>
            <Header />
            <h1 className="text-center text-black">Lista de Curso</h1>

            <table>
                <thead>
                    <tr> <td>Name do Curso</td> <td>Telefone do Curso</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((estudo) => {
                            return (
                                <tr key={estudo.id}><td>{estudo.name}</td> <td>{estudo.telefone}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={estudo.id}/>   
                                    <button formAction={deleteCurso}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}