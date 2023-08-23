import { getId } from '@/app/services/getId';
import '@staticcms/core/dist/main.css';
import dynamic from 'next/dynamic'
import { Suspense } from 'react';

export const runtime = 'edge';

const Admin = dynamic(() => import('./components/Admin'), { ssr: false })

interface PageProps {
    params: {
        slug: string
    }
}

export default async function Page(props: PageProps) {
    const id = await getId(props.params.slug)

    return <>
        <Suspense fallback={<div>Carregando...</div>}>
            <Admin id={id} />
        </Suspense>
    </>
}