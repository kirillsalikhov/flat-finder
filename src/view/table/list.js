import React from 'react';
import {observer} from 'mobx-react';

import Header from './header';
import Row from './row';

class List extends React.Component {
    
    render() {
        
        var {model} = this.props;
        return (
            <table>
                <tbody>
                    <Header/>
                    {model.filtered.slice(0,5).map(flat => <Row flat={flat} key={flat.ID}/>)}
                </tbody>
            </table>
        )
    }
    
    componentDidUpdate() {
        console.timeEnd(this.props.model.timerKey);
    }
}

export default List;