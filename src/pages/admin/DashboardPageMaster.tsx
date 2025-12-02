import React from 'react';
import DashboardPage from './DashboardPage';

// We reuse the existing DashboardPage by simply rendering it inside the Master layout.
// The Master dashboard needs the create forms enabled for jobs/awards/brands/champions/mentors.
// To achieve that without duplicating logic, we directly import the existing component code but
// we rely on the DashboardPage file having those forms. If in the standard dashboard they are disabled,
// ensure they are enabled in this master context via a prop or separate version.

const DashboardPageMaster: React.FC = () => {
  // Layout is provided by route via AdminLayoutMaster. Just render the content.
  return <DashboardPage />;
};

export default DashboardPageMaster;
