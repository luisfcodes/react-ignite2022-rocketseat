import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  color: '$white',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
