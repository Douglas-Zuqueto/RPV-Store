/* eslint-disable react/react-in-jsx-scope */
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
// import Auth from './Auth'

export default function Header() {
  return (
    
    <header>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    
  );
}