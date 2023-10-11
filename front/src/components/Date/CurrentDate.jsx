import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return <div className='date_format'
  >{formattedDate}</div>;
};
export default CurrentDate;
