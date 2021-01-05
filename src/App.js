import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Component
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';

// Pages
import Home from './pages/home/home.pages.jsx';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dropdownLanguage: 'ID',
      isIndividualPage: 'NO',
      alcoContent: [],
      toggleActive: false,
    }
  }

  componentDidMount() {

  }

  onChangeLanguage = (event) => {
    this.setState({
      dropdownLanguage: event.target.value
    })
  }

  toggleNavBarClass = () => {
    this.setState({
      toggleActive: !this.state.toggleActive
    })
  }

  render() {
    const toggleClass = this.state.toggleActive ? 'active' : '';
    return (
      <div>
        <Header onChangeLanguage={this.onChangeLanguage} toggleNavBarClass={this.toggleNavBarClass} toggleClass={toggleClass} />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
