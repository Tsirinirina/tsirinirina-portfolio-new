const MDGFlag = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8_110)">
        <path
          d="M10.6667 1.66667H4.33334V6H12V3C12 2.64638 11.8595 2.30724 11.6095 2.05719C11.3594 1.80714 11.0203 1.66667 10.6667 1.66667Z"
          fill="#FC3D32"
        />
        <path
          d="M4.33334 10.3333H10.6667C11.0203 10.3333 11.3594 10.1929 11.6095 9.94281C11.8595 9.69276 12 9.35362 12 9V6H4.33334V10.3333Z"
          fill="#007E3A"
        />
        <path
          d="M4.33333 1.66667H1.33333C0.979711 1.66667 0.640573 1.80714 0.390524 2.05719C0.140476 2.30724 0 2.64638 0 3L0 9C0 9.35362 0.140476 9.69276 0.390524 9.94281C0.640573 10.1929 0.979711 10.3333 1.33333 10.3333H4.33333V1.66667Z"
          fill="#EEEEEE"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_110">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MDGFlag;
