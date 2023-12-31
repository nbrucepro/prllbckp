import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'firstName',
    sticky: 'left'
  },
  {
    Header: 'Family Name',
    Footer: 'Family Name',
    accessor: 'familyName',
    sticky: 'left'
  },
  {
    Header: 'Phone Number',
    Footer: 'Phone Number',
    accessor: 'telephone'
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Family Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]