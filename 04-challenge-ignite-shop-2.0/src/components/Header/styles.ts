import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  a: {
    cursor: 'pointer',
  },

  button: {
    width: '48px',
    height: '48px',
    backgroundColor: '$gray800',
    borderRadius: '6px',
    border: '0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',

    svg: {
      color: '$gray500',
    },

    '&:hover': {
      backgroundColor: '$gray700',
    }
  }
})