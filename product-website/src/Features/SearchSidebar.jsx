//import { useProductContext } from "../../hooks/ProductContext";

import { useUserProductContext } from "../Hooks/UserProductContext";


export default function SearchSidebar({setSelectedColor,selectedColor}) {
    const {products} = useUserProductContext()
    const uniqueColors = [...new Set(products.map((product) => product.color))];
  return (
    <div className="w-[20%] bg-white p-5">
        {/* Color Filter */}
        <label className="text-[18px]">
         <span className="text-[20px] font-semibold "> Color:</span>
          <div className="mt-5">
            <input
              type="radio"
              value=""
              checked={selectedColor === ''}
              onChange={() => setSelectedColor('')}
            />{' '}
            All
          </div>
          <div>
          {uniqueColors.map((color) => (
            <div key={color}>
              <input
                type="radio"
                value={color}
                checked={selectedColor === color}
                onChange={(e) => setSelectedColor(e.target.value)}
              />{' '}
              {color}
            </div>
          ))}
          </div>
          {/* Add other color options */}
        </label>
        
        </div>
  )
}