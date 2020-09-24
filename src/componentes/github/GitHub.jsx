import React, { component, Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'github',
    title: 'GitHub',
    subtiltle: 'Repositório GitHub'
}
export default class GitHub extends Component {
    render(){
        return (
            <Main {...headerProps}>
                 <a href="https://github.com/n3m0captain">Repositório do usuário Nemo</a>
            </Main>
        )
    }

}
