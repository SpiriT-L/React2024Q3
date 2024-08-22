export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  termsAccepted: boolean;
  terms: boolean;
  profilePicture: File | null;
  image: FileList;
  control: string;
  errors: string;
}
