import React, { FC } from "react";
import { Container } from "@components/ui";
import Link from "next/link";
import style from "./Navbar.module.css";
import Usernav from "../Usernav/Usernav";

const Navbar: FC = () => {
  return (
    <Container>
      <div className={style.root}>
        <Link href={`/`}>
          <h1 className={style.logo}>NEXT_SHOP</h1>
        </Link>
        <nav className={style.nav}>
          <Link href="/all">
            <span className={style.link}>All</span>
          </Link>
          <Link href="/cloths">
            <span className={style.link}>Cloths</span>
          </Link>
          <Link href="/accessories">
            <span className={style.link}>Accessories</span>
          </Link>
          <Link href="/shoes">
            <span className={style.link}>Shoes</span>
          </Link>
        </nav>
        {/* user nav for cart and wishlist */}
        <div className="flex flex-1 justify-end space-x-8">
          <Usernav />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
