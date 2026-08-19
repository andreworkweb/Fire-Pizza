import Image from "next/image";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex justify-between items-center py-8">
        {/* left side */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo-v2.png" alt="Logo" width={45} height={45} />
            <div>
              <h1 className="text-2xl font-black">FirePizza</h1>
              <p className="text-sm text-gray-400 leading-3">Mmmaaxx teste</p>
          </div>
        </div>
      </Link>

      <div className="mx-10 flex-1">
            <SearchInput />
      </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1">
            <User size={16} />
            Log in
          </Button>

          <div>
            <Button className="flex items-center justify-center gap-3">
              <span>$12</span>
              <span className="h-4 w-px bg-white/30" />
              <div className="flex items-center gap-1">
                <ShoppingCart className="h-4 w-4" strokeWidth={2} />
                <span>3</span>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
