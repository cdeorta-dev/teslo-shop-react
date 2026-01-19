import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { Size } from "@/interfaces/product.interface";
import { currencyFormatter } from "@/lib/currency-formatter";
import { PencilIcon } from "lucide-react";
import { Link } from "react-router";

interface ProductRowProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: Size[];
  stock: number;
}
export const ProductRow = ({  id,name, price, image, category,sizes,stock }: ProductRowProps) => {
  return (
      <TableRow>
    
      <TableCell><img src={image} alt="PRoduc" className="w-20 h-20 objet-cover rouded-mod"/></TableCell>
      <TableCell>
        
        <Link to={`/admin/products/${id}`}
            className="hover:text-blue-500 items-center underline"
        
        >
        
        
        
        {name}
        </Link>
        </TableCell>
       <TableCell>{currencyFormatter(price)}</TableCell>
            <TableCell>{category}</TableCell>
         <TableCell>{stock}</TableCell>
          <TableHead>{sizes.join(', ')}</TableHead>
      <TableCell className="text-right">
        
      <Link to={`/admin/products/${id}`}
      
      
      
        >
        <PencilIcon
        
        
        className="w-4 h-4 text-blue-500"
        
        
        />
        
       
        
        </Link>
        
        </TableCell>
    </TableRow>
    
  )
}
