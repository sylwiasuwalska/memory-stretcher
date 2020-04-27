import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Options from '../components/Options.js';


// test('check if handle click function works', (done) => {
//     const handleClick = () => {
//         done();
//     }
//     const {container } = render(<Grid sizeArray={5} />);
//     const node = container.getElementsByClassName("square");
//     fireEvent.click(node[0]);
// });

test('check if modal is shown after click button OPTIONS', () => {

    const { getByText } = render(<Options setDisplayTime
                                          setHowManyNodes
                                          arraySize={5}/>);

    const buttonOptions = getByText("OPTIONS")

    fireEvent.click(buttonOptions);
    const modalText = getByText("Set display time:")
    expect(modalText).toBeInTheDocument;

});
