import React from 'react'
import NavigationBar, { NavigationBarProps } from '../NavigationBar'

import './index.css'

export interface PageProps {
  children: JSX.Element | Array<JSX.Element> | string
  navProps?: NavigationBarProps
}

export default function Page({ children, navProps }: PageProps) {
  return (
    <div className="component__page">
      <NavigationBar {...navProps} />
      {children}
    </div>
  )
}
