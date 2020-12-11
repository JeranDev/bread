//Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
//Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link, useHistory } from 'react-router-dom'

const Game = ({ name, released, image, id }) => {
  //Fix Scrolling
  const history = useHistory()
  if (history.location.pathname === '/') {
    document.body.style.overflow = 'auto'
  } else {
    document.body.style.overflow = 'hidden'
  }

  //Load Details Handler
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    dispatch(loadDetail(id))
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
