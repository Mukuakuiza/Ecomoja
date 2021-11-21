import React from 'react';
import { getProduct, getProducts } from '@/services/ProductServices';
import { GetStaticPaths, GetStaticProps } from 'next';
import { UIContext } from '@/api/context/UIContext';
import Head from 'next/head';
import { Product } from '@/types/Product';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DynamicCartModal = dynamic(() => import('../../components/cart/CartModal'));
const DynamicProductDetails = dynamic(() => import('../../components/products/ProductDetails'));

const ProductDetail = ({ product }: { product: Product }) => {
	const router = useRouter();
	const {
		dispatch,
	} = React.useContext(UIContext);
	const { name } = product;

	React.useEffect(() => {
		const handleRouteChange = () => {
			dispatch({ type: 'RESET_MODAL' });
		};

		router.events.on('routeChangeStart', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [dispatch, router.events]);

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: false,
			}),
		[dispatch],
	);

	return (
		<>
			<Head>
				<title>Ecomoja | {name}</title>
			</Head>
			<div className='flex px-2 py-6 lg:px-44'>
				<div className='flex-1 overflow-hidden'>
					<div className='w-full'>
						<DynamicProductDetails product={product} />
					</div>
				</div>
			</div>
			<DynamicCartModal />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const products = getProducts();

	const paths = products.map((product) => ({
		params: { id: product.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params;
	const product = getProduct(+id);

	return {
		props: {
			product,
		},
	};
};

export default ProductDetail;
