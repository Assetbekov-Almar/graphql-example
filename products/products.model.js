const products = [
	{
		id: 'redshoe',
		description: 'Red Shoe',
		price: 42.12,
		reviews: []
	},
	{
		id: 'bluejean',
		description: 'Blue Jeans',
		price: 55.55,
		reviews: []
	}
]

function getAllProducts() {
	return products
}

function getProductsByPrice(min, max) {
	return products.filter((product) => {
		return product.price >= min && product.price <= max
	})
}

function getProductByID(id) {
	return products.find((product) => product.id === id)
}

function addNewProduct(id, description, price) {
	const newProduct = {
		id,
		price,
		description,
		reviews: []
	}

	products.push(newProduct)

	return newProduct
}

function addNewProductReview(id, rating, comment) {
	const matchedProduct = getProductByID(id)

	if (matchedProduct) {

		const review = {rating, comment}

		matchedProduct.reviews.push(review)
		products.push(matchedProduct)

		return matchedProduct
	}
}

module.exports = {
	getAllProducts,
	getProductsByPrice,
	getProductByID,
	addNewProduct,
	addNewProductReview
}