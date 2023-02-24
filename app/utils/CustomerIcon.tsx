function CustomerIcon({ size, color }: {size : number, color?: string}) {
    const fill = color || "#0F1F3C";
    return (
  <svg width={`${size * 10}px`} height={`${size * 10}px`}  viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M795.4 749.7c17.2-21.8 27.5-49.3 27.5-79.3 0-70.7-57.3-128-128-128s-128 57.3-128 128c0 29.9 10.3 57.5 27.5 79.3-70.6 36.5-118.9 110.2-118.9 195h73.1c0-80.7 65.6-146.3 146.3-146.3S841.2 864 841.2 944.7h73.1c0-84.7-48.4-158.4-118.9-195zM694.9 615.6c30.2 0 54.9 24.6 54.9 54.9 0 30.2-24.6 54.9-54.9 54.9-30.2 0-54.9-24.6-54.9-54.9 0-30.3 24.6-54.9 54.9-54.9z" fill={fill} /><path d="M109.7 73.1v877.8h329.2v-73.2h-256V146.3h658.3V512h73.1V73.1z" fill={fill} /><path d="M256 256h512v73.1H256zM256 402.3h365.7v73.1H256zM256 548.6h219.4v73.1H256z" fill={fill} /></svg>
  
    );
  }
  
  
  export default CustomerIcon;
  