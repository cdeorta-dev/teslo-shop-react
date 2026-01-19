// https://github.com/Klerith/bolt-product-editor


import { Navigate, useNavigate, useParams } from 'react-router';

import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';


export const AdminProductPage = () => {
  const navigate =useNavigate();
  const { id } = useParams();
  const {isLoading,
    isError,
    data:product,
     mutation} = useProduct(id|| '')


  const productTitle = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const productSubtitle =
    id === 'new'
      ? 'Aquí puedes crear un  nuevo producto.'
      : 'Aquí puedes editar el producto.';


 
const handleSubmit= async(productLike: Partial<Product>& {files?: File[]})=>{
  await mutation.mutate(productLike,{
    onSuccess:(data)=>{
      console.log(data)       

      toast.success('proecuto actualizado correctamente',{
        position:'top-right'
      });
      navigate(`/admin/products/${data.id}`)
    },
    onError:(error)=>{
      console.log(error)
      toast.error(" no se actualizo el producto correctamente ")
    }
  });

}

if(isError){
  return<Navigate to ='/admin/products'/>


}

if(isLoading){
  return <CustomFullScreenLoading/>
}


if(!product){
  return <Navigate to='/admin/products'/>
}

return <ProductForm 
  title={productTitle}
  subTitle={productSubtitle} 
  product={product} 
  isPending={mutation.isPending}
  onSummit={handleSubmit}
  />

 

  
};