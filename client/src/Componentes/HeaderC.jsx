import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Auth from './Auth'

export default function Header() {
  return (
    <header>
      <SignedOut>
        <Auth />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
