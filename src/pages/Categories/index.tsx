import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightQuery,
  useGetRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionQuery()
  const { data: sportsGames } = useGetSportsQuery()
  const { data: simulationGames } = useGetSimulationQuery()
  const { data: fightGames } = useGetFightQuery()
  const { data: rpgGames } = useGetRPGQuery()

  if (actionGames && sportsGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
