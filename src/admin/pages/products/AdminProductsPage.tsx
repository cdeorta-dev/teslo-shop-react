import { AdminTitle } from "@/admin/Components/AdminTitle"
import { Button } from "@/components/ui/button"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"
import { ProductsTable } from "@/admin/Components/ProductsComponents/ProductsTable"
import { useProducts } from "@/shop/hooks/useProducts"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"


export const AdminProductsPage = () => {
  const {data , isLoading}= useProducts();

  if(isLoading){
    return <CustomFullScreenLoading/>
  }

  return (
   <>

<div   className="flex justify-between item-center">
   <AdminTitle title="Productos" subtitle="Aqui puedes ver y administrar tus productos"/>
   


<Link to="/admin/products/new/">
<Button>
<PlusIcon/>
Nuevo Producto

</Button>

</Link>





</div>


  <ProductsTable products={data?.products || []}/>


<CustomPagination totalPages={data?.pages|| 1}/>
   
   </>


  )
}
