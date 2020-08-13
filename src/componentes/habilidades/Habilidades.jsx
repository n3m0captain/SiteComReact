import React, { component, Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'hand-spock-o',
    title: 'Habilidades',
    subtiltle: 'Habilidades de Nemo'
}
export default class Habilidades extends Component {
    render(){
        return (
            <Main {...headerProps}>
            Habilidades do usuario Nemo
            </Main>
        )
    }

}