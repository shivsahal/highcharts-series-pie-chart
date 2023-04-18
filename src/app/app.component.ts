import { Component, OnDestroy, OnInit } from '@angular/core';

import exporting from 'highcharts/modules/exporting.js';

import offlineExporting from 'highcharts/modules/offline-exporting';

import Boost from 'highcharts/modules/boost';

import Label from 'highcharts/modules/series-label';

import { Options } from 'highcharts';
import * as Highcharts from 'highcharts';

exporting(Highcharts);

offlineExporting(Highcharts);

Boost(Highcharts);

Label(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chartOptions: Highcharts.Options = {
    title: {
      text: '',
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          {
            color: '#228B22',
            y: 60,
          },
          {
            color: '#F6BE00',
            y: 10,
          },
          {
            color: '#FF0000',
            y: 10,
          },
          {
            color: '#B2BEB5',
            y: 20,
            dataLabels: {
              enabled: true,
              distance: '-100%',
              format: 'test1',
              style: { fontSize: '150%' },
            },
          },
        ],
        center: ['35%', '25%'],
        size: '45%',
        showInLegend: false,
        dataLabels: { enabled: false },
        innerSize: '60%',
      },
      {
        type: 'pie',
        data: [
          {
            color: '#228B22',
            y: 60,
          },
          {
            color: '#F6BE00',
            y: 10,
          },
          {
            color: '#FF0000',
            y: 10,
          },
          {
            color: '#B2BEB5',
            y: 20,
            dataLabels: {
              enabled: true,
              distance: '-100%',
              format: 'test2',
              style: { fontSize: '150%' },
            },
          },
        ],
        center: ['35%', '75%'],
        size: '25%',
        showInLegend: false,
        dataLabels: { enabled: false },
        innerSize: '60%',
      },
      {
        type: 'pie',
        data: [
          {
            color: '#228B22',
            y: 60,
          },
          {
            color: '#F6BE00',
            y: 10,
          },
          {
            color: '#FF0000',
            y: 10,
          },
          {
            color: '#B2BEB5',
            y: 20,
            dataLabels: {
              enabled: true,
              distance: '-100%',
              format: 'test3',
              style: { fontSize: '150%' },
            },
          },
        ],
        center: ['15%', '75%'],
        size: '25%',
        showInLegend: false,
        dataLabels: { enabled: false },
        innerSize: '60%',
      },
      {
        type: 'pie',
        data: [
          {
            color: '#228B22',
            y: 60,
          },
          {
            color: '#F6BE00',
            y: 10,
          },
          {
            color: '#FF0000',
            y: 10,
          },
          {
            color: '#B2BEB5',
            y: 20,
            dataLabels: {
              enabled: true,
              distance: '-100%',
              format: 'test4',
              style: { fontSize: '150%' },
            },
          },
        ],
        center: ['55%', '75%'],
        size: '25%',
        showInLegend: false,
        dataLabels: { enabled: false },
        innerSize: '60%',
      },
      {
        type: 'pie',
        data: [
          {
            color: '#F6BE00',
            y: 70,
            dataLabels: {
              enabled: true,
              distance: '-100%',
              format: 'test5',
              style: {
                fontSize: '150%',
                textOutline: 'none',
              },
            },
          },
        ],
        center: ['80%', '75%'],
        size: '30%',
        showInLegend: false,
        dataLabels: { enabled: false },
      },
    ],
  };
  highcharts: typeof Highcharts = Highcharts;
  chartRef!: Highcharts.Chart;
  charts = [];
  chartCallback: Highcharts.ChartCallbackFunction = (chart: any) => {
    this.chartRef = chart;
  };
}
