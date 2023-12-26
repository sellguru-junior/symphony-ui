const LogoutSvg = ({ color }: { color: string }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0991 11.3333L14.4325 7.99996L11.0991 4.66663"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4326 8H6.43262"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.43262 14H3.76595C3.41233 14 3.07319 13.8595 2.82314 13.6095C2.57309 13.3594 2.43262 13.0203 2.43262 12.6667V3.33333C2.43262 2.97971 2.57309 2.64057 2.82314 2.39052C3.07319 2.14048 3.41233 2 3.76595 2H6.43262"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogoutSvg;
