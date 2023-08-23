"use client"

import CMS from '@staticcms/core';
import identity from 'netlify-identity-widget';
import '@staticcms/core/dist/main.css';
import { useEffect } from 'react'

export default function AdminPage() {
    useEffect(() => {
        (window as any).netlifyIdentity = identity;
        identity.init({})
        CMS.init({
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'master',
                    gateway_url: 'https://staticcms.netlify.app/.netlify/git/github'
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
            }
        })

    }, [])

    return <></>
}
