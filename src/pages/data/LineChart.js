import React from 'react';
import CanvasJSReact from "../../services/canvasjs.react";
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function LineChart(props) {
    let date1 = []; let date2 = []; let date3 = []; let date4 = []; let date5 = []; let date6 = []; let date7 = []; let date8 = []; let date9 = []; let date10 = []; let date11 = []; let date12 = []; let date13 = []; let date14 = []; let date15 = []; let date16 = []; let date17 = []; let date18 = []; let date19 = []; let date20 = []; let date21 = []; let date22 = []; let date23 = []; let date24 = []; let date25 = []; let date26 = []; let date27 = []; let date28 = []; let date29 = []; let date30 = []; let date31 = [];
    // Assign a month here to fetch
    let month = 2;

    props.data.map(function (hit) {
        let date = new Date(hit.created_at);
        if (date.getMonth() == month && 1 == date.getDate()) { date1.push(hit.activityDescription); }
        if (date.getMonth() == month && 2 == date.getDate()) { date2.push(hit.activityDescription); }
        if (date.getMonth() == month && 3 == date.getDate()) { date3.push(hit.activityDescription); }
        if (date.getMonth() == month && 4 == date.getDate()) { date4.push(hit.activityDescription); }
        if (date.getMonth() == month && 5 == date.getDate()) { date5.push(hit.activityDescription); }
        if (date.getMonth() == month && 6 == date.getDate()) { date6.push(hit.activityDescription); }
        if (date.getMonth() == month && 7 == date.getDate()) { date7.push(hit.activityDescription); }
        if (date.getMonth() == month && 8 == date.getDate()) { date8.push(hit.activityDescription); }
        if (date.getMonth() == month && 9 == date.getDate()) { date9.push(hit.activityDescription); }
        if (date.getMonth() == month && 10 == date.getDate()) { date10.push(hit.activityDescription); }
        if (date.getMonth() == month && 11 == date.getDate()) { date11.push(hit.activityDescription); }
        // If you see that it skips '12', it is because getDate() of 2020-03-12 returns '13'
        if (date.getMonth() == month && 13 == date.getDate()) { date12.push(hit.activityDescription); }
        if (date.getMonth() == month && 14 == date.getDate()) { date13.push(hit.activityDescription); }
        if (date.getMonth() == month && 15 == date.getDate()) { date14.push(hit.activityDescription); }
        if (date.getMonth() == month && 16 == date.getDate()) { date15.push(hit.activityDescription); }
        if (date.getMonth() == month && 17 == date.getDate()) { date16.push(hit.activityDescription); }
        if (date.getMonth() == month && 18 == date.getDate()) { date17.push(hit.activityDescription); }
        if (date.getMonth() == month && 19 == date.getDate()) { date18.push(hit.activityDescription); }
        if (date.getMonth() == month && 20 == date.getDate()) { date19.push(hit.activityDescription); }
        if (date.getMonth() == month && 21 == date.getDate()) { date20.push(hit.activityDescription); }
        if (date.getMonth() == month && 22 == date.getDate()) { date21.push(hit.activityDescription); }
        if (date.getMonth() == month && 23 == date.getDate()) { date22.push(hit.activityDescription); }
        if (date.getMonth() == month && 24 == date.getDate()) { date23.push(hit.activityDescription); }
        if (date.getMonth() == month && 25 == date.getDate()) { date24.push(hit.activityDescription); }
        if (date.getMonth() == month && 26 == date.getDate()) { date25.push(hit.activityDescription); }
        if (date.getMonth() == month && 27 == date.getDate()) { date26.push(hit.activityDescription); }
        if (date.getMonth() == month && 28 == date.getDate()) { date27.push(hit.activityDescription); }
        if (date.getMonth() == month && 29 == date.getDate()) { date28.push(hit.activityDescription); }
        if (date.getMonth() == month && 30 == date.getDate()) { date29.push(hit.activityDescription); }
        if (date.getMonth() == month && 31 == date.getDate()) { date30.push(hit.activityDescription); }
        if (date.getMonth() == month && 32 == date.getDate()) { date31.push(hit.activityDescription); }
    });

    // Data that is based on activity per day.
    const activityData = [date1,
        date2,
        date3,
        date4,
        date5,
        date6,
        date7,
        date8,
        date9,
        date10,
        date11,
        date12,
        date13,
        date14,
        date15,
        date16,
        date17,
        date18,
        date19,
        date20,
        date21,
        date22,
        date23,
        date24,
        date25,
        date26,
        date27,
        date28,
        date29,
        date30,
        date31
    ];


    let options = {
        animationEnabled: true,
        title:{
            text: "Project DAPO Android App Hits"
        },
        axisX: {
            valueFormatString: "DD"
        },
        axisY: {
            title: "Hits",
            prefix: "",
            includeZero: false
        },
        data: [{
                name: "Total Hits",
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "DD",
                type: "spline",
                dataPoints: [
            ]},
            {
                name: "Seen",
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "DD",
                type: "spline",
                dataPoints: [
            ]},
            {
                name: "Bitten",
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "DD",
                type: "spline",
                dataPoints: [
                ]}

        ]
    };

    for(let i = 0; i < 31; i++) {
        // first line showing total
        options.data[0].dataPoints.push({x: new Date(2020, month, i+1), y: activityData[i].length});
        // second line showing seen
        console.log(activityData[i]);
        options.data[1].dataPoints.push({x: new Date(2020, month, i+1), y: activityData[i].filter(x => x === "Seen").length});
        options.data[2].dataPoints.push({x: new Date(2020, month, i+1), y: activityData[i].filter(x => x === "Bitten").length});

    }

    return (
        <div>
            <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}

export default LineChart;