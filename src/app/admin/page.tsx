"use client"

import dynamic from "next/dynamic"

const Admin = dynamic(() => import('../../components/Admin'), { ssr: false, loading: () => <div>Carregando...</div> })

export default function AdminPage() {
    return <>
      <Admin 
        cms={{
          backend: {
            name: 'git-gateway',
            branch: 'master',
            gateway_url: `https://staticcms.netlify.app/.netlify/git/github`
        },
          media_folder: 'public/uploads',
          public_folder: '/uploads',
          collections: [
            {
              name: 'pages',
              label: 'Pages',
              folder: 'src/pages',
              fields: [
                { name: 'title', label: 'Title', widget: 'string' },
                { name: 'path', label: 'Path', widget: 'string' },
                { name: 'body', label: 'Body', widget: 'markdown' }
                ]
            }
          ]
        }}
        identity={{}}
      />
    </>
}