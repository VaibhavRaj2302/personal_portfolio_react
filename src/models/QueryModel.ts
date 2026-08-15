export interface Queries {
  id?: string;
  uid?: string;
  name?: string;
  email?: string;
  message?: string;
  title?: string;
  createdAt?:
    | number
    | string
    | { seconds?: number; nanoseconds?: number }
    | null;
}
