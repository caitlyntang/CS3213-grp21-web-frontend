import React from 'react';
import StatBox from '../components/StatBox';
import GraphBox from '../components/GraphBox';

function Dashboard() {
  return (
    <div>
      <GraphBox/>
      <StatBox title="status: running" data='23423423'/>
      
    </div>
  );
}

export default Dashboard;