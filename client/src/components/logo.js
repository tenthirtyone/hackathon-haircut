import PropTypes from "prop-types";

export const Logo = (props) => {
  const { emblemOnly, variant } = props;

  const color = variant === "light" ? "#ffffff" : "#1D262D";

  return (
    <svg
      width={emblemOnly ? 24 : 95}
      viewBox={emblemOnly ? "0 0 24 24" : "0 0 95 24"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8962 14.1031C22.7583 14.1031 23.97 16.0899 23.0899 17.7308C21.019 21.5914 16.8744 24.174 12.1469 23.9909C5.99297 23.7526 0.981676 18.7349 0.75083 12.5807C0.496975 5.81321 5.90785 0.247437 12.6187 0.247437C17.1319 0.247437 21.0588 2.76645 23.0674 6.47507C23.964 8.13082 22.7796 10.1443 20.8967 10.1443C19.9998 10.1443 19.1578 9.66756 18.7362 8.87581C17.4672 6.49313 14.844 4.93461 11.9012 5.23226C8.57111 5.56925 5.92889 8.31193 5.70646 11.6516C5.43776 15.6846 8.64212 19.0516 12.6187 19.0516C15.2538 19.0516 17.5513 17.5717 18.7206 15.4003C19.1517 14.6004 19.9877 14.1031 20.8962 14.1031Z"
        fill={color}
      />
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5774 12.1237C16.5774 14.3102 14.8049 16.0825 12.6187 16.0825C10.4322 16.0825 8.65991 14.3102 8.65991 12.1237C8.65991 9.93727 10.4322 8.16498 12.6187 8.16498C14.8049 8.16498 16.5774 9.93727 16.5774 12.1237Z"
        fill={color}
      />
      {!emblemOnly && (
        <>
          <g clipPath="url(#clip0)">
            <path
              d="M37.554 3.64491C37.375 2.35229 36.3807 1.60229 35.0909 1.60229C33.571 1.60229 32.4261 2.71026 32.4261 4.59093C32.4261 6.46877 33.5568 7.57957 35.0909 7.57957C36.4744 7.57957 37.3921 6.68469 37.554 5.57389L36.4915 5.56821C36.358 6.25003 35.8012 6.63354 35.1051 6.63354C34.1619 6.63354 33.4858 5.92617 33.4858 4.59093C33.4858 3.27843 34.1563 2.54833 35.108 2.54833C35.8154 2.54833 36.3693 2.94888 36.4915 3.64491H37.554ZM41.196 7.50002L41.6762 6.06536H43.8636L44.3466 7.50002H45.4716L43.4205 1.68184H42.1193L40.071 7.50002H41.196ZM41.9602 5.21878L42.7472 2.87503H42.7926L43.5795 5.21878H41.9602ZM48.2379 7.50002H49.2919V5.36934H50.3658L51.5078 7.50002H52.6839L51.4254 5.19321C52.1101 4.91764 52.4709 4.33242 52.4709 3.54264C52.4709 2.43185 51.755 1.68184 50.4197 1.68184H48.2379V7.50002ZM49.2919 4.49434V2.56253H50.2578C51.0447 2.56253 51.397 2.92333 51.397 3.54264C51.397 4.16196 51.0447 4.49434 50.2635 4.49434H49.2919ZM55.4411 7.50002H56.495V5.53412H57.6087C58.9524 5.53412 59.674 4.7273 59.674 3.60798C59.674 2.49719 58.9609 1.68184 57.6229 1.68184H55.4411V7.50002ZM56.495 4.66764V2.56253H57.4609C58.2507 2.56253 58.6001 2.98867 58.6001 3.60798C58.6001 4.2273 58.2507 4.66764 57.4666 4.66764H56.495ZM62.6882 7.50002L63.1683 6.06536H65.3558L65.8388 7.50002H66.9638L64.9126 1.68184H63.6115L61.5632 7.50002H62.6882ZM63.4524 5.21878L64.2393 2.87503H64.2848L65.0717 5.21878H63.4524ZM68.7713 2.56537H70.5696V7.50002H71.6151V2.56537H73.4134V1.68184H68.7713V2.56537ZM77.3622 1.68184H76.3082V7.50002H77.3622V1.68184ZM85.2848 1.68184H84.2365V5.64775H84.1854L81.4467 1.68184H80.5036V7.50002H81.5575V3.53696H81.6058L84.3473 7.50002H85.2848V1.68184Z"
              fill={color}
            />
            <path
              d="M34.8659 22.3531C37.5634 22.3531 39.1239 20.6801 39.1239 17.9136C39.1239 15.1599 37.5634 13.5 34.9567 13.5H32V22.3531H34.8659ZM33.3357 21.1859V14.6671H34.8746C36.8112 14.6671 37.8098 15.8257 37.8098 17.9136C37.8098 20.0101 36.8112 21.1859 34.7925 21.1859H33.3357ZM42.7439 22.5C43.8418 22.5 44.4601 21.9424 44.7065 21.4453H44.7583V22.3531H46.0205V17.9438C46.0205 16.0115 44.4989 15.6268 43.4442 15.6268C42.2425 15.6268 41.1358 16.111 40.7036 17.3213L41.9183 17.598C42.1084 17.1268 42.5926 16.6729 43.4614 16.6729C44.2958 16.6729 44.7237 17.1095 44.7237 17.8617V17.8919C44.7237 18.3631 44.2396 18.3545 43.0465 18.4928C41.7885 18.6398 40.5004 18.9683 40.5004 20.477C40.5004 21.7825 41.4817 22.5 42.7439 22.5ZM43.0249 21.4626C42.2943 21.4626 41.767 21.134 41.767 20.4943C41.767 19.8026 42.3807 19.5562 43.1286 19.4568C43.548 19.4006 44.5421 19.2882 44.728 19.1023V19.9582C44.728 20.745 44.1012 21.4626 43.0249 21.4626ZM52.8481 17.3343C52.58 16.3012 51.7717 15.6268 50.3366 15.6268C48.8365 15.6268 47.7731 16.4179 47.7731 17.5937C47.7731 18.536 48.3438 19.1628 49.5887 19.4395L50.7126 19.6859C51.3524 19.8286 51.6506 20.1139 51.6506 20.5288C51.6506 21.0433 51.1016 21.4453 50.2544 21.4453C49.4806 21.4453 48.9835 21.1124 48.8279 20.4597L47.5786 20.6499C47.7948 21.8257 48.7717 22.487 50.263 22.487C51.8668 22.487 52.9777 21.6355 52.9777 20.4337C52.9777 19.4957 52.3812 18.9164 51.1621 18.6355L50.1074 18.3934C49.3769 18.2205 49.0613 17.9741 49.0656 17.5245C49.0613 17.0144 49.6146 16.6513 50.3495 16.6513C51.1535 16.6513 51.5253 17.0966 51.6766 17.5418L52.8481 17.3343ZM55.8218 18.4107C55.8218 17.3516 56.4918 16.7464 57.4126 16.7464C58.3031 16.7464 58.8347 17.3127 58.8347 18.2853V22.3531H60.1273V18.1297C60.1273 16.4741 59.2195 15.6268 57.8535 15.6268C56.8204 15.6268 56.1979 16.0764 55.8866 16.794H55.8045V13.5H54.5293V22.3531H55.8218V18.4107ZM62.0862 22.3531H63.3485V21.3199H63.4566C63.69 21.7435 64.1655 22.4827 65.3759 22.4827C66.9839 22.4827 68.1511 21.1945 68.1511 19.0461C68.1511 16.8934 66.9666 15.6268 65.3629 15.6268C64.1309 15.6268 63.6857 16.379 63.4566 16.7896H63.3787V13.5H62.0862V22.3531ZM63.3528 19.0332C63.3528 17.6455 63.958 16.7248 65.0863 16.7248C66.2577 16.7248 66.8456 17.7147 66.8456 19.0332C66.8456 20.3646 66.2404 21.3804 65.0863 21.3804C63.9753 21.3804 63.3528 20.4294 63.3528 19.0332ZM72.5298 22.487C74.4015 22.487 75.6248 21.1167 75.6248 19.0634C75.6248 16.9971 74.4015 15.6268 72.5298 15.6268C70.658 15.6268 69.4346 16.9971 69.4346 19.0634C69.4346 21.1167 70.658 22.487 72.5298 22.487ZM72.5341 21.402C71.3107 21.402 70.7402 20.3343 70.7402 19.0591C70.7402 17.7882 71.3107 16.7075 72.5341 16.7075C73.7488 16.7075 74.3194 17.7882 74.3194 19.0591C74.3194 20.3343 73.7488 21.402 72.5341 21.402ZM79.1303 22.5C80.2283 22.5 80.8464 21.9424 81.0928 21.4453H81.1447V22.3531H82.4068V17.9438C82.4068 16.0115 80.8854 15.6268 79.8306 15.6268C78.6288 15.6268 77.5222 16.111 77.0899 17.3213L78.3046 17.598C78.4949 17.1268 78.979 16.6729 79.8479 16.6729C80.6822 16.6729 81.1101 17.1095 81.1101 17.8617V17.8919C81.1101 18.3631 80.626 18.3545 79.4329 18.4928C78.175 18.6398 76.8868 18.9683 76.8868 20.477C76.8868 21.7825 77.868 22.5 79.1303 22.5ZM79.4113 21.4626C78.6807 21.4626 78.1533 21.134 78.1533 20.4943C78.1533 19.8026 78.7672 19.5562 79.515 19.4568C79.9343 19.4006 80.9286 19.2882 81.1145 19.1023V19.9582C81.1145 20.745 80.4876 21.4626 79.4113 21.4626ZM84.2588 22.3531H85.5518V18.2983C85.5518 17.4294 86.2213 16.8026 87.1377 16.8026C87.4055 16.8026 87.7081 16.8502 87.8125 16.8804V15.6441C87.6829 15.6268 87.4273 15.6138 87.2629 15.6138C86.4847 15.6138 85.8196 16.0548 85.577 16.768H85.5083V15.7133H84.2588V22.3531ZM91.3087 22.4827C92.519 22.4827 92.9947 21.7435 93.2285 21.3199H93.3364V22.3531H94.5989V13.5H93.3059V16.7896H93.2285C92.9947 16.379 92.5538 15.6268 91.3174 15.6268C89.714 15.6268 88.5341 16.8934 88.5341 19.0461C88.5341 21.1945 89.6967 22.4827 91.3087 22.4827ZM91.5948 21.3804C90.4401 21.3804 89.8393 20.3646 89.8393 19.0332C89.8393 17.7147 90.427 16.7248 91.5948 16.7248C92.7225 16.7248 93.3277 17.6455 93.3277 19.0332C93.3277 20.4294 92.7095 21.3804 91.5948 21.3804Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="63"
                height="21"
                fill="white"
                transform="translate(32 1.5)"
              />
            </clipPath>
          </defs>
        </>
      )}
    </svg>
  );
};

Logo.defaultProps = {
  emblemOnly: false,
  variant: "dark",
};

Logo.propTypes = {
  emblemOnly: PropTypes.bool,
  variant: PropTypes.oneOf(["light", "dark"]),
};
