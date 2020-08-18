export interface User {
  name: string;
}

export interface UserResponseData {
  authenticateUserWithPassword: {
    token: string;
    item: {
      name: string;
    };
  };
}
