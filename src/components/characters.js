import React from 'react' ;
import { CharAttribute } from './charattribute';

export class Characters extends React.Component{

        render(){
            return this.props.characters.map( (character)=>{
                return <CharAttribute character={character} ReloadData={this.props.ReloadData}></CharAttribute>
            })
        }
}