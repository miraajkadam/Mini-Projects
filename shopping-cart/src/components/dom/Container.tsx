import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  style?: Object
}

const Container: FC<Props> = ({ children, style }) => {
  return <div style={style}>{children}</div>
}

export default Container
