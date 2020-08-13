import React, { component, Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'graduation-cap',
    title: 'Graduação',
    subtiltle: 'Graduação de Nemo'
}
export default class Graduacao extends Component {
    render(){
        return (
            <Main {...headerProps}>
            Graduação do usuario Nemo
            </Main>
        )
    }

}