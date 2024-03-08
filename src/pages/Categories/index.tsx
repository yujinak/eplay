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
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList games={sportsGames} title="Esportes" background="black" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
