export interface IUser {
    id: string;
    name: string;
    email: string;
    avatar: string,
    typeIcon: TypeIcon 
  }
  
  export interface IGenericResponse {
    status: string;
    message: string;
  }
  
  export type TypeIcon = "tiktok" | "youtube" | "instagram" | null;