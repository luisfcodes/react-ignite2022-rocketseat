import { styled } from "@/styles";

export const ShoppingCartContainer = styled('div', {
  position: 'absolute',
  maxWidth: '480px',
  width: '100%',
  height: '100vh',
  right: '0',
  top: '0',
  zIndex: '10',
  padding: '4.5rem 3rem 3rem 3rem',
  backgroundColor: '$gray800',
  boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.08)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h1: {
    fontSize: '$lg',
    lineHeight: '1.6'
  },

  '.products': {
    flex: '1',
  },

  '.summary': {
    marginBottom: '3.625rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    '.quantity': {
      fontSize: '$md',
    },

    '.amountSummary': {
      'span:first-child': {
        fontSize: '$md',
        fontWeight: 'bold',
      },

      'span:last-child': {
        fontSize: '$xl',
        fontWeight: 'bold',
      }
    }
  },

  '.buyButton': {
    padding: '1.25rem 2rem',
    borderRadius: '8px',
    border: '0',
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})