import { UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';

import classes from './UnderlinedLink.module.css';

interface UnderlinedButtonProps {
  label: string;
  showUnderline: boolean;
}

function UnderlinedButton({ label, showUnderline }: UnderlinedButtonProps) {
  return (
    <UnstyledButton
      component="a"
      className={showUnderline ? classes.underlinedLink : classes.link}
    >
      {label}
    </UnstyledButton>
  );
}

export default UnderlinedButton;
