import { Button as MUIButton } from '@mui/material'

interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <MUIButton onClick={onClick}>{label}</MUIButton>
}
