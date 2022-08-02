import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';


const App = () => {
    //JSX
    //return React.createElement('div', {className:'unaClase'}, React.createElement('div',{}, 'asdasdasdas'));


    return <Counter></Counter>;
    // <>
    //     <div className="" >
    //         <div>sadasdas</div>
    //     </div>
    //     <div className="" >
    //         <div>sadasdas</div>
    //     </div>
    // </> // o </React.Fragment>

};

render(React.createElement(App), document.getElementById('root'));
