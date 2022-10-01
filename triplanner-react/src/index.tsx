import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import FirstPageHomePage from './views/first-page-home-page/first-page-home-page'

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <Route
    //       component={FirstPageHomePage}
    //       exact
    //       path="/first-page-home-page"
    //     />
    //   </div>
    // </Router>
    <FirstPageHomePage></FirstPageHomePage>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
