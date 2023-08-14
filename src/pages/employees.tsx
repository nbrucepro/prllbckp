import { mdiGithub, mdiMonitorCellphone, mdiTableBorder, mdiTableOff ,mdiAccountPlusOutline} from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import CardBoxComponentEmpty from '../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../layouts/Authenticated'
import NotificationBar from '../components/NotificationBar'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'
import IconRounded from '../components/Icon/Rounded'

const EmployeesPage = () => {
    
  return (
    <>    
      <Head>
        <title>{getPageTitle('Employees')}</title>
      </Head>
      <SectionMain>
      <section className={`mb-6 flex items-center justify-between`}>
      <div className="flex items-center justify-start">
        <IconRounded icon={mdiTableBorder} color="light" className="mr-3" bg />
        <h1 className={`leading-tight text-3xl`}>Employees</h1>
      </div>
      <Button icon={mdiAccountPlusOutline} color="whiteDark" className='h-12 w-12 bg-gray-600'/>
    </section>
        
        <CardBox className="mb-6" hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  )
}

EmployeesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default EmployeesPage
