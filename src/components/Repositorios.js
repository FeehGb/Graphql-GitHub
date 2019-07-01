import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import  gql  from 'graphql-tag'


class Repositorio extends Component {
    
    renderRepositories = (repositories) => (
        
        <ul>
            {repositories.map((repositorio, index) =>
                
                <li key={index}>{repositorio.name}</li>
                
            )}
        </ul>
    )
    
    
    
    render(){
        console.log(this.props)
        const { data } = this.props
        return ( 
            
            <div className="repositorio">
                
                {
                    data.loading ? <p>Carrregando..!</p>
                    : this.renderRepositories( data.viewer.repositories.nodes)
                }
                
            </div>
            
        )
        
    }
    
}



const Query = gql`
query($number_of_repos:Int!){
    viewer {
        name
        repositories(last: $number_of_repos) {
            nodes {
            name
            }
        }
        }
    }  
`;
    
export default graphql( Query,{ 
    options: (props) => ({ variables: { number_of_repos: props.number_of_repos, user:props.user } })
})(Repositorio)
    
    