function FishIcon({ size, color }: {size : number, color?: string}) {
    return (
      <svg width={`${size * 10}px`} height={`${size * 10}px`} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Fish" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
          <path d="M8.36037413,9.37780173 C12.9996449,6.48411516 19.1063134,7.89919075 22,12.5384615 L22,12.5384615 L21.7714102,12.8882815 C21.2212943,13.6925508 20.5550068,14.4118491 19.7936525,15.0224156 C15.9018582,18.1434325 10.3739711,17.8468022 6.83709622,14.5311796 C6.27002204,15.9932862 4.79851304,16.9798163 3.15189288,16.8603536 L3,16.8461538 L3,16.5884428 C3,15.0437123 3.67627478,13.6327133 4.77206207,12.6672238 C3.75338032,11.8768407 3.08250128,10.6671435 3.00709918,9.30699879 L3,9.05027424 L3,8.23076923 L3.20727682,8.23910502 C4.76443449,8.34004935 6.09767297,9.29463397 6.72703405,10.6524074 C7.2233625,10.1730892 7.77122081,9.74527868 8.36037413,9.37780173 Z M14.0372476,17.1902154 L14.1687971,17.1838145 C13.439803,17.9097888 12.5461565,18.4611948 11.5290784,18.759803 C10.7388556,18.9918079 9.94352384,19.0508336 9.17656914,18.9580635 C9.55107882,18.1973838 9.84153946,17.384199 10.0385168,16.536936 C11.3133173,17.0284034 12.6772642,17.249253 14.0372476,17.1902154 Z M15.0132594,7.83862474 L15.1167812,7.99444821 C13.1571593,7.68971933 11.098444,7.96928046 9.22076426,8.89804486 C8.64695948,7.68562475 7.87730735,6.62873797 6.97077654,5.76506832 C7.36191185,5.54761966 7.78075942,5.37001767 8.22293679,5.24019696 C10.8327336,4.47397571 13.4982542,5.59447699 15.0132594,7.83862474 Z" id="Combined-Shape" stroke={color || "#000000"}>
  
  </path>
          <path d="M17.5,11.6 L17.5,11.5 L17.5,11.5 L17.5,11.6 Z" id="Rectangle-Copy-3" stroke={color || '#000000'} strokeWidth="1.5" strokeLinejoin="round">
  
  </path>
      </g>
  </svg>
    );
  }
  
  function CustomerIcon({ size, color }: {size : number, color?: string}) {
    const fill = color || "#0F1F3C";
    return (
  <svg width={`${size * 10}px`} height={`${size * 10}px`}  viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M795.4 749.7c17.2-21.8 27.5-49.3 27.5-79.3 0-70.7-57.3-128-128-128s-128 57.3-128 128c0 29.9 10.3 57.5 27.5 79.3-70.6 36.5-118.9 110.2-118.9 195h73.1c0-80.7 65.6-146.3 146.3-146.3S841.2 864 841.2 944.7h73.1c0-84.7-48.4-158.4-118.9-195zM694.9 615.6c30.2 0 54.9 24.6 54.9 54.9 0 30.2-24.6 54.9-54.9 54.9-30.2 0-54.9-24.6-54.9-54.9 0-30.3 24.6-54.9 54.9-54.9z" fill={fill} /><path d="M109.7 73.1v877.8h329.2v-73.2h-256V146.3h658.3V512h73.1V73.1z" fill={fill} /><path d="M256 256h512v73.1H256zM256 402.3h365.7v73.1H256zM256 548.6h219.4v73.1H256z" fill={fill} /></svg>
  
    );
  }
  
export {
    FishIcon,
    CustomerIcon
};
  