// import { createAppStore } from "./app-store";
import { MainClient } from "../clint";
import { UserClient } from "../clint/user.ts";
import { PropertyClient } from "../clint/property.ts";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const mainClient = new MainClient(backendUrl);
export const userClient = new UserClient(backendUrl);
export const propertyClint = new PropertyClient(backendUrl);

// export const useAppStore = createAppStore(mainClient);