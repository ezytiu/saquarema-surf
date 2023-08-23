import { getId } from '@/app/services/getId';
import '@staticcms/core/dist/main.css';
import dynamic from 'next/dynamic';

export const runtime = 'edge';

const Admin = dynamic(() => import('./components/Admin'), { ssr: false, loading: () => <div>Carregando...</div> })

interface PageProps {
    params: {
        slug: string
    }
}

export default function Page(props: PageProps) {
    const id = getId(props.params.slug)

    return <Admin id={id} />
}