import React, {Component} from 'react';
import {connect} from 'react-redux';
import VillagerList from "../components/villagerList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

import {setSearchField, requestAPI} from "../actions";


const mapStateToProps = state =>{
    return {
        searchField: state.searchVillagers.searchField,
        data: state.requestVillagers.data,
        isPending: state.requestVillagers.isPending,
        error: state.requestVillagers.error
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onSearchChange : event => dispatch(setSearchField(event.target.value)),
        onRequestAPI : () => dispatch(requestAPI())
    }

}

class App extends Component {
    
    componentDidMount() {
        this.props.onRequestAPI()
    };

    render() {
        const {searchField, onSearchChange, data, isPending} = this.props;
        const filterAnimal = data.filter(villager =>{
            return villager.name["name-USen"].toLowerCase().includes(searchField.toLowerCase())
        })
        if (isPending){
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