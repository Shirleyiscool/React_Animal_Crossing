import React from 'react';
import Villager from "./Villager";

const VillagerList = ({data}) =>{
    // data is an object. Need to take its values first
    let shuffled = data.sort(() => 0.5 - Math.random());

    return (<div>
        {
            shuffled.slice(0, 18).map(villager =>{
                return (<Villager key={villager.id}
                                  species={villager.species}
                                  name={villager.name["name-USen"]}
                                  image_uri = {villager.image_uri}/>)
            })
        }
    </div>);
}

export default VillagerList