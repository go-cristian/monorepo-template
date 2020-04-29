import React from 'react'
import * as modules from '.'

export type ModuleLabels = {

}

export type Props = {
  labels: ModuleLabels;
  type: string;
}

const Module: React.FunctionComponent<Props> = (props: Props) => {
  const { type, labels } = props
  const FoundModule = modules.default[type]

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FoundModule {...labels} />
}

export default Module
