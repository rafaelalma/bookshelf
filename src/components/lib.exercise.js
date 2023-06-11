import styled from '@emotion/styled'
import {Dialog as ReachDialog} from '@reach/dialog'

import {base, indigoDarken10, indigoLighten80} from 'styles/colors'

const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 4px;
  line-height: 1rem;
  background-color: ${p =>
    p.variant === 'primary' ? indigoDarken10 : indigoLighten80};
  color: ${p => (p.variant === 'primary' ? base : 'black')};
`

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${indigoDarken10};
  background: ${indigoLighten80};
  padding: 8px 12px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  '@media (max-width: 991px)': {
    width: '100%',
    margin: '10vh auto',
  },
})

export {CircleButton, Dialog, Button, Input, FormGroup}
