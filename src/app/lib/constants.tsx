export const HappyIcon = ({
  classname = 'fill-white',
}: {
  classname?: string;
}) => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    className={classname}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.25 34.5625C27.6448 34.5625 34.4501 27.7573 34.4501 19.3625C34.4501 10.9678 27.6448 4.16252 19.25 4.16252C10.8553 4.16252 4.05005 10.9678 4.05005 19.3625C4.05005 27.7573 10.8553 34.5625 19.25 34.5625ZM13.55 17.4625C14.5994 17.4625 15.45 16.6119 15.45 15.5625C15.45 14.5132 14.5994 13.6625 13.55 13.6625C12.5007 13.6625 11.65 14.5132 11.65 15.5625C11.65 16.6119 12.5007 17.4625 13.55 17.4625ZM26.85 15.5625C26.85 16.6119 25.9994 17.4625 24.9501 17.4625C23.9007 17.4625 23.05 16.6119 23.05 15.5625C23.05 14.5132 23.9007 13.6625 24.9501 13.6625C25.9994 13.6625 26.85 14.5132 26.85 15.5625ZM25.9676 26.0799C26.7096 25.3379 26.7096 24.1348 25.9676 23.3929C25.2256 22.6509 24.0226 22.6509 23.2806 23.3929C21.0546 25.6188 17.4455 25.6188 15.2195 23.3929C14.4775 22.6509 13.2745 22.6509 12.5325 23.3929C11.7905 24.1348 11.7905 25.3379 12.5325 26.0799C16.2425 29.7898 22.2576 29.7898 25.9676 26.0799Z"
    />
  </svg>
);
export const CloudIcon = ({
  classname = 'fill-white',
}: {
  classname?: string;
}) => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    className={classname}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 24.1125C5.5 27.6103 8.33553 30.4459 11.8333 30.4459H26.0833C30.4556 30.4459 34 26.9014 34 22.5292C34 18.1569 30.4556 14.6125 26.0833 14.6125C26.0305 14.6125 25.9778 14.613 25.9253 14.6141C25.1924 10.9998 21.9972 8.27919 18.1667 8.27919C13.7944 8.27919 10.25 11.8236 10.25 16.1959C10.25 16.7925 10.316 17.3738 10.4411 17.9327C7.61306 18.5671 5.5 21.093 5.5 24.1125Z"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const PhoneIcon = ({
  classname = 'fill-white',
}: {
  classname?: string;
}) => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    className={classname}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 8.00425C5.5 6.25535 6.91777 4.83759 8.66667 4.83759H13.8588C14.5403 4.83759 15.1454 5.27368 15.3609 5.92022L17.7324 13.0348C17.9816 13.7823 17.6432 14.5993 16.9384 14.9517L13.3644 16.7387C15.1096 20.6095 18.2281 23.7279 22.0989 25.4732L23.8859 21.8992C24.2383 21.1944 25.0552 20.856 25.8027 21.1052L32.9174 23.4767C33.5639 23.6922 34 24.2973 34 24.9788V30.1709C34 31.9198 32.5822 33.3376 30.8333 33.3376H29.25C16.1332 33.3376 5.5 22.7043 5.5 9.58759V8.00425Z"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LockIcon = ({
  classname = 'fill-white',
}: {
  classname?: string;
}) => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    className={classname}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2499 23.8376V27.0043M9.74992 33.3376H28.7499C30.4988 33.3376 31.9166 31.9198 31.9166 30.1709V20.6709C31.9166 18.922 30.4988 17.5043 28.7499 17.5043H9.74992C8.00102 17.5043 6.58325 18.922 6.58325 20.6709V30.1709C6.58325 31.9198 8.00102 33.3376 9.74992 33.3376ZM25.5833 17.5043V11.1709C25.5833 7.67312 22.7477 4.83759 19.2499 4.83759C15.7521 4.83759 12.9166 7.67312 12.9166 11.1709V17.5043H25.5833Z"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const FeatureLists = [
  {
    icon: <HappyIcon classname="fill-black group-hover:fill-white" />,
    content: 'User-Friendly Interface',
    desc: 'Our SaaS solution offers an intuitive and user-friendly',
  },
  {
    icon: (
      <CloudIcon classname="fill-slate-200 group-hover:fill-white" />
    ),
    content: 'Cloud-Based',
    desc: 'Access your data and tools from anywhere, at any time',
  },
  {
    icon: (
      <LockIcon classname="fill-slate-200 group-hover:fill-white" />
    ),
    content: 'Data Security',
    desc: 'Protect your valuable data with our robust security measures',
  },
  {
    icon: (
      <PhoneIcon classname="fill-slate-200 group-hover:fill-white" />
    ),
    content: '24/7 Support',
    desc: 'Our dedicated support team is available around the clock',
  },
];
