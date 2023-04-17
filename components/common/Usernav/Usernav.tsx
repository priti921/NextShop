import React, { FC } from "react";
import style from "./Usernav.module.css";
import Link from "next/link";
import { Bag, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

const Usernav: FC = () => {
  const { openSidebar } = useUI();
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Bag onClick={openSidebar} /> {/* changing sidebar state on click */}
        </li>
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
