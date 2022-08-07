import React, { useMemo } from "react";

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};

const FactorialOf = ({ num, increment }) => {
  const fact = useMemo(() => factorial(num), [num])
  return (
    <div>
      <p>El factorial de <b>{num}</b> es <b>{fact}</b></p>
      <button onClick={increment}>Next</button>
    </div>
  )
}
//? una manera...
// export default React.memo(FactorialOf, (prevProps, nextProps) => {
//   return prevProps.num === nextProps.num;
// });



export default React.memo(FactorialOf);