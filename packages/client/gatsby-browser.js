/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Layout from './src/components/layout/Layout'

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>
