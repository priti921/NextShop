import Link from "next/link";
import React, { FC } from "react";
import style from "./Hero.module.css";
import Container from "../Container/Container";

const Hero: FC<{ headline: string; description: string }> = ({
  headline,
  description,
}) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={style.root}>
          <h2 className={style.headline}>{headline}</h2>
          <div>
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
