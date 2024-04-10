"use client";

import CountUp, { CountUpProps } from "react-countup";

const CountUpWrapper = ({ end, ...props }: CountUpProps) => {
  return <CountUp end={end} {...props} />;
};
export default CountUpWrapper;
