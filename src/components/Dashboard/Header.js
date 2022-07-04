import React from 'react';



const Header = ({ setIsAdding }) => {
  return (
    <header className="flex__mid-container direction--column margin-t-20">
     
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button className="button bg--blue" onClick={() => setIsAdding(true)}>Add Row</button>
       
       
      </div>
    </header>
  );
};

export default Header;
