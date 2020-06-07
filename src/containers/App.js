import React, {Component} from 'react';
import VillagerList from "../components/villagerList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";


class App extends Component {
    constructor() {
        super ();
        this.state = {
            data: [],
            searchField: ''
        }
    };
    
    componentDidMount() {
        fetch('http://acnhapi.com/v1/villagers')
            .then(response => response.json())
            .then(data => this.setState({ data: Object.values(data) }))
    };
    
    onSearchChange = (event) =>{
        this.setState(
            { searchField: event.target.value }
        );
    }

    render() {
        const {data, searchField} = this.state
        const filterAnimal = data.filter(villager =>{
            return villager.name["name-USen"].toLowerCase().includes(searchField.toLowerCase())
        })
        if (!data.length){
            return (<div className='tc'>
                    <h1 className='f1'>Animal Crossing Villagers</h1>
                    <h2 className='f2'>Loading...</h2>
                    </div>
                )
        }
        else{
            return  (
                <div className='tc'>
                    <h1 className='f1'>Animal Crossing Villagers</h1>
                    <SearchBox searchChange = {this.onSearchChange} searchField = {searchField}/>
                    <Scroll>
                        <ErrorBoundry>
                            <VillagerList data={filterAnimal}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>)
        }
    }
};

export default App;