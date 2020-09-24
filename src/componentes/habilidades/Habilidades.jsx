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
                <p className="mb-0">
Java
                </p>
                <p>
Ruby on Rails
Hibernate
C#
C++
Java Script
Node.js
HTML 5
CSS
React
Bootstrap
Docker
MongoDB
MySQL
Administração de Redes e sistemas Windows e Linux
Disigner gráfico, Corel Draw, Adobe Fhotoshop, Adobe Illustrator.
Pacote Office

                     </p>
              
            </Main>

        )
    }

}
