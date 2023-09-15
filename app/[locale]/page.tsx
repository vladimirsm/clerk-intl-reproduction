import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import LanguageSwitcher from "./LanguageSwitcher";
import Translated from "./Translated";
import Organization from "./Organisation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <LanguageSwitcher />
      <Translated />
      <Organization />
    </main>
  );
}
