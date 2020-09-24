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
                https://github.com/n3m0captain/
            </Main>
        )
    }

}
