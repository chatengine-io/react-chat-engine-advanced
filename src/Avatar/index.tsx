import React from 'react';
import { stringToColor } from '../util/colorMapping';
import { Props } from './props';
import { styles } from './styles';

export const Avatar = ({
  avatarUrl = undefined,
  username = undefined,
  isOnline = undefined,
  showOnline = false,
  style = {},
  onClick = () => {}
}: Props) => {

  const text = username ? username.substring(0, 2).toUpperCase() : ''
  const color = stringToColor(username)

  return (
    <div style={{ width: '48px', height: '48px' }} onClick={onClick}>
      <div style={{ height: '0px' }}>
        <div
          className='ce-avatar'
          style={{
            ...styles.avatar,
            ...style,
            ...{
              backgroundColor: avatarUrl ? '#FFFFFF' : color,
              backgroundImage: avatarUrl && `url(${avatarUrl})`,
            }
          }}
        >
          <div
            className='ce-avatar-text'
            style={styles.avatarText}
          >
            {!avatarUrl && text}
          </div>
        </div>
      </div>

      {
        showOnline &&
        <div
          className='ce-avatar-status'
          style={{
            ...styles.status,
            ...{ backgroundColor: isOnline ? '#52c41a' : '#f5222d' }
          }}
        />
      }
    </div>
  )
};