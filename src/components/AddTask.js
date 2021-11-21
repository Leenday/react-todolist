import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [location, setLocation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Необходимо дать название карточке')
      return
    }

    onAdd({ title, desc, location })

    setTitle('')
    setDesc('')
    setLocation('')
  }
  return (
    <form className='add=form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Введите название карточки</label>
        <input type='text' placeholder='Название карточки' onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Введите описание карточки</label>
        <input type='text' placeholder='Описание карточки' onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Выберите локацию</label>
        <select name="location" onChange={(e) => setLocation(e.target.value)}>
          <option value="Home">Дом</option>
          <option value="Work">Работа</option>
          <option value="Other">Другое</option>
        </select>
      </div>
      <input type='submit' value='Добавить карточку' className='btn' />
    </form>
  )
}

export default AddTask
