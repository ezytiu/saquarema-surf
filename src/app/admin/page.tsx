"use client"

import '@staticcms/core/dist/main.css';
import dynamic from 'next/dynamic'

const Admin = dynamic(() => import('@/app/admin/components/Admin'), { ssr: false })

export default function AdminPage() {
    return <Admin/>
}
