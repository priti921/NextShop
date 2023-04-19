import React, { FC } from "react";
import style from "./Usernav.module.css";
import Link from "next/link";
import { Bag, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

const Usernav: FC = () => {
  // open sidebar function from context
  const { openSidebar } = useUI();

  return (
    <nav>
      <ul className={style.list}>
        {/* cart icon */}
        <li className={style.item}>
          <Bag onClick={openSidebar} /> {/* changing sidebar state on click */}
        </li>
        {/* wishlist icon */}
        <li className={style.item}>
          <Link href="/wishlist">
            <Heart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
