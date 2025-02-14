import React, { FunctionComponent } from 'react';

interface CheckmarkProps {
  className?: string;
}

const Checkmark: FunctionComponent<CheckmarkProps> = ({ className }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <title>Checkmark</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M8.79288749,19.6213326 L2.29288115,13.1213263 C1.90237295,12.7308181 1.90237295,12.0976534 2.29288115,11.7071062 L3.70706221,10.292886 C4.09757041,9.90233877 4.73077415,9.90233877 5.12128235,10.292886 L9.5,14.6715622 L18.8787177,5.29288115 C19.2692258,4.90237295 19.9024296,4.90237295 20.2929378,5.29288115 L21.7071189,6.70710128 C22.097627,7.09760947 22.097627,7.73077415 21.7071189,8.12132141 L10.2071076,19.6213717 C9.81656037,20.0118799 9.18339569,20.0118799 8.79288749,19.6213326 L8.79288749,19.6213326 Z"
          fill="#146A5D"
          className="apply-fill"
        ></path>
      </g>
    </svg>
  );
};

export default Checkmark;
