import React from 'react'
import { useRecoilState } from 'recoil'

import { userState } from '@/store'
import Page from '../../components/Page'

export default function Home() {
  const [user] = useRecoilState(userState)

  return (
    <Page
      navProps={{
        title: '富土康'
      }}
    >
      <div>Welcome {user.name}!</div>
    </Page>
  )
}
