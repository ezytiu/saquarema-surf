import { Metadata } from "next";
import { Suspense } from "react";
import { get } from "../services/content";
import { getId } from "../services/getId";
import Template from "./components/Template";

export const runtime = 'edge';

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const id = await getId(params.slug)
  const settings = await get(id, "settings")

  return {
    title: settings.title,
    description: settings.description,
  }
}

export default async function Pager(props: PageProps) {
  const id = await getId(props.params.slug)

  return <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Template id={id} />
      </Suspense>
    </>
}