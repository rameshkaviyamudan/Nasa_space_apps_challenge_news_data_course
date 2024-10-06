import React from 'react';
import { cn } from "./lib/utils";
import ClimateCoursesSection from './ClimateCoursesSection';
import ClimateDataSection from './ClimateDataSection';
import { NewsSection } from './NewsSection';

const TabButton = ({ children, active, onClick }) => (
  <button
    className={cn(
      "px-4 py-2 font-semibold rounded-t-lg",
      active ? "bg-white text-blue-600" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default function ClimateDashboard() {
  const [activeTab, setActiveTab] = React.useState('news');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Climate Action News & Data</h1>
      
      <div className="flex mb-4">
        <TabButton 
          active={activeTab === 'news'} 
          onClick={() => setActiveTab('news')}
        >
          Latest News
        </TabButton>
        <TabButton 
          active={activeTab === 'data'} 
          onClick={() => setActiveTab('data')}
        >
          Climate Data
        </TabButton>
        <TabButton 
          active={activeTab === 'courses'} 
          onClick={() => setActiveTab('courses')}
        >
          Mini-Courses
        </TabButton>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        {activeTab === 'news' && <NewsSection />}
        {activeTab === 'data' && <ClimateDataSection />}
        {activeTab === 'courses' && <ClimateCoursesSection />}
      </div>
    </div>
  );
}