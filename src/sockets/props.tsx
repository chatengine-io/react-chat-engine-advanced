export interface Props {
  projectId?: string;
  myUsername?: string;
  mySecret?: string;
  sessionToken?: string;
  onRefresh?: () => void;
}
