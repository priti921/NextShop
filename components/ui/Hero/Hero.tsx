import Link from "next/link";
import React, { FC } from "react";
import style from "./Hero.module.css";
import Container from "../Container/Container";

type PropType = { headline: string; description: string };

//renders home page text content
const Hero: FC<PropType> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={style.root}>
          {/* headline passed */}
          <h2 className={style.headline}>{headline}</h2>
          <div className="flex-1 max-w-xl">
            {/* description passed  */}
            <p className={style.description}>{description}</p>
            <Link className={style.link} href="/">
              Read it here
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
