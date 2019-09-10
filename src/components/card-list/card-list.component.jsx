import React from 'react'
import {Card} from '../card/card.component';
import '../card-list/card-list.css'
const CardList = (props) => {
    const {monsters} = props;
    console.log('monster: ' , monsters);
    return(
        <div className="card-list"> 
            {
                monsters.map(monster => <Card key={monster.id} monster={monster} />)
            }
        </div>
    )
}
export default CardList;