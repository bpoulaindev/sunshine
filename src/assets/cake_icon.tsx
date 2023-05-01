import React from "react";

export const CakeIcon = ({
  className = "",
  fill,
  style,
  onClick,
}: {
  className?: string;
  fill?: {
    cake?: string;
    topping?: string;
    candles1?: string;
    candles2?: string;
  };
  onClick?: () => void;
  style?: React.CSSProperties;
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 208 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M74.8572 84.0605C83.8724 83.7047 93.3306 83.489 103.14 83.489C159.974 83.489 206.105 90.002 206.105 98.0787C206.105 98.6394 205.873 99.1624 205.479 99.6907H205.936L206.611 140.063V141.319C206.668 143.271 206.668 145.228 206.724 147.137V148.269C206.78 151.871 206.836 155.478 206.9 159.079V160.077C207.35 174.445 207.575 188.728 207.8 202.972C183.49 209.615 145.017 217.562 97.1843 217.039C56.215 216.645 22.7842 210.181 0.0562744 204.32V99.5128H0.682135C0.344592 99.0384 0.168789 98.5531 0.168789 98.0787C0.168789 93.3448 16.2091 89.0909 41.0888 86.449C51.0604 85.3599 62.5088 84.5296 74.8572 84.0605Z"
        fill={fill?.cake ?? "#F9B53F"}
      />
      <path
        d="M113.907 79.4075C114.758 79.3644 115.601 79.3644 116.452 79.4992C119.005 79.8874 121.382 81.0573 123.027 82.8797C124.898 80.2756 128.526 78.712 132.38 78.7983C136.177 78.9331 139.574 80.626 141.219 83.2733C142.745 81.0196 145.98 79.7148 149.264 80.0168C152.379 80.2756 155.045 81.9685 155.952 84.2761C156.803 83.8394 160.255 82.0117 165.073 82.4484C170.965 82.9714 174.031 86.4489 174.425 86.918C175.107 86.5298 178.504 84.6212 183.265 85.0957C188.933 85.6618 191.767 89.134 192.104 89.5707C194.826 88.0503 198.51 87.7861 201.457 88.9614C205.76 90.6544 206.274 94.2991 206.274 94.5148C206.218 95.4314 206.218 96.3857 206.218 97.3022C195.564 93.7384 182.245 90.0883 166.493 87.5327C143.09 83.7478 122.69 83.7478 107.669 84.7075C90.1028 84.3139 68.8517 84.9285 45.1111 87.964C28.1637 90.1368 13.15 93.1291 0.175733 96.2994C0.168702 95.6902 0.168701 95.1294 0.168701 94.5148C0.513276 91.9538 2.72137 89.7863 5.78035 88.9614C9.97855 87.8292 13.5438 89.8295 13.8251 89.9589C14.0009 89.6138 15.759 86.0931 20.801 85.0957C26.1244 84.0119 30.203 86.7455 30.4351 86.918C31.9048 84.357 35.0763 82.6209 38.7049 82.4484C44.0352 82.1896 47.1505 85.5324 47.263 85.7049C47.9451 84.9285 49.6961 83.1008 52.8746 82.2327C56.9533 81.1436 61.714 82.1033 65.1668 84.6643C65.3426 84.3139 66.6436 81.7097 70.2722 80.8039C73.3311 80.0168 76.8402 80.8417 79.1116 82.8366C79.6179 82.1896 80.9259 80.7123 83.4152 80.0168C86.7063 79.0193 90.6724 79.758 93.5626 81.8391C93.8439 81.4078 95.1449 79.3213 98.0913 78.5826C101.439 77.8008 105.461 79.0678 107.669 81.8391C108.239 81.3647 110.391 79.6717 113.907 79.4075Z"
        fill={fill?.topping ?? "#F14947"}
      />
      <path
        d="M183.265 23.8362C181.908 29.0445 182.076 34.5601 181.507 39.8169C180.888 45.5428 180.15 51.2795 179.467 57.0485C178.223 68.3385 176.746 79.6231 175.22 90.9131C174.763 94.477 182.02 94.477 182.47 90.9131C183.834 79.8442 184.91 68.7267 185.761 57.6146C186.211 52.0559 186.493 46.5025 186.725 40.9438C186.95 35.4713 187.969 29.74 187.287 24.273C187.118 22.58 183.778 21.9276 183.265 23.8362ZM150.966 17.1938C150.115 19.7979 150.629 22.6231 150.741 25.2704C150.91 28.2681 151.135 31.2173 151.304 34.2151C151.648 40.3345 151.93 46.5025 152.211 52.622C152.78 64.7369 153.062 76.8464 153.343 88.9614C153.399 92.563 160.769 92.563 160.656 88.9614C160.199 76.8464 159.356 64.7369 158.273 52.622C157.766 46.6751 157.14 40.7281 156.465 34.7327C156.121 31.7403 155.839 28.7857 155.439 25.788C155.045 22.9682 155.045 19.7548 153.631 17.1506C153.118 16.3689 151.36 16.1101 150.966 17.1938ZM130.109 18.0187C128.639 23.75 129.884 30.3062 130.109 36.1668C130.341 42.723 130.109 49.2361 130.053 55.7491C129.884 68.6458 129.434 81.494 128.238 94.3422C127.957 97.5987 134.645 97.5987 134.926 94.3422C136.065 81.494 136.684 68.5973 136.403 55.7491C136.234 49.4086 135.664 43.0681 135.27 36.7329C135.038 33.5627 134.757 30.3924 134.363 27.2222C134.019 24.1436 133.906 20.9733 132.493 18.0187C132.092 17.2369 130.397 17.0644 130.109 18.0187ZM104.216 22.8819C104.385 34.2582 103.816 45.6345 104.273 57.0054C104.723 68.3816 105.067 79.7579 105.461 91.1288C105.574 94.3853 112.261 94.3853 112.092 91.1288C111.467 79.7579 110.784 68.3816 110.222 57.0054C109.652 45.5859 108.07 34.2582 107.219 22.8819C107.163 21.4046 104.216 21.4046 104.216 22.8819ZM79.393 19.9758C78.3171 25.4429 79.5055 31.3467 79.5618 36.9055C79.618 42.8524 79.9063 48.7562 80.0188 54.7031C80.1876 66.5593 79.8501 78.4963 79.2805 90.3524C79.1117 94.2128 86.9314 94.2128 87.1565 90.3524C87.7823 78.4531 87.6698 66.6024 86.9314 54.7031C86.5939 48.7562 86.1368 42.8093 85.1734 36.9055C84.7234 33.9509 84.1537 31.0017 83.6404 28.0039C83.1903 25.3135 83.0216 22.58 81.7769 19.9758C81.4886 19.1509 79.618 18.9299 79.393 19.9758ZM56.6088 29.74C54.6891 34.9968 55.6525 41.332 55.5962 46.7613C55.5962 52.5842 55.4767 58.3533 55.4204 64.1708C55.4204 69.9883 55.3641 75.7627 55.3079 81.5803C55.2516 87.5326 54.6258 93.6089 55.1954 99.5559C55.4767 102.856 61.4329 102.812 61.8267 99.5559C62.5088 93.6467 61.9955 87.5326 61.9392 81.5803C61.8829 75.7627 61.7142 69.9883 61.5454 64.1708C61.3766 58.3533 60.9758 52.5842 60.6383 46.7613C60.2937 41.332 60.807 34.9106 58.3669 29.74C58.0856 29.093 56.8972 29.0445 56.6088 29.74ZM29.9218 25.0547C30.0344 23.4049 32.9246 23.4912 33.1496 25.0547C35.1327 36.6035 35.7585 48.2817 36.5532 59.8737C36.947 65.4702 37.3478 71.1152 37.7978 76.717C38.0299 79.58 38.1916 82.4052 38.3112 85.2681C38.3675 87.9208 38.7613 90.87 37.6291 93.431C36.6094 95.647 31.7924 96.1214 31.1103 93.431C30.4352 90.7891 30.9978 87.9639 30.9978 85.2681C31.054 82.4052 30.8852 79.58 30.829 76.717C30.6602 71.1152 30.4915 65.4702 30.2594 59.8737C29.8093 48.3249 29.1835 36.6467 29.9218 25.0547Z"
        fill={fill?.candles1 ?? "#F14947"}
      />
      <path
        d="M0.112514 204.104C10.2036 207.054 24.4297 210.617 41.7639 213.259C68.0008 217.211 88.4574 217.039 103.872 216.818C120.418 216.602 143.259 216.171 171.929 210.569C186.893 207.614 199.073 204.142 207.8 201.322C207.181 200.799 206.555 200.233 205.873 199.716C205.142 199.236 202.702 197.85 199.418 197.98C195.508 198.109 191.992 200.233 190.466 203.403C189.84 203.021 186.95 201.236 182.927 201.5C178.961 201.754 175.501 203.889 173.975 206.924C173.687 206.66 171.254 204.32 167.231 204.358C163.884 204.401 160.825 206.142 159.58 208.747C159.236 208.482 155.727 205.965 150.685 206.617C145.354 207.312 143.203 210.914 143.034 211.178C142.464 210.785 139.462 208.833 134.982 209.049C129.884 209.313 127.162 212.219 126.768 212.607C125.58 210.181 122.345 208.617 118.949 208.881C115.545 209.097 112.711 211.092 112.092 213.653C111.804 213.389 107.95 210.046 102.114 210.526C97.5288 210.914 94.9199 213.437 94.4698 213.874C94.2378 213.61 91.3476 210.353 86.0805 210.353C81.5448 210.353 78.7671 212.742 78.3733 213.087C77.4661 210.353 74.4071 208.353 70.7785 208.137C67.2695 207.922 63.9222 209.313 62.3329 211.701C62.0516 211.308 59.6748 208.31 54.7452 207.749C49.4149 207.145 45.7863 209.83 45.4488 210.132C45.1675 209.701 43.2969 206.876 38.93 205.965C33.7191 204.881 29.6405 207.528 29.3592 207.749C29.1271 207.312 27.3129 204.358 22.8404 203.36C17.8546 202.234 13.8815 204.493 13.4877 204.708C12.9743 202.584 10.9912 200.799 8.27683 200.104C5.38662 199.365 2.15184 199.98 0 201.667C0.0562572 202.492 0.112514 203.317 0.112514 204.104ZM0.225029 96.2993C2.3839 94.6495 5.61165 94.0834 8.44561 94.8652C11.1108 95.6038 13.0376 97.3831 13.4877 99.5559C13.8885 99.3348 17.8546 97.1674 22.7841 98.3374C27.2003 99.4211 28.9021 102.376 29.1271 102.812C29.4084 102.591 33.4941 100.03 38.6487 101.206C42.9594 102.16 44.7666 105.023 44.9987 105.46C45.3362 105.195 49.0211 102.51 54.2882 103.244C59.1614 103.896 61.4328 106.888 61.7141 107.325C63.3596 104.937 66.7561 103.594 70.216 103.853C73.8375 104.155 76.784 106.198 77.6349 108.932C78.0357 108.587 80.8134 106.198 85.3421 106.285C90.56 106.371 93.3939 109.714 93.5627 109.929C94.0127 109.455 96.6779 107.023 101.27 106.673C107.107 106.241 110.784 109.627 111.073 109.929C111.748 107.368 114.582 105.46 117.985 105.239C121.382 105.066 124.56 106.635 125.693 109.104C126.03 108.716 128.864 105.848 133.906 105.632C138.386 105.46 141.332 107.503 141.838 107.848C142.014 107.584 144.222 103.982 149.546 103.379C154.538 102.812 157.935 105.33 158.272 105.589C159.524 103.028 162.639 101.335 165.98 101.335C169.946 101.335 172.33 103.724 172.611 103.982C174.2 100.942 177.709 98.9035 181.626 98.6878C185.592 98.4668 188.426 100.289 189.045 100.726C190.634 97.5987 194.2 95.5176 198.053 95.4313C201.344 95.3882 203.665 96.7738 204.403 97.2537C205.029 97.7713 205.648 98.3374 206.274 98.8604C197.547 101.551 185.36 104.899 170.459 107.584C141.902 112.798 119.286 112.884 102.852 112.884C87.5572 112.884 67.2695 112.755 41.3701 108.409C24.1976 105.551 10.2036 101.766 0.288318 98.6393C0.225029 97.906 0.225029 97.0811 0.225029 96.2993Z"
        fill={fill?.topping ?? "#F14947"}
      />
      <path
        d="M148.245 188.641C147.225 188.641 146.43 189.251 146.43 190.032C146.43 190.814 147.225 191.423 148.245 191.423C149.264 191.423 150.059 190.814 150.059 190.032C150.059 189.251 149.264 188.641 148.245 188.641ZM159.862 177.357C158.898 177.357 158.16 177.917 158.16 178.656C158.16 179.395 158.898 179.961 159.862 179.961C160.825 179.961 161.564 179.395 161.564 178.656C161.564 177.961 160.825 177.357 159.862 177.357ZM129.715 184.824C128.527 184.824 127.507 185.563 127.507 186.522C127.507 187.471 128.47 188.21 129.715 188.21C130.96 188.21 131.923 187.471 131.923 186.522C131.923 185.563 130.903 184.824 129.715 184.824ZM48.1139 190.647C46.5317 190.647 45.2237 191.639 45.2237 192.852C45.2237 194.071 46.5317 195.068 48.1139 195.068C49.7032 195.068 51.0041 194.071 51.0041 192.852C51.0041 191.639 49.7032 190.647 48.1139 190.647ZM178.279 186.522C177.372 186.522 176.69 187.078 176.69 187.73C176.69 188.426 177.428 188.949 178.279 188.949C179.186 188.949 179.868 188.383 179.868 187.73C179.868 187.078 179.13 186.522 178.279 186.522ZM103.928 201.581C102.571 201.581 101.495 202.406 101.495 203.452C101.495 204.493 102.571 205.318 103.928 205.318C105.292 205.318 106.368 204.493 106.368 203.452C106.368 202.406 105.292 201.581 103.928 201.581ZM79.0554 185.476C76.784 185.476 74.9767 186.862 74.9767 188.598C74.9767 190.334 76.784 191.731 79.0554 191.731C81.3197 191.731 83.134 190.334 83.134 188.598C83.134 186.862 81.3197 185.476 79.0554 185.476ZM51.0041 175.75C49.5837 175.75 48.4515 176.618 48.4515 177.702C48.4515 178.785 49.5837 179.659 51.0041 179.659C52.4176 179.659 53.5498 178.785 53.5498 177.702C53.6131 176.618 52.4176 175.75 51.0041 175.75ZM29.6405 184.387C28.1075 184.387 26.8628 185.342 26.8628 186.522C26.8628 187.687 28.1075 188.641 29.6405 188.641C31.1665 188.641 32.4182 187.687 32.4182 186.522C32.4182 185.342 31.1665 184.387 29.6405 184.387ZM150.509 130.854C149.489 130.854 148.702 131.463 148.702 132.251C148.702 133.027 149.489 133.636 150.509 133.636C151.536 133.636 152.323 133.027 152.323 132.251C152.323 131.463 151.472 130.854 150.509 130.854ZM162.07 115.445C161.106 115.445 160.375 116.006 160.375 116.744C160.375 117.488 161.106 118.049 162.07 118.049C163.033 118.049 163.772 117.488 163.772 116.744C163.772 116.006 163.033 115.445 162.07 115.445ZM134.476 119.305C133.287 119.305 132.268 120.044 132.268 121.004C132.268 121.958 133.231 122.697 134.476 122.697C135.72 122.697 136.684 121.958 136.684 121.004C136.684 120.044 135.664 119.305 134.476 119.305ZM50.322 132.854C48.7328 132.854 47.4318 133.852 47.4318 135.07C47.4318 136.283 48.7328 137.281 50.322 137.281C51.9113 137.281 53.2122 136.283 53.2122 135.07C53.2685 133.852 51.9675 132.854 50.322 132.854ZM180.487 128.73C179.58 128.73 178.905 129.296 178.905 129.943C178.905 130.638 179.643 131.167 180.487 131.167C181.394 131.167 182.076 130.595 182.076 129.943C182.076 129.296 181.338 128.73 180.487 128.73ZM106.368 134.892C105.011 134.892 103.928 135.723 103.928 136.763C103.928 137.804 105.011 138.629 106.368 138.629C107.725 138.629 108.801 137.804 108.801 136.763C108.801 135.723 107.725 134.892 106.368 134.892ZM89.7653 121.872C87.501 121.872 85.6867 123.257 85.6867 124.993C85.6867 126.73 87.501 128.126 89.7653 128.126C92.0297 128.126 93.844 126.73 93.844 124.993C93.844 123.257 92.0297 121.872 89.7653 121.872ZM53.2685 117.963C51.855 117.963 50.7229 118.831 50.7229 119.915C50.7229 121.004 51.855 121.872 53.2685 121.872C54.689 121.872 55.8212 121.004 55.8212 119.915C55.8212 118.831 54.689 117.963 53.2685 117.963ZM34.6263 128.73C34.6263 129.9 33.3816 130.854 31.8486 130.854C30.3226 130.854 29.0709 129.9 29.0709 128.73C29.0709 127.554 30.3226 126.606 31.8486 126.606C33.4378 126.606 34.6263 127.554 34.6263 128.73Z"
        fill={fill?.topping ?? "#F14947"}
      />
      <path
        d="M177.428 195.111C176.071 195.111 174.995 195.936 174.995 196.977C174.995 198.028 176.071 198.848 177.428 198.848C178.792 198.848 179.868 198.028 179.868 196.977C179.868 195.936 178.792 195.111 177.428 195.111ZM117.191 193.505C116.284 193.505 115.489 194.071 115.489 194.809C115.489 195.505 116.227 196.109 117.191 196.109C118.098 196.109 118.893 195.548 118.893 194.809C118.893 194.071 118.098 193.505 117.191 193.505ZM69.1964 175.534C68.0572 175.534 67.15 176.224 67.15 177.092C67.15 177.961 68.0572 178.656 69.1964 178.656C70.3285 178.656 71.2357 177.961 71.2357 177.092C71.2357 176.224 70.3285 175.534 69.1964 175.534ZM8.89572 165.247C7.31349 165.247 6.06177 166.196 6.06177 167.42C6.06177 168.628 7.31349 169.587 8.89572 169.587C10.485 169.587 11.7297 168.628 11.7297 167.42C11.7297 166.196 10.4287 165.247 8.89572 165.247ZM8.89572 188.949C7.31349 188.949 6.06177 189.903 6.06177 191.116C6.06177 192.335 7.31349 193.289 8.89572 193.289C10.485 193.289 11.7297 192.335 11.7297 191.116C11.6805 189.946 10.4287 188.949 8.89572 188.949ZM185.248 176.489C182.983 176.489 181.113 177.917 181.113 179.659C181.113 181.395 182.983 182.829 185.248 182.829C187.519 182.829 189.383 181.395 189.383 179.659C189.383 177.917 187.519 176.489 185.248 176.489ZM179.636 137.324C178.279 137.324 177.203 138.149 177.203 139.195C177.203 140.236 178.279 141.06 179.636 141.06C181 141.06 182.076 140.236 182.076 139.195C182.076 138.149 181 137.324 179.636 137.324ZM119.399 135.723C118.492 135.723 117.704 136.283 117.704 137.028C117.704 137.761 118.435 138.327 119.399 138.327C120.306 138.327 121.101 137.761 121.101 137.028C121.101 136.283 120.306 135.723 119.399 135.723ZM71.4044 117.747C70.2723 117.747 69.3651 118.437 69.3651 119.305C69.3651 120.179 70.2723 120.869 71.4044 120.869C72.5366 120.869 73.4438 120.179 73.4438 119.305C73.4438 118.437 72.5366 117.747 71.4044 117.747ZM11.1108 107.455C9.52158 107.455 8.27689 108.409 8.27689 109.627C8.27689 110.841 9.52158 111.795 11.1108 111.795C12.6931 111.795 13.9448 110.841 13.9448 109.627C13.9448 108.409 12.6368 107.455 11.1108 107.455ZM11.1108 131.167C9.52158 131.167 8.27689 132.116 8.27689 133.334C8.27689 134.547 9.52158 135.507 11.1108 135.507C12.6931 135.507 13.9448 134.547 13.9448 133.334C13.9448 132.116 12.6368 131.167 11.1108 131.167ZM190.29 114.62C190.29 116.356 188.419 117.79 186.155 117.79C183.891 117.79 182.02 116.356 182.02 114.62C182.02 112.884 183.891 111.45 186.155 111.45C188.419 111.45 190.29 112.841 190.29 114.62Z"
        fill="#456EB8"
      />
      <path
        d="M195.789 191.38C194.432 191.38 193.356 192.205 193.356 193.251C193.356 194.286 194.432 195.111 195.789 195.111C197.146 195.111 198.229 194.286 198.229 193.251C198.229 192.248 197.146 191.38 195.789 191.38ZM38.5924 179.659C37.7978 179.659 37.1789 180.133 37.1789 180.743C37.1789 181.352 37.7978 181.826 38.5924 181.826C39.387 181.826 40.0058 181.352 40.0058 180.743C40.0058 180.133 39.387 179.659 38.5924 179.659ZM32.8682 167.458C31.7923 167.458 30.8852 168.153 30.8852 168.978C30.8852 169.803 31.7923 170.493 32.8682 170.493C33.9441 170.493 34.8513 169.803 34.8513 168.978C34.8513 168.153 33.9441 167.458 32.8682 167.458ZM163.772 188.339C162.126 188.339 160.769 189.38 160.769 190.647C160.769 191.898 162.126 192.944 163.772 192.944C165.417 192.944 166.774 191.898 166.774 190.647C166.774 189.38 165.473 188.339 163.772 188.339ZM148.245 198.244C146.374 198.244 144.841 199.408 144.841 200.848C144.841 202.277 146.374 203.452 148.245 203.452C150.115 203.452 151.641 202.277 151.641 200.848C151.641 199.408 150.115 198.244 148.245 198.244ZM106.368 185.218C103.928 185.218 101.889 186.738 101.889 188.641C101.889 190.555 103.872 192.076 106.368 192.076C108.801 192.076 110.841 190.555 110.841 188.641C110.841 186.738 108.858 185.218 106.368 185.218ZM197.997 133.593C196.64 133.593 195.564 134.423 195.564 135.459C195.564 136.499 196.64 137.324 197.997 137.324C199.361 137.324 200.437 136.499 200.437 135.459C200.437 134.461 199.361 133.593 197.997 133.593ZM40.8005 121.872C40.0058 121.872 39.387 122.346 39.387 122.955C39.387 123.565 40.0058 124.039 40.8005 124.039C41.5951 124.039 42.221 123.565 42.221 122.955C42.221 122.346 41.5951 121.872 40.8005 121.872ZM35.0763 109.676C34.0004 109.676 33.0933 110.366 33.0933 111.191C33.0933 112.016 34.0004 112.711 35.0763 112.711C36.1522 112.711 37.0594 112.016 37.0594 111.191C37.0594 110.366 36.1522 109.676 35.0763 109.676ZM168.926 119.915C167.281 119.915 165.923 120.961 165.923 122.217C165.923 123.478 167.281 124.519 168.926 124.519C170.572 124.519 171.929 123.478 171.929 122.217C171.929 120.961 170.572 119.915 168.926 119.915ZM160.368 132.854C158.497 132.854 156.972 134.024 156.972 135.459C156.972 136.893 158.497 138.063 160.368 138.063C162.239 138.063 163.772 136.893 163.772 135.459C163.772 134.024 162.295 132.854 160.368 132.854ZM117.697 119.915C115.264 119.915 113.225 121.435 113.225 123.349C113.225 125.215 115.208 126.778 117.697 126.778C120.137 126.778 122.176 125.258 122.176 123.349C122.176 121.435 120.193 119.915 117.697 119.915ZM167.738 26.9203C166.718 32.5168 166.943 38.2049 166.493 43.8499C166.092 49.5812 165.811 55.3125 165.642 61.0437C165.241 72.6788 164.735 84.357 163.94 95.9975C163.715 99.378 170.572 99.378 170.797 95.9975C171.535 84.357 172.098 72.7219 172.33 61.0437C172.442 55.3125 172.33 49.5812 171.985 43.8499C171.648 38.2049 171.76 32.4736 170.572 26.9203C170.347 25.8797 167.963 25.8312 167.738 26.9203ZM145.354 30.0043C144.279 35.2126 144.279 40.5503 143.878 45.8017C143.484 51.5761 143.027 57.3074 142.633 63.0818C141.838 74.4149 141.156 85.748 140.193 97.0812C139.912 100.597 147.056 100.553 147.281 97.0812C148.132 85.7912 148.807 74.4149 148.863 63.0818C148.863 57.523 148.751 51.9265 148.526 46.3678C148.301 40.9438 148.357 35.3851 147.225 30.0043C147.112 29.2603 145.523 29.2603 145.354 30.0043ZM122.008 28.9152C121.382 31.3899 121.719 33.8647 121.719 36.3826C121.776 39.1592 121.551 41.9844 121.382 44.7665C121.044 49.9748 120.812 55.1831 120.362 60.3967C119.455 71.1152 117.641 82.0117 117.641 92.741C117.641 95.5985 123.878 96.4719 124.441 93.4311C126.311 82.7934 126.03 71.6328 125.686 60.9143C125.517 55.5281 125.46 50.0988 125.123 44.718C124.954 42.1138 124.722 39.5097 124.666 36.9055C124.61 34.2151 124.898 31.5193 124.103 28.8721C123.766 28.1765 122.233 28.1334 122.008 28.9152ZM88.5136 28.6133C88.5136 31.3899 89.3082 34.1235 89.702 36.8624C90.1028 39.6391 90.1591 42.3726 90.2716 45.1493C90.4404 50.3198 91.01 55.485 91.4038 60.6124C92.1984 71.2878 92.3109 82.0548 93.2181 92.741C93.5556 96.4719 100.757 96.5582 100.869 92.741C101.207 81.9254 99.9057 70.8133 98.5485 60.0409C97.8663 54.8757 97.2405 49.6675 95.9958 44.5508C94.6948 39.1592 94.519 33.4334 92.6485 28.1765C92.0859 26.3973 88.5136 26.7478 88.5136 28.6133ZM66.7561 19.3181C65.6802 24.9631 66.3553 30.7807 66.4116 36.4688C66.4678 42.2864 66.299 48.0608 66.1865 53.8837C66.0177 59.6958 65.7927 65.4702 65.5044 71.2878C65.3356 74.2855 65.1669 77.2778 64.9981 80.2756C64.8293 83.0954 64.316 86.0122 64.9981 88.832C65.5677 91.4362 70.6097 91.0857 71.4044 88.832C72.424 86.1362 72.192 83.0954 72.3045 80.2756C72.424 77.2778 72.5365 74.2855 72.5928 71.2878C72.7053 65.4702 72.7053 59.6958 72.5928 53.8837C72.4803 48.0608 72.1357 42.2864 71.8544 36.4688C71.5731 30.7807 71.6857 24.8338 69.9276 19.3181C69.4776 18.2344 67.0374 18.105 66.7561 19.3181ZM42.1014 20.4504C41.4263 32.8672 42.0452 45.1978 43.3531 57.6147C43.972 63.691 44.7666 69.8105 45.6175 75.8922C46.0113 78.8468 46.4684 81.796 46.9184 84.7452C47.3755 87.5327 47.0942 91.2583 49.2461 93.609C50.7721 95.2534 53.831 94.9946 54.6819 93.0375C55.8774 90.4333 54.4569 87.22 54.0068 84.5295C53.4372 81.4509 52.9239 78.4101 52.4176 75.3261C51.3979 69.0772 50.4345 62.7852 49.5274 56.5256C47.8256 44.416 46.1238 32.3011 43.9157 20.2778C43.8032 19.4098 42.1577 19.6686 42.1014 20.4504ZM14.1065 30.4788C14.2823 29.0446 17.285 28.4839 17.6225 30.1283C18.6985 35.4282 18.9797 40.7659 19.7181 46.109C20.4565 51.3173 21.1949 56.4878 21.8137 61.6961C23.1217 72.4577 25.3298 83.0954 26.919 93.8624C24.5914 93.1238 22.2145 92.3905 19.8939 91.6572C20.2877 91.4362 20.6253 91.2205 21.0261 90.9563C23.7405 89.3496 27.9949 90.7407 27.0878 93.6467C26.9753 93.9972 26.8557 94.3423 26.7432 94.6927C25.8431 97.5556 19.4368 97.8144 18.811 94.6927C16.7154 84.1845 15.8082 73.4175 14.7323 62.823C14.226 57.6147 13.9939 52.4441 13.8814 47.2358C13.8814 41.634 13.4876 35.9944 14.1065 30.4788Z"
        fill={fill?.candles2 ?? "#3BA27A"}
      />
      <path
        d="M206.78 141.368C197.034 143.492 187.006 144.878 176.922 145.837C145.186 148.873 112.887 149.18 81.0385 147.352C65.5115 146.484 49.9845 145.056 34.6263 143.055C23.1217 141.583 11.4483 139.971 0.0562744 137.804V135.674C13.3189 137.976 26.5745 140.322 40.1254 141.972C71.2919 145.746 102.965 147.309 134.532 146.662C158.561 146.145 183.377 145.012 206.724 140.106C206.724 140.537 206.78 140.931 206.78 141.368ZM207.069 160.163C193.011 162.336 178.729 163.894 164.454 164.983C133.055 167.371 101.27 167.328 69.8714 164.854C54.5132 163.678 39.2745 161.899 24.1414 159.554C16.1529 158.341 8.04479 157.036 0.0562744 155.478V153.348C9.80283 155.3 19.5494 157.122 29.4717 158.599C88.2323 167.199 148.245 166.848 207.069 159.079V160.163ZM206.837 147.18C181.282 153.526 153.744 154.868 127.106 155.478C95.5458 156.168 63.866 154.561 32.6995 150.787C21.7082 149.439 10.8787 147.665 0.112532 145.794V147.962C9.12774 149.482 18.2484 150.744 27.2636 151.871C42.6148 153.822 58.1418 155.3 73.6688 156.168C105.517 157.947 137.816 157.688 169.552 154.647C182.245 153.434 194.882 151.612 206.956 148.355C206.9 147.962 206.9 147.573 206.837 147.18ZM4.53575 177.093C3.6286 177.093 2.89023 177.659 2.89023 178.354C2.89023 179.05 3.6286 179.61 4.53575 179.61C5.4429 179.61 6.17424 179.05 6.17424 178.354C6.17424 177.659 5.4429 177.093 4.53575 177.093ZM36.8344 193.289C35.7022 193.289 34.7951 193.984 34.7951 194.852C34.7951 195.72 35.7022 196.416 36.8344 196.416C37.9666 196.416 38.8737 195.72 38.8737 194.852C38.8737 193.984 37.9666 193.289 36.8344 193.289ZM58.6551 184.387C57.4597 184.387 56.4963 185.126 56.4963 186.037C56.4963 186.954 57.4597 187.687 58.6551 187.687C59.8436 187.687 60.807 186.954 60.807 186.037C60.807 185.126 59.8436 184.387 58.6551 184.387ZM97.0718 182.22C96.3404 182.22 95.7708 182.651 95.7708 183.217C95.7708 183.783 96.3404 184.215 97.0718 184.215C97.8101 184.215 98.3797 183.783 98.3797 183.217C98.3797 182.651 97.8101 182.22 97.0718 182.22ZM89.7654 196.459C88.0636 196.459 86.6501 197.5 86.6501 198.848C86.6501 200.147 88.0073 201.236 89.7654 201.236C91.4671 201.236 92.8806 200.196 92.8806 198.848C92.8806 197.5 91.4671 196.459 89.7654 196.459ZM15.1895 180.009C14.3386 180.009 13.6564 180.527 13.6564 181.174C13.6564 181.826 14.3386 182.349 15.1895 182.349C16.0403 182.349 16.7154 181.826 16.7154 181.174C16.7154 180.527 16.0403 180.009 15.1895 180.009ZM197.997 169.539C196.415 169.539 195.107 170.536 195.107 171.76C195.107 172.968 196.415 173.971 197.997 173.971C199.586 173.971 200.887 172.968 200.887 171.76C200.887 170.536 199.643 169.539 197.997 169.539ZM195.163 180.441C194.143 180.441 193.356 181.045 193.356 181.826C193.356 182.614 194.143 183.217 195.163 183.217C196.183 183.217 196.977 182.614 196.977 181.826C196.977 181.045 196.183 180.441 195.163 180.441ZM143.828 180.441C141.838 180.441 140.2 181.697 140.2 183.217C140.2 184.738 141.838 185.994 143.828 185.994C145.812 185.994 147.45 184.738 147.45 183.217C147.394 181.697 145.812 180.441 143.828 180.441ZM132.211 198.896C130.791 198.896 129.659 199.764 129.659 200.848C129.659 201.932 130.791 202.8 132.211 202.8C133.625 202.8 134.757 201.932 134.757 200.848C134.757 199.764 133.625 198.896 132.211 198.896ZM70.7786 196.804C69.3088 196.804 68.1134 197.715 68.1134 198.848C68.1134 199.98 69.3088 200.886 70.7786 200.886C72.2553 200.886 73.4437 199.98 73.4437 198.848C73.4437 197.715 72.2553 196.804 70.7786 196.804ZM14.9644 170.714C13.1501 170.714 11.6734 171.841 11.6734 173.232C11.6734 174.618 13.1501 175.75 14.9644 175.75C16.7787 175.75 18.2484 174.618 18.2484 173.232C18.2484 171.841 16.7787 170.714 14.9644 170.714ZM6.74384 119.305C5.8367 119.305 5.10535 119.877 5.10535 120.567C5.10535 121.262 5.8367 121.829 6.74384 121.829C7.65099 121.829 8.38937 121.262 8.38937 120.567C8.38937 119.877 7.65099 119.305 6.74384 119.305ZM39.0425 135.507C37.9103 135.507 37.0032 136.197 37.0032 137.065C37.0032 137.933 37.9103 138.629 39.0425 138.629C40.1817 138.629 41.0888 137.933 41.0888 137.065C41.0888 136.197 40.1817 135.507 39.0425 135.507ZM60.8632 126.606C59.6748 126.606 58.7114 127.339 58.7114 128.25C58.7114 129.161 59.6748 129.9 60.8632 129.9C62.0517 129.9 63.0151 129.161 63.0151 128.25C63.0151 127.339 62.0517 126.606 60.8632 126.606ZM103.253 119.305C102.515 119.305 101.945 119.742 101.945 120.314C101.945 120.869 102.515 121.306 103.253 121.306C103.984 121.306 104.554 120.869 104.554 120.314C104.554 119.785 103.984 119.305 103.253 119.305ZM86.8751 133.334C85.1734 133.334 83.7599 134.375 83.7599 135.723C83.7599 137.065 85.1171 138.111 86.8751 138.111C88.5769 138.111 89.9904 137.065 89.9904 135.723C89.9904 134.375 88.5769 133.334 86.8751 133.334ZM17.3975 122.217C16.5467 122.217 15.8716 122.74 15.8716 123.387C15.8716 124.039 16.5467 124.562 17.3975 124.562C18.2484 124.562 18.9306 124.039 18.9306 123.387C18.9306 122.74 18.2484 122.217 17.3975 122.217ZM200.325 105.196C198.735 105.196 197.435 106.198 197.435 107.411C197.435 108.63 198.735 109.627 200.325 109.627C201.907 109.627 203.215 108.63 203.215 107.411C203.215 106.198 201.907 105.196 200.325 105.196ZM197.435 122.697C196.415 122.697 195.62 123.301 195.62 124.082C195.62 124.869 196.415 125.473 197.435 125.473C198.454 125.473 199.249 124.869 199.249 124.082C199.193 123.301 198.398 122.697 197.435 122.697ZM148.702 119.915C146.712 119.915 145.073 121.182 145.073 122.697C145.073 124.217 146.712 125.473 148.702 125.473C150.685 125.473 152.323 124.217 152.323 122.697C152.267 121.133 150.685 119.915 148.702 119.915ZM135.72 132.854C134.307 132.854 133.175 133.722 133.175 134.806C133.175 135.895 134.307 136.763 135.72 136.763C137.141 136.763 138.273 135.895 138.273 134.806C138.273 133.722 137.141 132.854 135.72 132.854ZM70.7786 130.854C69.3088 130.854 68.1134 131.771 68.1134 132.903C68.1134 134.024 69.3088 134.936 70.7786 134.936C72.2553 134.936 73.4437 134.024 73.4437 132.903C73.4437 131.771 72.2553 130.854 70.7786 130.854ZM20.4565 115.445C20.4565 116.836 18.9868 117.963 17.1725 117.963C15.3582 117.963 13.8885 116.836 13.8885 115.445C13.8885 114.054 15.3582 112.932 17.1725 112.932C18.9868 112.932 20.4565 114.054 20.4565 115.445Z"
        fill="#FAE0C9"
      />
      <path
        d="M190.522 11.813C191.767 7.20857 187.062 3.77951 186.724 3.56385C186.436 4.4319 185.986 5.7798 185.191 7.33797C183.49 10.6808 181.907 11.7699 182.301 13.328C182.526 14.2015 183.433 15.4146 186.724 16.5846C187.632 16.0238 189.84 14.4603 190.522 11.813ZM172.105 19.496C172.956 16.2826 169.664 13.851 169.439 13.7216C169.271 14.3309 168.926 15.2852 168.364 16.3689C167.175 18.7142 166.036 19.4529 166.324 20.5366C166.493 21.1459 167.119 22.0139 169.439 22.7957C170.065 22.4506 171.591 21.3184 172.105 19.496ZM156.289 8.24915C157.541 3.65011 152.837 0.221055 152.492 0C152.211 0.868047 151.761 2.21595 150.966 3.77951C149.264 7.1223 147.675 8.20602 148.076 9.76958C148.301 10.6376 149.208 11.8561 152.492 13.0261C153.399 12.46 155.614 10.8587 156.289 8.24915ZM148.301 20.6229C149.32 16.8919 145.523 14.1583 145.242 13.9804C145.017 14.6759 144.672 15.765 143.997 17.0213C142.633 19.7117 141.332 20.5797 141.67 21.8414C141.838 22.5369 142.577 23.5343 145.242 24.4455C145.98 23.9657 147.738 22.7094 148.301 20.6229ZM131.072 13.9373C133.906 12.7673 134.644 11.5488 134.869 10.6808C135.214 9.1172 133.85 8.03348 132.38 4.69069C131.698 3.12713 131.304 1.78462 131.072 0.916572C130.791 1.13224 126.825 4.56129 127.844 9.16572C128.47 11.813 130.341 13.4143 131.072 13.9373ZM125.179 21.4909C126.086 18.0187 122.577 15.4577 122.345 15.2852C122.176 15.9376 121.783 16.935 121.213 18.105C119.912 20.6229 118.724 21.4047 119.061 22.58C119.23 23.2324 119.912 24.1436 122.401 25.0116C122.971 24.6612 124.673 23.4481 125.179 21.4909ZM109.765 11.813C111.016 7.20857 106.312 3.77951 105.967 3.56385C105.686 4.4319 105.236 5.7798 104.441 7.33797C102.74 10.6808 101.157 11.7699 101.551 13.328C101.776 14.2015 102.683 15.4146 105.967 16.5846C106.874 16.0238 109.09 14.4603 109.765 11.813ZM93.5064 19.1941C94.3572 15.9376 91.0662 13.4628 90.8412 13.328C90.6724 13.9373 90.3278 14.897 89.7653 16.0238C88.5768 18.4123 87.4376 19.151 87.7259 20.2778C87.8947 20.9302 88.5135 21.7551 90.8412 22.58C91.467 22.1433 92.993 21.0165 93.5064 19.1941ZM83.584 12.5463C84.4911 9.16572 81.0384 6.64784 80.8133 6.51305C80.6375 7.16544 80.3 8.11975 79.6741 9.29512C78.4294 11.7267 77.241 12.5463 77.5223 13.6785C77.6911 14.3309 78.3732 15.1989 80.75 16.067C81.4322 15.6302 83.0777 14.4603 83.584 12.5463ZM72.199 9.94211C73.4436 5.34308 68.7391 1.91402 68.4016 1.69296C68.1133 2.56101 67.6632 3.90891 66.8686 5.47247C65.1668 8.81527 63.5846 9.90437 63.9784 11.4625C64.2034 12.3306 65.1106 13.5491 68.4016 14.7191C69.2525 14.1152 71.4606 12.5463 72.199 9.94211ZM59.3864 21.2321C60.0685 18.628 57.4596 16.7194 57.2908 16.5846C57.122 17.0644 56.897 17.8462 56.447 18.7142C55.4765 20.5797 54.5764 21.189 54.8014 22.057C54.9139 22.58 55.4203 23.2324 57.2908 23.8794C57.7479 23.5775 58.9926 22.6663 59.3864 21.2321ZM45.962 12.8967C46.9254 9.33825 43.2968 6.64784 43.0085 6.51305C42.7835 7.20857 42.4459 8.20602 41.8201 9.42452C40.5191 12.0287 39.2745 12.8536 39.5557 14.0667C39.7245 14.7622 40.4066 15.6734 42.9593 16.5846C43.6906 16.1532 45.4487 14.9347 45.962 12.8967ZM29.978 18.5417C32.8119 17.3663 33.6065 16.1532 33.7753 15.2852C34.1129 13.7216 32.7557 12.6379 31.2789 9.29512C30.6038 7.73155 30.203 6.38366 29.978 5.51561C29.6967 5.73127 25.6743 9.16572 26.7502 13.7648C27.3761 16.412 29.2958 18.0187 29.978 18.5417ZM17.6295 20.3209C18.8742 15.7165 14.1697 12.2875 13.8251 12.0718C13.5438 12.9398 13.0938 14.2877 12.2991 15.8513C10.5974 19.1941 9.0081 20.2778 9.40893 21.8414C9.63396 22.7094 10.5411 23.9225 13.8251 25.0979C14.676 24.5318 16.9474 22.9251 17.6295 20.3209Z"
        fill="#F9B53F"
      />
    </svg>
  );
};