"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { ArrowBack } from "@/components/icons/ArrowBack";
import style from "./error/error.module.css";
import banner from "./error/500.png";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={style.container}>
      <Image src={banner} alt="" />
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={style.text}>
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>
      <Link href="/">
        Voltar ao feed <ArrowBack color="#81fe88" />
      </Link>
    </div>
  );
}
