import { Metadata } from "next";
import { Suspense } from "react";
import { get } from "../services/content";
import { getId } from "../services/getId";
import Template from "../../components/Template";

export const runtime = 'edge';

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const id = getId(params.slug)
  const settings = await get(id, "settings")

  return {
    title: settings.title,
    description: settings.description,
  }
}

export default function Page(props: PageProps) {
  const id = getId(props.params.slug)

  return <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Template id={id} />
      </Suspense>
    </>
}