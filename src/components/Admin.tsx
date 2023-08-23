"use client"

import { useEffect } from 'react'
import '@staticcms/core/dist/main.css';
import CMS, { Config } from '@staticcms/core';
import identity from 'netlify-identity-widget';

interface AdminProps {
    cms?: Config
    identity?: identity.InitOptions
}

export default function Admin(props: AdminProps) {
    useEffect(() => {
        CMS.init({ config: props.cms });

        (window as any).netlifyIdentity = identity;

        identity.init(props.identity);
    }, [])

    return <></>

}
