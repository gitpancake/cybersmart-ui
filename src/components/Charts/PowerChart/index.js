import React from 'react';
import { Header } from 'semantic-ui-react';
import { LineChartTemplate } from '../LineTemplate';

const data = [
<<<<<<< HEAD
    {kwh: 20, time: '21:30'},
    {kwh: 0, time: '22:00'},
    {kwh: 89, time: '22:30'},
    {kwh: 78, time: '23:00'},
    {kwh: 65, time: '23:30'},
    {kwh: 23, time: '00:00'},
    {kwh: 15, time: '00:30'},
    {kwh: 2, time: '01:00'}
=======
    {kwh: 0.89, time: '21:30'},
    {kwh: 0.75, time: '22:00'},
    {kwh: 0.62, time: '22:30'},
    {kwh: 0.2, time: '23:00'},
    {kwh: 0.15, time: '23:30'},
    {kwh: 0.09, time: '00:00'},
    {kwh: 0.09, time: '00:30'},
    {kwh: 0.09, time: '01:00'}
>>>>>>> docker
];

export default ( { header }) => {
    return (
        <div>
            <Header as ='h3' textAlign='center'>{ header }</Header>
<<<<<<< HEAD
            <Container>
                <LineChart data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey= 'time'/>
                        <YAxis dataKey = 'kwh'/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey='kwh' stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey='time' stroke="#82ca9d" />
                </LineChart>
            </Container>
=======
            <LineChartTemplate 
                data = {data}
                dataKeys = {{
                        X : 'time',
                        Y : 'kwh'
                }} />
>>>>>>> docker
        </div>
    );
}