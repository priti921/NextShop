import React, { FC } from "react";
import style from "./Usernav.module.css";
import Link from "next/link";
import { Bag, Heart } from "@components/icons";

const Usernav: FC = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Bag />
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
