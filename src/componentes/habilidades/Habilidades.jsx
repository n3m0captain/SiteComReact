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
                <div>
                <h3> Habilidades do usuario Nemo</h3>
                </div>
                <ul>
                    <li>Java</li>            
                    <li>Ruby on Rails</li>
                    <li>Hibernate</li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Java Script</li>
                    <li>Node.js</li>
                    <li>HTML 5</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Docker</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Administração de Redes e sistemas Windows e Linux</li>
                    <li>Disigner gráfico, Corel Draw, Adobe Fhotoshop, Adobe Illustrator.</li>
                    <li>Pacote Office</li>
                    <li>Inglês intermediário</li>
                </ul>
            
            </Main>

        )
    }

}
