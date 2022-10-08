import { MouseEventHandler } from 'react'

export const Plus = ({ click }: { click?: MouseEventHandler }) => {
  return (
    <svg
      id='Capa_1'
      version='1.1'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      xmlSpace='preserve'
      height={20}
      width={20}
      fill='#000'
      onClick={click}
    >
      <path d='M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216 v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z' />
    </svg>
  )
}
