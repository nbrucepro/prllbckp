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
    href:'/invoic',
    icon:mdiAccountCircle,
    label:'Invoice'
  },
  {
    label: 'Employees',
    icon: mdiTable,
    menu:[
      {
      href:'/employees/employees-create',
      label:'New Employee'
    },
      {
      href:'/employees/employees',
      label:'All Employees'
    }
  ]
  },
  {
    href:'/payroll',
    label: 'Payroll',
    icon: mdiViewList,
  },
   {
    // href: '/dashboard',
    label: 'Profile',
    icon: mdiAccountCircle,
    menu: [
      {
        label: 'Edit',
      },
      {
        label: 'Settings',
      },
    ]
  },
  // {
  //   href: '/login',
  //   label: 'Login',
  //   icon: mdiLock,
  // },
]

export default menuAside
