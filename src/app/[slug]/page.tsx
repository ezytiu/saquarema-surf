import { Metadata } from "next";
import { Suspense } from "react";

const API = (id: string, file: string) => fetch(`https://raw.githubusercontent.com/cardapios/${id}/master/content/${file}.json`).then((response) => response.json())

export const runtime = 'edge';

const rotas = {
    "teste": "niMPRp38JHZv3Cr9V9fmvEngjTX2",
    "teste2": "OZ8KuDirYEg94llqAhwmzMiEVkq1"
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const id = (rotas as any)[params.slug as any]

  const settings = await API(id, "settings")

  return {
    title: settings.title,
    description: settings.description,
  }
}

async function Menu({ id }: { id: string }) {
  const data = await await API(id, "menu")

  return <>
    {data.menu.map((item: any) => 
      <div key={item.title}>
        <h1>{item.title}</h1>
      </div>
    )}
  </>
}

export default function Page({ params }: { params: { slug: string } }) {
  const id = (rotas as any)[params.slug as any]

return <>
    <Suspense fallback={<div>Carregando...</div>}>
      <Menu id={id} />
    </Suspense>
  </>

}