import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { UserType, registerType } from "@/types/type";
import SignPassword from "../helpers/bcrypt";

class UserModel {
  static dbUsers() {
    const result = database.collection("users");
    return result;
  }

  static async user(UserId: string) {
    const result = UserModel.dbUsers();
    const user = await result.findOne({
      _id: new ObjectId(UserId),
    });
    return user as UserType;
  }

  static async userByEmail(email: string) {
    const result = UserModel.dbUsers();
    const user = await result.findOne({ email: email });
    return user as UserType;
  }

  static async userByUsername(username: string) {
    const result = UserModel.dbUsers();
    const user = await result.findOne({ username: username });
    return user as UserType;
  }

  static async userById(UserId: string) {
    const result = UserModel.dbUsers();
    const user = await result.findOne({ _id: UserId });
    return user as UserType;
  }

  static async register(newUser: registerType) {
    const result = UserModel.dbUsers();
    const user = await result.insertOne({
      ...newUser,
      image:
        "https://res.cloudinary.com/daz8ay876/image/upload/v1707735219/final-project/profile.jpg",
      role: "customer",
      password: SignPassword(newUser.password),
    });
    return {
      _id: user.insertedId,
      ...newUser,
    } as UserType;
  }
}

export default UserModel;
