import React from 'react';
//components
import AppContent from "./content/AppContent";
import AppHeader from "./content/AppHeader";
import AppFooter from "./content/AppFooter";


const DefaultLayout = () => {
  return (
    <div>
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </div>
  )
}

export default DefaultLayout