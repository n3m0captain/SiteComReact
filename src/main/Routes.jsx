import React from 'react'
import{Switch, Route, Redirect} from 'react-router'
import Home from '../componentes/home/Home'
import GitHub from '../componentes/github/GitHub'
import Graduacao from '../componentes/graduacao/Graduacao'
import Habilidades from '../componentes/habilidades/Habilidades'


export default props =>
<Switch>
    <Route exact path='/' component={Home} />
    <Route path='/github' component={GitHub}/>
    <Route path='/graduacao' component={Graduacao}/>
    <Route path='/habilidades' component={Habilidades}/>
    <Redirect from='*' to='/' />
</Switch>