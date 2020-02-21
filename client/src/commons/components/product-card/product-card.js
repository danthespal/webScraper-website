import React from 'react';

import './product-card.scss';

function ProductCard({title, description, price}) {
	return (
		<div class="product-card">
			<img className="product-image" src="http://www.tiptopglobe.com/forum/images/avatars/gallery/filmy/Batman.jpg" />
			<div className="product-content">
				<div className="product-title">{title}</div>
				<div className="product-description">{description}</div>
			</div>
			<div className="product-price">{price} RON</div>
		</div>
	);
}

export default ProductCard;