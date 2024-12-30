const WaveDivider = () => {
  return (
    <div className="relative h-24 w-full overflow-hidden">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L48 8C96 16 192 32 288 42.7C384 53 480 59 576 53.3C672 48 768 32 864 32C960 32 1056 48 1152 53.3C1248 59 1344 53 1392 50.7L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
          fill="#0EA5E9"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
