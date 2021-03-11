import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { planets } from '../planets';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            planets: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://swapi.py4e.com/api/planets/')
            .then(response => {
            return response.json();
        })
            .then(info => {
            this.setState({ planets: planets })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredPlanets = this.state.planets.filter(planet => {
            return planet.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (!this.state.planets.length) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f1'>Star Wars Planets</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <CardList planets={ filteredPlanets }/>
                </Scroll>
            </div>
            );
        }
    }
}    


export default App;