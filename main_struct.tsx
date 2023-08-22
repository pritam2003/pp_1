import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const App: React.FC = () => {
  return (
    <>
      <nav className="main-nav" id="main-nav">
        <div style={{ height: '80px', background: 'rgb(51,74,92)', paddingTop: '1px' }}>
          <h2 className="text-center" style={{ color: '#fff', letterSpacing: '2px' }}>MENU</h2>
        </div>
        <ul className="nav nav-pills nav-stacked">
          {/* ... navigation links */}
        </ul>
      </nav>

      <div className="page-wrap">
        <div className="jumbotron">
          {/* ... jumbotron content */}
        </div>

        <div className="section" id="about">
          <h1>About</h1>
          <hr />
          {/* ... other sections */}
        </div>

        {/* ... rest of the content */}
      </div>
    </>
  );
}

export default App;
