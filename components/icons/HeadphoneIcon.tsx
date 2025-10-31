import React from 'react';

const HeadphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 13.7a4 4 0 0 0 4 0v-3a4 4 0 0 0-4-4Z" />
    <path d="M18 13.7a4 4 0 0 1-4 0v-3a4 4 0 0 1 4-4Z" />
    <path d="M6 10.7v3.8c0 1.2 1.3 2 2.5 1.5.7-.3 1.2-1 1.5-1.8" />
    <path d="M18 10.7v3.8c0 1.2-1.3 2-2.5 1.5-.7-.3-1.2-1-1.5-1.8" />
  </svg>
);

export default HeadphoneIcon;
