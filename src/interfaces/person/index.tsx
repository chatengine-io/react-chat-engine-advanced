export interface PersonObject {
  username: string;
  first_name: string | null;
  last_name: string | null;
  avatar: string | null;
  custom_json: string | object | null;
  is_online: boolean;
}
