import { UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';

import classes from './UnderlinedLink.module.css';

interface UnderlinedButtonProps {
  label: string;
}

function UnderlinedButton({ label }: UnderlinedButtonProps) {
  return (
    <UnstyledButton component="a" className={classes.button}>
      {label}
    </UnstyledButton>
  );
}

export default UnderlinedButton;
