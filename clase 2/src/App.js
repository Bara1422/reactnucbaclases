import React from 'react';
import { render } from 'react-dom';

const App = () => {
    //JSX
    //return React.createElement('div', {className:'unaClase'}, React.createElement('div',{}, 'asdasdasdas'));

    
    return (
        <div className="" >
            <div>sadasdas</div>
        </div>
    );
};

render(React.createElement(App), document.getElementById('root'));
