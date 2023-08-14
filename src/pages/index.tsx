import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutGuest from '../layouts/Guest'
import SectionMain from '../components/Section/Main'
import { StyleKey } from '../interfaces'
import { gradientBgPurplePink } from '../colors'
import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode, setStyle } from '../stores/styleSlice'
import Link from 'next/link'

const StyleSelect = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  const styles: StyleKey[] = ['white', 'basic']

  const router = useRouter()

  const handleStylePick = (e: React.MouseEvent, style: StyleKey) => {
    e.preventDefault()

    dispatch(setStyle(style))

    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <div className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}>
        <SectionMain>
          <h1 className="text-4xl md:text-5xl text-center text-white font-bold mt-12 mb-3 lg:mt-0">
            Welcome to the ACR&hellip;
          </h1>
          <h2 className="text-xl md:text-xl text-center text-white mb-12">
            Your all in one system{' '}
            <code className="px-1.5 py-0.5 rounded bg-white bg-opacity-20"><Link href="/dashboard">Go to dashboard</Link></code>
          </h2>
        </SectionMain>
      </div>
    </>
  )
}

StyleSelect.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelect
