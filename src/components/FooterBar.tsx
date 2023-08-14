import React, { ReactNode } from 'react'
import { containerMaxW } from '../config'
import JustboilLogo from './JustboilLogo'

type Props = {
  children: ReactNode
}

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear()

  return (
    <>
  <footer className={`relative max-w-6xl mx-auto bottom-0 left-0 w-full ${containerMaxW} flex flex-col items-center`}>
  <div className="flex-grow"></div> {/* This will push the content to the bottom */}
  <div className="block md:flex items-center justify-between">
    <div className="text-center md:text-left mb-6 md:mb-0">
      <b>
        &copy;{year},{` `}
        <a href="'./'" rel="noreferrer" target="_blank">
          ACR.co
        </a>
        .
      </b>
      {` `}
    </div>
  </div>
</footer>

    </>
  )
}
