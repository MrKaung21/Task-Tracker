import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = ({ toggleAddForm, setToggleAddForm }) => {
  const location = useLocation()

  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        {location.pathname === '/' && (<Button text='Add Task' onClick={() => setToggleAddForm(!toggleAddForm)}/>)}
    </header>
  )
}

export default Header