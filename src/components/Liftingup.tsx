export default function InputName2  ({value,OnInputChange}) {


  return  <input type="text" placeholder="Enter value" value={value} onChange={(e)=> OnInputChange(e.target.value)} />
}

// export function AnotherInput ({value}) {

//   return <input type="text" value={value} />
// }