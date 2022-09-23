import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HomePage } from './pages/home-page';


const App = () => {
  return (
    <HomePage></HomePage>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
