export interface ChatEngineStyles {
  style?: React.CSSProperties;
  chatListColumnStyle?: React.CSSProperties;
  chatFeedColumnStyle?: React.CSSProperties;
  chatSettingsColumnStyle?: React.CSSProperties;
  chatListMobileButtonStyle?: React.CSSProperties;
  chatSettingsMobileButtonStyle?: React.CSSProperties;
}

export const styles: ChatEngineStyles = {
  style: { position: 'relative', height: '100%' },
  chatListColumnStyle: {
    height: '100%',
    overflowY: 'scroll',
  },
  chatFeedColumnStyle: {
    height: '100%',
    overflowY: 'scroll',
    borderRight: '1px solid #afafaf',
    borderLeft: '1px solid #afafaf',
  },
  chatSettingsColumnStyle: {
    height: '100%',
    overflowY: 'scroll',
  },
  chatListMobileButtonStyle: {
    position: 'absolute',
    top: '12px',
    left: '12px',
  },
  chatSettingsMobileButtonStyle: {
    position: 'absolute',
    top: '12px',
    right: '12px',
  },
};
