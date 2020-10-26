import React from "react";
import { fabric } from "fabric";

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const fabricCanvas = new fabric.Canvas('canvas-element');
    };

    render() {
        return(
            <div id="fabric-canvas-wrapper">
                <canvas id="canvas-element" className="col"></canvas>
            </div>    
        );
    };
};

export default Canvas;