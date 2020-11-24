import React from 'react'
import { ArrowBack } from '@material-ui/icons'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import './index.scss'

export interface NavigationBarProps {
  title?: string
  right?: JSX.Element
}

export default function NavigationBar({ title, right }: NavigationBarProps) {
  const history = useHistory()

  return (
    <Grid
      container
      spacing={1}
      className="component__navigation-bar"
      justify="space-between"
      alignItems="center"
    >
      <Grid
        container
        item
        xs={2}
        className="component__navigation-bar-left"
        alignItems="center"
        justify="center"
      >
        <ArrowBack
          onClick={() => {
            history.goBack()
          }}
        />
      </Grid>
      <Grid
        container
        item
        xs={6}
        className="component__navigation-bar-left"
        justify="center"
        alignItems="center"
      >
        <span>{title || ''}</span>
      </Grid>
      <Grid
        container
        item
        xs={2}
        className="component__navigation-bar-left"
        justify="center"
        alignItems="center"
      >
        {right}
      </Grid>
    </Grid>
  )
}
