import React, { FunctionComponent } from "react";

const ProtopieSVG: FunctionComponent = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 512 420'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='512' height='420' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0' transform='scale(0.00195312 0.00238095)' />
        </pattern>
        <image
          id='image0'
          width='512'
          height='420'
          xlinkHref='/images/protopie.png'
        />
      </defs>
    </svg>
  );
};

export default ProtopieSVG;
