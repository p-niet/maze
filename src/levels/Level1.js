import React, { useState } from "react";

export default function Level1() {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div>
      <svg
        className="level-one"
        width="983"
        height="494"
        viewBox="0 0 983 494"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          className="field"
          id="path-1-outside-1_0:1"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="983"
          height="494"
          fill="black"
        >
          <rect fill="white" width="983" height="494" />
          <path
            className="field"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 20H162V332H367V172L509 172H821V20H963V172V314H821H509L509 332V474H367H162H55H20V20Z"
          />
        </mask>
        <path
          className="field"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 20H162V332H367V172L509 172H821V20H963V172V314H821H509L509 332V474H367H162H55H20V20Z"
          fill="black"
        />
        <path
          className="border"
          d="M162 20H182V0H162V20ZM20 20V0H0V20H20ZM162 332H142V352H162V332ZM367 332V352H387V332H367ZM367 172L367 152L347 152V172H367ZM509 172L509 192H509V172ZM821 172V192H841V172H821ZM821 20V0H801V20H821ZM963 20H983V0H963V20ZM963 314V334H983V314H963ZM509 314V294H489L489 314L509 314ZM509 332L489 332V332H509ZM509 474V494H529V474H509ZM20 474H0V494H20V474ZM162 0H20V40H162V0ZM182 332V20H142V332H182ZM367 312H162V352H367V312ZM387 332V172H347V332H387ZM367 192L509 192L509 152L367 152L367 192ZM821 152H509V192H821V152ZM801 20V172H841V20H801ZM963 0H821V40H963V0ZM983 172V20H943V172H983ZM983 314V172H943V314H983ZM821 334H963V294H821V334ZM509 334H821V294H509V334ZM489 314L489 332L529 332L529 314L489 314ZM489 332V474H529V332H489ZM509 454H367V494H509V454ZM162 494H367V454H162V494ZM55 494H162V454H55V494ZM20 494H55V454H20V494ZM0 20V474H40V20H0Z"
          fill="#C00000"
          mask="url(#path-1-outside-1_0:1)"
        />
        <rect className="start" width="182" height="110" fill="#268E1C" />
        <rect
          className="finish"
          x="801"
          width="182"
          height="110"
          fill="#2F6FBB"
        />
        <path
          d="M44.124 68.288C42.228 68.288 40.392 68 38.616 67.424C36.864 66.824 35.484 66.056 34.476 65.12L35.808 62.312C36.768 63.176 37.992 63.884 39.48 64.436C40.992 64.964 42.54 65.228 44.124 65.228C46.212 65.228 47.772 64.88 48.804 64.184C49.836 63.464 50.352 62.516 50.352 61.34C50.352 60.476 50.064 59.78 49.488 59.252C48.936 58.7 48.24 58.28 47.4 57.992C46.584 57.704 45.42 57.38 43.908 57.02C42.012 56.564 40.476 56.108 39.3 55.652C38.148 55.196 37.152 54.5 36.312 53.564C35.496 52.604 35.088 51.32 35.088 49.712C35.088 48.368 35.436 47.156 36.132 46.076C36.852 44.996 37.932 44.132 39.372 43.484C40.812 42.836 42.6 42.512 44.736 42.512C46.224 42.512 47.688 42.704 49.128 43.088C50.568 43.472 51.804 44.024 52.836 44.744L51.648 47.624C50.592 46.952 49.464 46.448 48.264 46.112C47.064 45.752 45.888 45.572 44.736 45.572C42.696 45.572 41.16 45.944 40.128 46.688C39.12 47.432 38.616 48.392 38.616 49.568C38.616 50.432 38.904 51.14 39.48 51.692C40.056 52.22 40.764 52.64 41.604 52.952C42.468 53.24 43.632 53.552 45.096 53.888C46.992 54.344 48.516 54.8 49.668 55.256C50.82 55.712 51.804 56.408 52.62 57.344C53.46 58.28 53.88 59.54 53.88 61.124C53.88 62.444 53.52 63.656 52.8 64.76C52.08 65.84 50.988 66.704 49.524 67.352C48.06 67.976 46.26 68.288 44.124 68.288ZM63.7918 45.932H55.1518V42.8H75.9958V45.932H67.3558V68H63.7918V45.932ZM94.7071 61.7H81.3151L78.5431 68H74.8351L86.2471 42.8H89.8111L101.259 68H97.4791L94.7071 61.7ZM93.4471 58.82L88.0111 46.472L82.5751 58.82H93.4471ZM121.866 68L116.43 60.26C115.758 60.308 115.23 60.332 114.846 60.332H108.618V68H105.018V42.8H114.846C118.11 42.8 120.678 43.58 122.55 45.14C124.422 46.7 125.358 48.848 125.358 51.584C125.358 53.528 124.878 55.184 123.918 56.552C122.958 57.92 121.59 58.916 119.814 59.54L125.79 68H121.866ZM114.738 57.272C117.018 57.272 118.758 56.78 119.958 55.796C121.158 54.812 121.758 53.408 121.758 51.584C121.758 49.76 121.158 48.368 119.958 47.408C118.758 46.424 117.018 45.932 114.738 45.932H108.618V57.272H114.738ZM135.827 45.932H127.187V42.8H148.031V45.932H139.391V68H135.827V45.932Z"
          fill="white"
        />
        <path
          d="M836.38 45.932V54.716H849.016V57.812H836.38V68H832.78V42.8H850.564V45.932H836.38ZM855.632 42.8H859.232V68H855.632V42.8ZM888.448 42.8V68H885.496L870.376 49.208V68H866.776V42.8H869.728L884.848 61.592V42.8H888.448ZM895.991 42.8H899.591V68H895.991V42.8ZM914.479 68.288C912.583 68.288 910.747 68 908.971 67.424C907.219 66.824 905.839 66.056 904.831 65.12L906.163 62.312C907.123 63.176 908.347 63.884 909.835 64.436C911.347 64.964 912.895 65.228 914.479 65.228C916.567 65.228 918.127 64.88 919.159 64.184C920.191 63.464 920.707 62.516 920.707 61.34C920.707 60.476 920.419 59.78 919.843 59.252C919.291 58.7 918.595 58.28 917.755 57.992C916.939 57.704 915.775 57.38 914.263 57.02C912.367 56.564 910.831 56.108 909.655 55.652C908.503 55.196 907.507 54.5 906.667 53.564C905.851 52.604 905.443 51.32 905.443 49.712C905.443 48.368 905.791 47.156 906.487 46.076C907.207 44.996 908.287 44.132 909.727 43.484C911.167 42.836 912.955 42.512 915.091 42.512C916.579 42.512 918.043 42.704 919.483 43.088C920.923 43.472 922.159 44.024 923.191 44.744L922.003 47.624C920.947 46.952 919.819 46.448 918.619 46.112C917.419 45.752 916.243 45.572 915.091 45.572C913.051 45.572 911.515 45.944 910.483 46.688C909.475 47.432 908.971 48.392 908.971 49.568C908.971 50.432 909.259 51.14 909.835 51.692C910.411 52.22 911.119 52.64 911.959 52.952C912.823 53.24 913.987 53.552 915.451 53.888C917.347 54.344 918.871 54.8 920.023 55.256C921.175 55.712 922.159 56.408 922.975 57.344C923.815 58.28 924.235 59.54 924.235 61.124C924.235 62.444 923.875 63.656 923.155 64.76C922.435 65.84 921.343 66.704 919.879 67.352C918.415 67.976 916.615 68.288 914.479 68.288ZM951.167 42.8V68H947.567V56.768H933.095V68H929.495V42.8H933.095V53.636H947.567V42.8H951.167Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
