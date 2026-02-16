import { Separator } from "@/view/components/ui/separator";

import { Footer } from "@/view/layout/footer";
import { Navbar } from "@/view/layout/navbar";

import { Contact } from "./components/contact";
import { Expertise } from "./components/expertise";
import { Hero } from "./components/hero";
import { Philosophy } from "./components/philosophy";
import { Profile } from "./components/profile";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <Separator />
        <Profile />
        <Separator />
        <Expertise />
        <Separator />
        <Philosophy />
        <Separator />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
