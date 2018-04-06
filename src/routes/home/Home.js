/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* global Plotly */
import React from 'react';
// import PropTypes from 'prop-types';
// import s from 'Home.css';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Home extends React.Component {
  // static propTypes = {};

  componentDidMount = () => {
    this.renderCoolnessScatterPlot();
    this.renderEnergyBarChart();
    this.renderPiesPieChart();
    this.render3dSurfacePlot();
  };

  renderEnergyBarChart = () => {
    const data = [
      {
        x: [
          'natural gas',
          'crude oil',
          'coal',
          'nuclear',
          'NGPL',
          'biomass',
          'other',
          'hydro',
        ],
        y: [27, 19, 15, 8, 5, 5, 3, 2],
        type: 'bar',
        marker: {
          color: [
            'rgba(1,204,204,1)',
            'rgba(222,45,38,0.8)',
            'rgba(204,1,204,1)',
            'rgba(204,204,1,1)',
            'rgba(204,50,50,1)',
            'rgba(1,100,50,200)',
            'rgba(15,50,170,1)',
            'rgba(25,200,0,1)',
          ],
        },
      },
    ];

    const layout = {
      title: 'US Primary Energy Production By Major Sources, 2016',
      showLegend: true,
      yaxis: {
        title: 'quadrillion British thermal units',
      },
    };

    Plotly.newPlot('energy-production-bar-chart', data, layout, {
      displayModeBar: false,
    });
  };

  renderCoolnessScatterPlot = () => {
    const el = document.getElementById('coolness-scatter');

    const data = [
      {
        x: [1995, 2000, 2005, 2010, 2015],
        y: [1, 2, 4, 8, 16],
      },
    ];
    const layout = {
      margin: { t: 55 },
      showlegend: true,
      title: 'Coolness of Jim Over Time',
      height: 500,
      xaxis: {
        title: 'Time',
      },
      yaxis: {
        title: 'Coolness Units',
      },
    };

    Plotly.plot(el, data, layout, { displayModeBar: false });
  };

  renderPiesPieChart = () => {
    const el = document.getElementById('pies-pie-chart');

    const data = [
      {
        labels: [
          'Apple',
          'Strawberry',
          'Pumpkin',
          'Cherry',
          'Blueberry',
          'Lemon Meringue',
          'Chocolate',
          'Chess',
          'Pumpkin',
        ],
        values: [20, 19, 16, 13, 9, 8, 8, 5, 2],
        type: 'pie',
      },
    ];

    const layout = { title: 'Pie Chart of Pie Popular' };

    Plotly.newPlot(el, data, layout);
  };

  render3dSurfacePlot = () => {
    Plotly.d3.csv(
      'https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv',
      (err, rows) => {
        function unpack(unpackedRows, key) {
          return unpackedRows.map(row => row[key]);
        }

        const zData = [];
        for (let i = 0; i < 24; i += 1) {
          zData.push(unpack(rows, i));
        }

        const data = [
          {
            z: zData,
            type: 'surface',
          },
        ];

        const layout = {
          title: 'Mt Bruno Elevation',
          autosize: false,
          width: 500,
          height: 500,
          margin: {
            l: 165,
            r: 50,
            b: 65,
            t: 110,
          },
        };
        Plotly.newPlot('3d-surface-chart', data, layout);
      },
    );
  };

  render() {
    return (
      <div className="root">
        <div className="container">
          <h1>Charts!!!</h1>
          <hr />
          <div id="coolness-scatter" />
          <hr />
          <div id="tester" />
          <div id="energy-production-bar-chart" />
          <hr />
          <div id="pies-pie-chart" />
          <hr />
          <div className="surface-chart-container">
            <div id="3d-surface-chart" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
