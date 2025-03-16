import React from 'react';
import LineGraph from '../components/LineGraph';
import StatBox from '../components/StatBox';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard page!</p>
      <LineGraph/>
      <StatBox title="status: running" data='23423423'/>
    </div>
  );
}

export default Dashboard;