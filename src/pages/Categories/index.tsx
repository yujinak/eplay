import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightQuery,
  useGetRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: sportsGames, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRPGQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
