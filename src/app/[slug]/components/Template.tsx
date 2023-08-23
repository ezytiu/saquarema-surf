"use client"

import React, { Suspense } from 'react'
import { Menu } from './Menu'
import { image } from '@/app/services/content'

export default function Template({ id }: { id: string }) {
    return <>
        <Suspense fallback={<div>Carregando...</div>}>
          <Menu id={id} />
          <img src={image(id, "seo.jpg")} alt="seo" />
        </Suspense>
      </>
  }