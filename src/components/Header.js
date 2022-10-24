import Button from "./Button"


const Header = ({ toggleAddForm, setToggleAddForm }) => {
  
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button text='Add Task' onClick={() => setToggleAddForm(!toggleAddForm)}/>
    </header>
  )
}

export default Header