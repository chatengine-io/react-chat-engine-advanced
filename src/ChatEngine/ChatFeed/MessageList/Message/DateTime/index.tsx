import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { formatDateTime, getDateTime } from '../../../../../util/dateTime';

export const DateTime: React.FC<Props> = ({
  created,
  offset = 0,
  dateTimeStyle = {},
}) => {
  return (
    <div
      className="ce-message-date-text"
      style={{ ...styles.dateTimeStyle, ...dateTimeStyle }}
    >
      {formatDateTime(getDateTime(created, offset))}
    </div>
  );
};
