import React, {Component} from 'react';
import {connect} from 'react-redux';
import VillagerList from "../components/villagerList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

import {setSearchField} from "../actions";


const mapStateToProps = state =>{
    return {
        searchField: state.searchField
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onSearchChange : event => dispatch(setSearchField(event.target.value))
    }

}

class App extends Component {
    constructor() {
        super ();
        this.state = {
            data: []
        }
    };
    
    componentDidMount() {
        fetch('http://acnhapi.com/v1/villagers')
            .then(response => response.json())
            .then(data => this.setState({ data: Object.values(data) }))
    };

    render() {
        const {data} = this.state
        const {searchField, onSearchChange} = this.props;
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
                    <SearchBox searchChange = {onSearchChange} searchField = {searchField}/>
                    <Scroll>
                        <ErrorBoundry>
                            <VillagerList data={filterAnimal}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);