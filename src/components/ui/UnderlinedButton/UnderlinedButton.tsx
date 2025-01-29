import { UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';

import classes from './UnderlinedButton.module.css';

interface UnderlinedButtonProps {
  label: string;
}

function UnderlinedButton({ label }: UnderlinedButtonProps) {
  return <UnstyledButton className={classes.button}>{label}</UnstyledButton>;
}

export default UnderlinedButton;
