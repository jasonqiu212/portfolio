import { UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';

import classes from './UnderlinedLink.module.css';

interface UnderlinedLinkProps {
  label: string;
  url: string;
  isSamePage?: boolean;
  hideUnderline?: boolean;
  fz?: string | number | Record<string, string | number>;
  fw?: number;
}

function UnderlinedLink({
  label,
  url,
  isSamePage = false,
  hideUnderline = false,
  fz = 'md',
  fw = 600,
}: UnderlinedLinkProps) {
  return (
    <UnstyledButton
      component="a"
      href={url}
      target={isSamePage ? '' : '_blank'}
      fz={fz}
      fw={fw}
      className={hideUnderline ? classes.link : classes.underlinedLink}
    >
      {label}
    </UnstyledButton>
  );
}

export default UnderlinedLink;
