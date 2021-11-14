import { PersonProps } from '../util/interfaces';

export interface Props {
  users: PersonProps[];
  currentUser: PersonProps;
  isDirectChat?: boolean;
}
