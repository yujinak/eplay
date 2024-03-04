import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGameAcao] = useState<Game[]>([])
  const [gamesEsportes, setGameEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGameLuta] = useState<Game[]>([])
  const [gamesRPG, setGameRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="RPG" background="gray" />
      <ProductsList games={gamesEsportes} title="Ação" background="black" />
      <ProductsList games={gamesSimulacao} title="Aventura" background="gray" />
      <ProductsList games={gamesLuta} title="Ação" background="black" />
      <ProductsList games={gamesRPG} title="FPS" background="gray" />
    </>
  )
}

export default Categories
