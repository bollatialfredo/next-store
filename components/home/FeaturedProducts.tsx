import { fetchFeaturedProducts } from '@/app/utils/actions'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'
import EmptyList from '../global/EmptyList'

 async function FeaturedProducts() {
    const products = await fetchFeaturedProducts()
    if (products.length === 0) {
        return (
            <section className='pt-24'>
                <EmptyList heading='No featured products found' />
            </section>
        )
    }
    return (
        <section className='pt-24'>
            <SectionTitle title='featured products' />
            <ProductsGrid products={products} />
        </section>
    )
}

export default FeaturedProducts