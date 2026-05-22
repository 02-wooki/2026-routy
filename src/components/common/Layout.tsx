import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: 'routes' | 'explore';
  onPageChange: (page: 'routes' | 'explore') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Navigation - handles mobile and desktop logic internally */}
      <Navigation currentPage={currentPage} onPageChange={onPageChange} />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-20 xl:pl-64 transition-all">
        <div className="mx-auto w-full max-w-[1400px] min-h-screen relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
