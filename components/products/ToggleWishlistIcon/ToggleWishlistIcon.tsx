import * as React from 'react';
import { Button } from '@/components/common';
import { toast } from 'react-toastify';
import { Product } from '@/types/Product';
import { UIContext } from '@/api/context/UIContext';
import { isProductInArray } from '@/helpers/main';

const ToggleWishlistIcon = ({ product }: { product: Product }) => {
	const { dispatch, wishList } = React.useContext(UIContext);
	
	const [isInUsersWishList, setIsInUsersWishList] = React.useState<boolean>(
		true
	);
	
	React.useEffect(() => {
		setIsInUsersWishList(isProductInArray(product, wishList));
	}, [wishList]);

	const toggleToWishlist = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (isInUsersWishList) {
			toast.error("You've removed an item from your cart", {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			dispatch({ type: 'ADD_PRODUCT_TO_WISHLIST', payload: product });
			toast.info("You've added a new item to your wishlist", {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			setIsInUsersWishList(!isInUsersWishList);
		}
	};

	return (
		<Button
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
				toggleToWishlist(event)
			}
		>
			{isInUsersWishList ? (
				<span className="material-icons-round text-3xl text-red-500">
					favorite
				</span>
			) : (
				<span className="material-icons-round text-3xl text-gray-500">
					favorite_border
				</span>
			)}
		</Button>
	);
};

export default ToggleWishlistIcon;
