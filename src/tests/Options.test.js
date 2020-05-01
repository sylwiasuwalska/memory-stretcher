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

test('time option invokes function changing time',  (done) => {
    const handleClick = () => {
        done();
    }
    const { getByText } = render(<Options setDisplayTime={handleClick}
                                          setHowManyNodes
                                          arraySize={5}/>);

    const buttonOptions = getByText("OPTIONS")
    fireEvent.click(buttonOptions);
    const radioOption = getByText("2 sec")
    fireEvent.click(radioOption);
});

test('level option invokes function changing level',  (done) => {
    const handleClick = () => {
        done();
    }
    const { getByText } = render(<Options setDisplayTime
                                          setHowManyNodes={handleClick}
                                          arraySize={5}/>);

    const buttonOptions = getByText("OPTIONS")
    fireEvent.click(buttonOptions);
    const radioOption = getByText("medium")
    fireEvent.click(radioOption);
});