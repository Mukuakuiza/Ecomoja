import { ProductCategory } from '@/types/ProductCategory';
import { Bike, Product } from './types/AppTypes';

const getProductTypeName = () => 'Product';

export const products: Product[] = [
	{
		id: 111,
		name: 'PerfectAire - ScentAire',
		description: '100% Essential Oil - Tea Tree Oil - 10ml',
		image: '/assets/products/apple_1.jpg',
		currentPrice: 387,
		oldPrice: 894,
		rating: 4,
		numberOfVotes: 90,
		categories: ['Gardening'],
		vendor: 'CMK',
		isInStock: true,
	},
	{
		id: 112,
		name: 'Greenleaf Forest Ultrasonic Essential Oil',
		description:
			'Not only do they add a beautiful aroma into the air but they also humidify the air.',
		image: '/assets/products/aubergine_1.jpg',
		currentPrice: 647,
		oldPrice: 994,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Eco', 'Natural'],
		vendor: 'Cougar',
		isInStock: false,
	},
	{
		id: 113,
		name: 'Hanging Plants',
		description: 'Artificial Plant',
		image: '/assets/products/bananas_3.jpg',
		currentPrice: 547,
		oldPrice: 494,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Home land Decorate'],
		vendor: 'KMB',
		isInStock: false,
	},
	{
		id: 114,
		name: 'HouzeComfort Artificial Ficus Indoor and Outdoor Pot Plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 847,
		oldPrice: 1494,
		rating: 1,
		numberOfVotes: 1,
		categories: ['Gardening'],
		vendor: 'WBx',
		isInStock: true,
	},
	{
		id: 115,
		name: 'Artificial monsteria plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/strawberry_2.jpg',
		currentPrice: 347,
		oldPrice: 694,
		rating: 3,
		numberOfVotes: 70,
		categories: ['Gardening'],
		vendor: 'Crazee Sales',
		isInStock: true,
	},
	{
		id: 116,
		name: 'PerfectAire - ScentAire',
		description: '100% Essential Oil - Tea Tree Oil - 10ml',
		image: '/assets/products/tomatoes_1.jpg',
		currentPrice: 387,
		oldPrice: 894,
		rating: 4,
		numberOfVotes: 90,
		categories: ['Gardening'],
		vendor: 'CMK',
		isInStock: true,
	},
	{
		id: 11234,
		name: 'Greenleaf Forest Ultrasonic Essential Oil',
		description:
			'Not only do they add a beautiful aroma into the air but they also humidify the air.',
		image: '/assets/products/strawberry_2.jpg',
		currentPrice: 647,
		oldPrice: 994,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: false,
	},
	{
		id: 15213,
		name: 'Hanging Plants',
		description: 'Artificial Plant',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 547,
		oldPrice: 494,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'Eco services',
		isInStock: true,
	},
	{
		id: 1825414,
		name: 'HouzeComfort Artificial Ficus Indoor and Outdoor Pot Plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 847,
		oldPrice: 1494,
		rating: 1,
		numberOfVotes: 1,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 110755,
		name: 'Artificial monsteria plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 347,
		oldPrice: 694,
		rating: 3,
		numberOfVotes: 70,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 114731,
		name: 'PerfectAire - ScentAire',
		description: '100% Essential Oil - Tea Tree Oil - 10ml',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 387,
		oldPrice: 894,
		rating: 4,
		numberOfVotes: 90,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 115555555732,
		name: 'Greenleaf Forest Ultrasonic Essential Oil',
		description:
			'Not only do they add a beautiful aroma into the air but they also humidify the air.',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 647,
		oldPrice: 994,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'CMK',
		isInStock: true,
	},
	{
		id: 1186798563,
		name: 'Hanging Plants',
		description: 'Artificial Plant',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 547,
		oldPrice: 494,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 116374,
		name: 'HouzeComfort Artificial Ficus Indoor and Outdoor Pot Plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 847,
		oldPrice: 1494,
		rating: 1,
		numberOfVotes: 1,
		categories: ['Gardening'],
		vendor: 'CMK',
		isInStock: true,
	},
	{
		id: 1157439670,
		name: 'Artificial monsteria plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/strawberry_2.jpg',
		currentPrice: 347,
		oldPrice: 694,
		rating: 3,
		numberOfVotes: 70,
		categories: ['Gardening'],
		vendor: 'Cougar',
		isInStock: true,
	},
	{
		id: 11657681,
		name: 'PerfectAire - ScentAire',
		description: '100% Essential Oil - Tea Tree Oil - 10ml',
		image: '/assets/products/bananas_3.jpg',
		currentPrice: 387,
		oldPrice: 894,
		rating: 4,
		numberOfVotes: 90,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 119875,
		name: 'Greenleaf Forest Ultrasonic Essential Oil',
		description:
			'Not only do they add a beautiful aroma into the air but they also humidify the air.',
		image: '/assets/products/strawberry_2.jpg',
		currentPrice: 647,
		oldPrice: 994,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 113637675879,
		name: 'Hanging Plants',
		description: 'Artificial Plant',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 547,
		oldPrice: 494,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'Crazee Style',
		isInStock: true,
	},
	{
		id: 114654875497,
		name: 'HouzeComfort Artificial Ficus Indoor and Outdoor Pot Plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 847,
		oldPrice: 1494,
		rating: 1,
		numberOfVotes: 1,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 1167895,
		name: 'Artificial monsteria plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/strawberry_2.jpg',
		currentPrice: 347,
		oldPrice: 694,
		rating: 3,
		numberOfVotes: 70,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 11497091,
		name: 'PerfectAire - ScentAire',
		description: '100% Essential Oil - Tea Tree Oil - 10ml',
		image: '/assets/products/bananas_3.jpg',
		currentPrice: 387,
		oldPrice: 894,
		rating: 4,
		numberOfVotes: 90,
		categories: ['Gardening'],
		vendor: 'CMK',
		isInStock: true,
	},
	{
		id: 1160934462,
		name: 'Greenleaf Forest Ultrasonic Essential Oil',
		description:
			'Not only do they add a beautiful aroma into the air but they also humidify the air.',
		image: '/assets/products/strawberry_2.jpg',
		currentPrice: 647,
		oldPrice: 994,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
	{
		id: 117569703,
		name: 'Hanging Plants',
		description: 'Artificial Plant',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 547,
		oldPrice: 494,
		rating: 5,
		numberOfVotes: 10,
		categories: ['Gardening'],
		vendor: 'Cougar',
		isInStock: true,
	},
	{
		id: 113276474,
		name: 'HouzeComfort Artificial Ficus Indoor and Outdoor Pot Plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/mushrooms_2.jpg',
		currentPrice: 847,
		oldPrice: 1494,
		rating: 1,
		numberOfVotes: 1,
		categories: ['Gardening'],
		vendor: 'CMK',
		isInStock: true,
	},
	{
		id: 1198745635,
		name: 'Artificial monsteria plant',
		description: 'Decorate and Style with Plants',
		image: '/assets/products/strawberry_2.jpg',
		currentPrice: 347,
		oldPrice: 694,
		rating: 3,
		numberOfVotes: 70,
		categories: ['Gardening'],
		vendor: 'Eaglestack',
		isInStock: true,
	},
];

export const productCategories: ProductCategory[] = [
	{
		id: 14,
		name: 'Groceries',
		subcategories: [
			{ id: 1, name: 'Fruits' },
			{ id: 2, name: 'Breakfast, Cereal and bars' },
			{ id: 3, name: 'Coffee' },
		],
	},
];

const getBikeTypeName = () => 'Bike';

export const bikes: Bike[] = [
	{
		id: 18975,
		name: 'BMW',
		image: '/assets/mobility/bikes/16-inch-lowres-1.jpg',
	},
	{
		id: 189748,
		name: 'E bike',
		image: '/assets/mobility/bikes/E-bikes.jpg',
	},
	{
		id: 89612,
		name: 'Mountain Bike',
		image: '/assets/mobility/bikes/Mountain bike.jpg',
	},
	{
		id: 8961322,
		name: 'City Bike',
		image: '/assets/mobility/bikes/normal-fleet-bike.jpg',
	},
	{
		id: 8954612,
		name: 'Road Bike',
		image: '/assets/mobility/bikes/Road bike.png',
	},
	{
		id: 89279612,
		name: 'Honda',
		image: '/assets/mobility/bikes/16-inch-lowres-1.jpg',
	},
	{
		id: 89612,
		name: 'Cool B',
		image: '/assets/mobility/bikes/E-bikes.jpg',
	},
];
