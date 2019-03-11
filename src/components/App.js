import React from 'react'
import LinkBtn from './LinkBtn'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <LinkBtn to="/" label={'Главная'} />
          <LinkBtn to="/login" label={'Логин'} />
          <LinkBtn to="/profile" label={'Профиль'} />
          <LinkBtn to="/news" label={'Новости'} />
        </header>
      </div>
    )
  }
}

export default App
