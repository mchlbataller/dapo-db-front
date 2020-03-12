import React, {Component} from 'react';

import CanvasJSReact from "../../services/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineChart(props) {
    var total = 0;
    var test = [];
    props.data.map(function (hit) {
        var date = new Date(hit.created_at);
        if (date.getMonth() == 2 && 5 == date.getDate()) {
            test.push(date.getDate());
            return date.getDate();
        }
    });

    const options = {
        animationEnabled: true,
        title:{
            text: "Project DAPO Android App Hits"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Hits",
            prefix: "",
            includeZero: false
        },
        data: [{
            yValueFormatString: "#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [

                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 42800 },
                { x: new Date(2017, 3), y: 32400 },
                { x: new Date(2017, 4), y: 35260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 40000 },
                { x: new Date(2017, 7), y: 52500 },
                { x: new Date(2017, 8), y: 32300 },
                { x: new Date(2017, 9), y: 42000 },
                { x: new Date(2017, 10), y: 37160 },
                { x: new Date(2017, 11), y: 38400 }
            ]
        }]
    }
    return (
        <div>
            <p> {test.length}</p>

            <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}

export default LineChart;