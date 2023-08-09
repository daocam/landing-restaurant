import React from "react"

type Props = {
  children: React.ReactNode,
  className?: string,
  color?: string,
  theme?: string
}

const Button = ({children, className, color, theme}: Props) => {
  let background

  switch (color) {
    case 'secondary': background = 'bg-secondary hover:bg-secondary-hover'
      break;
    case 'danger': background = 'bg-red-primary hover:bg-red-primary-hover'
      break;
    default: 
      background = 'bg-primary hover:bg-primary-hover'
      break;
  }

  switch (theme) {
    case 'small':
      return (
        <div>
          <button className={`${className} ${background} px-4 py-2 uppercase shadow-xl text-white text-xs font-medium animate`}>
            {children}
          </button>
        </div>
      )
    case 'big':
      return (
        <div>
          <button className={`${className} ${background} px-8 py-4 uppercase shadow-xl text-white text-base font-medium animate`}>
            {children}
          </button>
        </div>
      )  
    default:
      return (
        <div>
          <button className={`${className} ${background} px-4 py-3 border-2 uppercase shadow-xl text-white text-sm font-medium animate`}>
            {children}
          </button>
        </div>
      )
  }
}

export default Button