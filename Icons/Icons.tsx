interface IconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const MenuIcon = ({ className, color, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fill={color}
      fontSize={size}
      style={style}
    >
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

const GitHubIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  );
};

const FacebookIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
    </svg>
  );
};

const LinkedInIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
};

const InstagramIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fontSize={size}
      style={style}
    >
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
          <stop offset="25%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
          <stop offset="75%" style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#bc1888", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
};

const HTML5Icon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
    </svg>
  );
};

const CSS3Icon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
    </svg>
  );
};

const JavaScriptIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
    </svg>
  );
};

const TypeScriptIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z" />
    </svg>
  );
};

const ReactIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />
    </svg>
  );
};

const NextJsIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
    </svg>
  );
};

const NodeJsIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fontSize={size}
      style={style}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none" />
        </g>
        <g id="Q3_icons" data-name="Q3 icons">
          <g>
            <path d="M42.3,11.8,25.7,2.4a4,4,0,0,0-3.4,0L5.7,11.8A3.4,3.4,0,0,0,4,14.7V33.3a3.4,3.4,0,0,0,1.7,2.9l4.4,2.5a7.2,7.2,0,0,0,3.8,1c3.1,0,4.9-1.9,4.9-5.1V16.3a.5.5,0,0,0-.5-.5H16.2a.5.5,0,0,0-.5.5V34.6c0,1.5-1.5,2.9-3.9,1.7L7.2,33.7a.5.5,0,0,1-.2-.4V14.7a.8.8,0,0,1,.2-.5L23.7,4.9h.6l16.5,9.3a.8.8,0,0,1,.2.5V33.3a.5.5,0,0,1-.2.4L24.3,43a.6.6,0,0,1-.6,0l-4.2-2.4a.3.3,0,0,0-.4,0l-2.5,1.1c-.3.1-.7.2.1.7l5.6,3.1a3.1,3.1,0,0,0,3.4,0l16.6-9.3A3.4,3.4,0,0,0,44,33.3V14.7A3.4,3.4,0,0,0,42.3,11.8Z" />
            <path d="M29.1,30.3c-4.4,0-5.3-1-5.7-3.1a.4.4,0,0,0-.4-.4H20.8a.4.4,0,0,0-.4.4c0,2.7,1.5,6,8.7,6,5.2,0,8.2-2,8.2-5.5s-2.4-4.5-7.5-5.1-5.6-1-5.6-2.2.4-2.2,4.2-2.2,4.7.7,5.2,2.9a.5.5,0,0,0,.5.4h2.1l.4-.2a.4.4,0,0,0,.1-.3c-.3-3.9-3-5.7-8.3-5.7s-7.5,2-7.5,5.2,2.8,4.5,7.3,5,5.9,1.2,5.9,2.3S32.6,30.3,29.1,30.3Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

const LaravelIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z" />
    </svg>
  );
};

const LaravelLivewireIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      fontSize={size}
      style={style}
    >
      <path
        style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
        d="M108.566 83.547c-1.937 2.926-3.406 6.527-7.34 6.527-6.624 0-6.98-10.203-13.609-10.203-6.625 0-6.265 10.203-12.887 10.203-6.625 0-6.98-10.203-13.609-10.203-6.625 0-6.266 10.203-12.887 10.203-6.625 0-6.98-10.203-13.605-10.203-6.629 0-6.27 10.203-12.89 10.203-2.083 0-3.544-1.008-4.778-2.39-4.738-8.239-7.465-17.895-7.465-28.22 0-30.222 23.367-54.722 52.191-54.722 28.825 0 52.192 24.5 52.192 54.723 0 8.64-1.91 16.816-5.313 24.082Zm0 0"
      />
      <path
        style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
        d="M40.844 78.145v22.668c0 4.066-3.301 7.363-7.371 7.363a7.365 7.365 0 0 1-7.371-7.364V73.45c1.375-2.523 2.945-4.707 5.78-4.707 4.61 0 6.223 5.79 8.962 9.403Zm27.843 1.183v35.844a8.185 8.185 0 0 1-8.187 8.183c-4.523 0-8.191-3.664-8.191-8.183v-40.57c1.543-2.973 3.132-5.86 6.39-5.86 5.16 0 6.563 7.242 9.989 10.586Zm26.211-.66v26.023c0 4.067-3.3 7.364-7.37 7.364-4.071 0-7.372-3.297-7.372-7.364V72.707c1.281-2.195 2.809-3.965 5.364-3.965 4.84 0 6.375 6.38 9.378 9.926Zm0 0"
      />
      <path
        style={{ fillRule: "evenodd", fill: "#000", fillOpacity: 0.298039 }}
        d="M40.844 85.094c-1.309-1.602-2.856-2.79-5.094-2.79-5.316 0-6.293 6.696-9.648 9.712V63.145a7.365 7.365 0 0 1 7.37-7.364c4.071 0 7.372 3.297 7.372 7.364Zm27.843.515c-1.394-1.855-3.023-3.304-5.496-3.304-5.914 0-6.457 8.285-10.882 10.578v-12.77c0-4.52 3.668-8.183 8.191-8.183a8.185 8.185 0 0 1 8.188 8.183Zm26.211-1.433c-1.136-1.117-2.48-1.871-4.265-1.871-5.73 0-6.418 7.777-10.477 10.343V66.734a7.371 7.371 0 0 1 14.742 0Zm0 0"
      />
      <path
        style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
        d="M108.566 83.547c-1.937 2.926-3.406 6.527-7.34 6.527-6.624 0-6.98-10.203-13.609-10.203-6.625 0-6.265 10.203-12.887 10.203-6.625 0-6.98-10.203-13.609-10.203-6.625 0-6.266 10.203-12.887 10.203-6.625 0-6.98-10.203-13.605-10.203-6.629 0-6.27 10.203-12.89 10.203-2.083 0-3.544-1.008-4.778-2.39-4.738-8.239-7.465-17.895-7.465-28.22 0-30.222 23.367-54.722 52.191-54.722 28.825 0 52.192 24.5 52.192 54.723 0 8.64-1.91 16.816-5.313 24.082Zm0 0"
      />
      <path
        style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
        d="M97.273 88.984c13.676-20.332 14.028-42.879 1.059-67.652 9.613 9.844 15.547 23.348 15.547 38.25 0 8.61-1.98 16.75-5.508 23.992-2.004 2.91-3.531 6.5-7.61 6.5a5.947 5.947 0 0 1-3.488-1.09Zm0 0"
      />
      <path
        style={{ fillRule: "evenodd", fill: "#FB70A9", fillOpacity: 1 }}
        d="M58.89 73.117c18.15 0 25.79-10.52 25.79-25.46 0-14.942-11.547-28.692-25.79-28.692-14.245 0-25.792 13.75-25.792 28.691 0 14.942 7.64 25.461 25.793 25.461Zm0 0"
      />
      <path
        style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
        d="M61.625 37.836c0 5.89-4.332 10.668-9.672 10.668-5.344 0-9.672-4.777-9.672-10.668 0-5.89 4.328-10.668 9.672-10.668 5.34 0 9.672 4.777 9.672 10.668Zm0 0"
      />
      <path
        style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
        d="M55.176 35.375c0 2.719-2.164 4.922-4.836 4.922s-4.836-2.203-4.836-4.922 2.164-4.922 4.836-4.922 4.836 2.203 4.836 4.922Zm0 0"
      />
    </svg>
  );
};

