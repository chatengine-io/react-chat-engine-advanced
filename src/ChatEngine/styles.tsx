export interface ChatEngineStyles {
  style?: React.CSSProperties;
  chatListColumnStyle?: React.CSSProperties;
  chatFeedColumnStyle?: React.CSSProperties;
  chatSettingsColumnStyle?: React.CSSProperties;
}

export const styles: ChatEngineStyles = {
  style: { position: 'relative' },
  chatListColumnStyle: {
    height: '100%',
    borderRight: '1px solid #afafaf',
  },
  chatFeedColumnStyle: { height: '100%' },
  chatSettingsColumnStyle: {
    height: '100%',
    borderLeft: '1px solid #afafaf',
  },
};
