import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    label: 'Employees',
    icon: mdiTable,
    href:'/employees/employees-create',
  //   menu:[
  //     {
  //     label:'New Employee'
  //   },
  //     {
  //     href:'/employees/employees',
  //     label:'All Employees'
  //   }
  // ]
  },
  {
    href:'/payroll',
    label: 'Payroll',
    icon: mdiViewList,
  },   
]

export default menuAside
