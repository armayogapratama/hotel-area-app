import { ObjectId } from "mongodb";

export type UserType = {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  role: string;
  image: string;
};

export type registerType = Omit<UserType, "_id" | "role" | "image">;

export type ProfileType = {
  _id: ObjectId;
  name: string;
  address: string;
  phone: string;
  bio: string;
  birth: string;
  gender: string;
  UserId: ObjectId;
  status: string;
};
