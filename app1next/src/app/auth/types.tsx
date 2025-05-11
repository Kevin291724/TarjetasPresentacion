export type User = {
  username: string;
  email?: string;
};

export type AuthContextType = {
  user: User | null;
  login: (username: string, email?: string) => void;
  logout: () => void;
};