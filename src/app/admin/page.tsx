"use client"

import dynamic from "next/dynamic"

export default dynamic(() => import('../../components/Admin'), { ssr: false, loading: () => <div>Carregando...</div> })