const MariaDbIcon = ({ className, size, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      fontSize={size}
      style={style}
    >
      <path d="M29.942 6.518c-0.597 0.293-1.3 0.465-2.042 0.465-0.017 0-0.034-0-0.051-0l0.003 0c-0.543 0-1.064 0.096-1.546 0.271l0.032-0.010c-1.052 0.391-1.916 1.082-2.513 1.969l-0.012 0.018c-0.495 0.693-1.011 1.505-1.487 2.343l-0.074 0.142c-0.382 0.63-0.759 1.169-1.168 1.681l0.024-0.031c-0.701 0.866-1.6 1.545-2.63 1.971l-0.044 0.016c-1.369 0.617-3.070 1.245-4.818 1.767l-0.308 0.079c-1.341 0.441-2.665 0.922-2.958 1.080-1.109 0.603-2.030 1.418-2.737 2.398l-0.016 0.024c-1.253 1.65-1.215 1.641-3.801 1.183q-0.421-0.051-0.844-0.079c-0.12-0.026-0.258-0.041-0.399-0.041-0.483 0-0.925 0.173-1.268 0.461l0.003-0.003-0.284 0.269 0.221 0.11c0.268 0.167 0.496 0.331 0.714 0.508l-0.013-0.010c0.202 0.167 0.426 0.328 0.661 0.473l0.026 0.015c0.089 0.041 0.164 0.084 0.236 0.131l-0.007-0.004c-0.078 0.169-0.173 0.314-0.287 0.443l0.002-0.002c-0.544 0.726-0.741 1.088-0.717 1.31 0.024 0.205 0.040 0.212 0.537 0.212 0.027 0.001 0.059 0.001 0.091 0.001 0.533 0 1.043-0.096 1.515-0.271l-0.030 0.010c1.352-0.551 2.496-1.138 3.582-1.809l-0.103 0.059c0.704-0.485 1.508-0.922 2.358-1.271l0.086-0.031c0.102-0.025 0.442-0.087 0.742-0.142 0.42-0.055 0.906-0.087 1.4-0.087 0.647 0 1.282 0.054 1.899 0.159l-0.067-0.009c0.135 0.016 0.466 0.056 0.75 0.080 0.208 0.014 0.402 0.048 0.587 0.1l-0.020-0.005c0.033 0.015 0.592 0.046 1.247 0.070 1.167 0.032 1.38 0.009 1.625-0.236 0.256-0.353 0.467-0.761 0.613-1.199l0.009-0.032c0.261-0.804 0.521-1.151 0.457-0.615-0.1 1.117-0.418 2.14-0.912 3.055l0.021-0.042c-0.351 0.662-0.738 1.234-1.179 1.758l0.012-0.015c-0.402 0.434-0.394 0.45 0.11 0.394 0.991-0.155 1.876-0.516 2.641-1.039l-0.022 0.014c1.225-0.975 2.167-2.255 2.717-3.727l0.019-0.059c0.134-0.337 0.275-0.275 0.229 0.104-0.016 0.117-0.047 0.394-0.071 0.622l-0.039 0.41 0.441-0.252c1.245-0.867 2.178-2.107 2.644-3.555l0.014-0.049c0.473-1.33 0.936-2.995 1.294-4.699l0.047-0.269c0.106-0.524 0.223-0.961 0.363-1.387l-0.024 0.085c0.092-0.425 0.305-0.791 0.599-1.071l0.001-0.001c0.37-0.353 0.768-0.684 1.189-0.987l0.033-0.023c0.63-0.358 1.134-0.87 1.473-1.486l0.010-0.020c0.16-0.307 0.254-0.671 0.254-1.057 0-0.227-0.033-0.447-0.093-0.655l0.004 0.016c-0.165-0.252-0.355-0.245-0.954 0.008z" />
    </svg>
  );
};

export {
  MenuIcon,
  GitHubIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  LaravelIcon,
  LaravelLivewireIcon,
  MariaDbIcon,
};
