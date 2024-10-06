import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from './components/ui/card';
import { AlertCircle } from 'lucide-react';

const climateData = [
  { year: 1880, temperature: 0, co2: 280 },
  { year: 1950, temperature: 0.5, co2: 310 },
  { year: 1975, temperature: 0.8, co2: 330 },
  { year: 2000, temperature: 1.5, co2: 370 },
  { year: 2023, temperature: 2.1, co2: 419.68 },
  { year: 2024, temperature: 2.2, co2: 422.99 }
];

export const ClimateDataSection = () => (
  <Card>
    <CardHeader>
      <CardTitle>Global Temperature and CO2 Levels</CardTitle>
      <CardDescription>Data from NASA and NOAA</CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={climateData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" name="Temp (°C)" />
          <Line yAxisId="right" type="monotone" dataKey="co2" stroke="#82ca9d" name="CO2 (ppm)" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
    <CardFooter>
      <AlertCircle className="mr-2" />
      <span className="text-sm text-gray-500">
        Data sources: 
        <a href="https://www.nasa.gov/news-release/nasa-analysis-confirms-2023-as-warmest-year-on-record/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Global Temperature Data</a>, 
        <a href="https://earthobservatory.nasa.gov/world-of-change/global-temperatures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Long-term Warming</a>, 
        <a href="https://climate.nasa.gov/news/2865/a-degree-of-concern-why-global-temperatures-matter/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Temperature Anomalies</a>, 
        <a href="https://gml.noaa.gov/ccgg/trends/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Current CO2 Concentrations</a>, 
        <a href="https://climate.nasa.gov/vital-signs/carbon-dioxide/?intent=121" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Historical Context</a>, 
        <a href="https://climate.nasa.gov/vital-signs/carbon-dioxide/?intent=121" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Seasonal Variability</a>
      </span>
    </CardFooter>
  </Card>
);

export default ClimateDataSection;
