import _ from 'lodash';
import * as dataList from './data.csv';

/**
    Using the attached data, create a chart in JavaScript which shows a trend over time of the
    percentage of responses for that day which have a value of “yes” for the “ANSWER” column.
**/

export function chartTest() {
    const groupedData = _.groupBy(dataList, 'DATE')
    // TODO: convert groupedData to array
    const groupedDataList = _.values(groupedData);

    let plottableDataList = [];

    groupedDataList.forEach(groupedDatainstance => {
        const yesCount = groupedDatainstance.reduce((acc, data) => {
            acc = data.ANSWER === 'yes' ? acc + 1 : acc;
            return acc;
        }, 0);
        const yesPercentage = (yesCount/(groupedDatainstance.length) * 100).toFixed(2);
        plottableDataList.push({DATE: groupedDatainstance[0].DATE, yesPercentage})
    });

    const options = {
        type: 'line',
        data: {
            labels: plottableDataList.map(data => `Date ${data.DATE}`),
            datasets: [
                {
                    borderColor: 'rgb(54, 162, 235)',
                    label: 'Yes Percentage',
                    data: plottableDataList.map(data => data.yesPercentage),
                    fill: false,
                }
            ],
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Line Chart for CSV data'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage'
                    }
                }]
            }
        }

    };
    return options;
};