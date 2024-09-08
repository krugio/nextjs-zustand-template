'use client'
import { listaPlaceHolder } from "@/services/api";
import { useStore } from "@/store/example";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function Home() {


  const { isLoading, data, error } = useQuery('JsonPlaceHolder', listaPlaceHolder)
  console.log(data)

  const { modal, setModal, adicionaProduto, produtos, reset} = useStore()


  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <>
          <Box suppressHydrationWarning>
            <p>TEMPLATE - Next Js - Zustand - Material UI - React-Query - Mysql2 - axios</p>
            <Button variant="outlined" onClick={() => setModal(true)}>  TESTE </Button>
            <Button variant="outlined" onClick={() => adicionaProduto({ nome: 'teste' })}>  array </Button>
            <Button variant="outlined" onClick={() => reset()}>  reset </Button

            {produtos.map((item) => (

              <h1>{item.nome}</h1>

            ))}


          </Box>
        </>
      )}

    </>
  );
}
