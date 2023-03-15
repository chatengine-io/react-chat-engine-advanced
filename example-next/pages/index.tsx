import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from 'react-chat-engine-advanced';

export default function Home() {
  const chatProps = useMultiChatLogic(
    '794653df-052a-4ad2-b0aa-d6c251a10aef',
    'adam',
    'pass1234'
  );
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
}
