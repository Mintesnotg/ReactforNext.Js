const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


export default function ShoosppingList  () {

   const listItems= products.map(product=>

     <li  style={{color:product.isFruit ? 'magenta' :'darkgreen'}} key={product.id}>{product.title}</li>
   )

  return (
    <ol>{listItems}</ol>
  );
}