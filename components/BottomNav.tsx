"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { PiggyBank, RefreshCw, Signature } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

export const BottomNav = () => {
  return null;
  const segment = useSelectedLayoutSegment();
  console.log(segment);

  return (
    <div className="mt-auto">
      <Separator />
      <div className="flex justify-around py-4">
        <MenuItem
          href="/"
          title="Convert"
          active={segment === null}
          renderIcon={() => <RefreshCw className="h-4 w-4" />}
        />
        <MenuItem
          href="/prices"
          title="Prices"
          active={segment === "prices"}
          renderIcon={() => <PiggyBank className="h-4 w-4" />}
        />
        <MenuItem
          href="/about"
          title="About"
          active={segment === "about"}
          renderIcon={() => <Signature className="h-4 w-4" />}
        />
      </div>
    </div>
  );
};

type MenuItemProps = {
  href: string;
  title: string;
  active: boolean;
  renderIcon: () => JSX.Element;
};

const MenuItem = ({ href, title, active, renderIcon }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "flex flex-col items-center gap-2",
        active && "text-blue-500"
      )}
    >
      {renderIcon()}
      <span className="text-sm">{title}</span>
    </Link>
  );
};
