import { createContext, RefObject } from "react";

interface NavigationScrollContextType {
  contact: RefObject<HTMLDivElement>;
  aboutMe: RefObject<HTMLDivElement>;
  projects: RefObject<HTMLDivElement>;
}

// Default values setup using `null` and cast to proper types
const defaultRefValue: RefObject<HTMLDivElement> = { current: null };

const defaultContextValues: NavigationScrollContextType = {
  contact: defaultRefValue,
  aboutMe: defaultRefValue,
  projects: defaultRefValue,
};

// Create the context with initial default values
export const NavigationScrollContext =
  createContext<NavigationScrollContextType>(defaultContextValues);
