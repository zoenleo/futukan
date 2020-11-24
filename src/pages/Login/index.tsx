import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { userState } from '@/store'
import Page from '../../components/Page'

export default function Home() {
  const setUserState = useSetRecoilState(userState)
  const history = useHistory()
  const login = () => {
    setUserState({
      name: 'Reacter'
    })
    history.replace('/home')
  }
  return (
    <Page
      navProps={{
        title: '富土康'
      }}
    >
      <Button onClick={login}>Login</Button>
    </Page>
  )
}
