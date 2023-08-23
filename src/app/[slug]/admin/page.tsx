"use client"

import { getId } from '@/app/services/getId';
import dynamic from 'next/dynamic';

export const runtime = 'edge';

const Admin = dynamic(() => import('./components/Admin'), { ssr: false })

interface PageProps {
    params: {
        slug: string
    }
}

export default function Page(props: PageProps) {
    const id = getId(props.params.slug)

    return <Admin id={id} />
}