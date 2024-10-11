'use client'

import { Button } from "@/components/ui/button";
import React from "react";
import { db } from "@/lib/db";

export default function TestPage() {
  const onClick = async () => {
    await db.champion.create({
      data: {
        name: "Aatrox",
        image: "imgAatrox", // URL da imagem ou caminho
        weakAgainst: {
          create: [
            {
              name: "Irelia",
              image: "imgIreliaFace", // URL ou caminho da imagem de Irelia
            },
            {
              name: "Fiora",
              image: "imgFioraFace", // URL ou caminho da imagem de Fiora
            },
          ],
        },
        goodAgainst: {
          create: [
            {
              name: "Sion",
              image: "imgSionFace", // URL ou caminho da imagem de Sion
            },
            {
              name: "Garen",
              image: "imgGarenFace", // URL ou caminho da imagem de Garen
            },
          ],
        },
        synergy: {
          create: [
            {
              name: "Vi",
              image: "imgViFace", // URL ou caminho da imagem de Vi
            },
            {
              name: "Malphite",
              image: "imgMalphiteFace", // URL ou caminho da imagem de Malphite
            },
          ],
        },
      },
    });
  };
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <Button onClick={onClick}> Salvar </Button>
    </div>
  );
}
