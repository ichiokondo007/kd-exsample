export interface UserInfo {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  avatarUrl: string | null;
  backgroundColor: string;
  createdAt: Date;
  updatedAt: Date;
}
