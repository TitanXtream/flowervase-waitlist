import { Button, ButtonProps } from '../ui/button';
import React from 'react';

const JoinWaitlistButton = ({
  className,
  size,
}: {
  className?: string;
  size?: ButtonProps['size'];
}) => {
  return (
    <Button className={className} size={size}>
      Join the waitlist
    </Button>
  );
};

export default JoinWaitlistButton;
