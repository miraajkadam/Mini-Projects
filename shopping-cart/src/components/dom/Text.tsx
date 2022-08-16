import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  style?: Object
}

const Text: FC<Props> = ({ children, style }) => {
  return <p style={style}>{children}</p>
}

export default Text
