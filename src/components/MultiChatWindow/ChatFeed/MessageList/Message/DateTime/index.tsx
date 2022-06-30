import React from 'react';

import { DateTimeProps } from './props';
import { styles } from './styles';

import { formatDateTime, getDateTime } from '../../../../../util/dateTime';

export const DateTime: React.FC<DateTimeProps> = (props: DateTimeProps) => {
  const { offset = 0 } = props;

  return (
    <div
      className="ce-message-date-text"
      style={{ ...styles.style, ...props.style }}
    >
      {formatDateTime(getDateTime(props.created, offset))}
    </div>
  );
};
