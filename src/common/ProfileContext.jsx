import { createContext, useContext } from "react";
import profileData from "../profile.json";

const ProfileContext = createContext(profileData);

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => (
  <ProfileContext.Provider value={profileData}>
    {children}
  </ProfileContext.Provider>
);
