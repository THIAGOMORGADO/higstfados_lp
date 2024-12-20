"use client";

import Image from "next/image";

import Logo from "@/app/img/Higestofados.png";
import { useState } from "react";

import { IoIosMenu } from "react-icons/io";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-sky-300 w-screen h-screen">
      <header className="container mx-auto h-16 bg-sky-700 flex items-center justify-between px-4 sm:px-24">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo Higestofados" className="w-16" />
          <h1 className="text-lg font-bold text-white">
            Higestofados em geral
          </h1>
        </div>

        <div className="flex items-center">
          <nav
            className={`md:flex  gap-6 ${
              isMenuOpen
                ? "flex flex-col absolute top-16 right-0 bg-sky-700 w-full p-4"
                : "hidden"
            } text-white`}
          >
            <a
              href="#"
              className="hover:text-sky-600 transition-colors font-medium"
            >
              Início
            </a>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors font-medium"
            >
              Produtos
            </a>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoIosMenu size={30} color={"#fff"} />
          </button>
        </div>
      </header>
    </div>
  );
}
