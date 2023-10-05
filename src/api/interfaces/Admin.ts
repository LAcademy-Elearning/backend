// Define the AdminRole enum
import { IAdmin } from "../models/Admin";

export const AdminRoleEnum = ["SUPER_ADMIN", "ADMIN"] as const;
export type AdminRole = (typeof AdminRoleEnum)[number];
export type NewAdmin = IAdmin;
export type PublicAdmin = Omit<IAdmin, "password">;
export type Admin = IAdmin;
