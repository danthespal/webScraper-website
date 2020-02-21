import React, {useState} from 'react';
import { Pane, SearchInput } from 'evergreen-ui';
import classNames from 'classnames';
import patternMock from 'pattern-mock';

import './home.scss';
import ProductCard from '../../commons/components/product-card/product-card';

const mockData = patternMock({
	products: [{
		title: 'SENTENCE',
		description: 'PARAGRAPH',
		price: 'CUSTOM_NUMBER_1-999',
		currency: '$'
	}]
});

function Home() {
	const [searchValue, setSearchValue] = useState('');

	const renderProducts = () => {
		if(searchValue) {
			return mockData.products.map(product => <ProductCard {...product} />);
		}
	}

	return (
		<div className="home-page">
			<div className={classNames('search', searchValue && 'searching')}>
				<img src="logo.png" className="logo" />
				<SearchInput onChange={e => setSearchValue(e.target.value)} height={50} width={450} placeholder="What are you looking for today?" />
			</div>
			<div className="products">
				{renderProducts()}
			</div>
		</div>
	);
}

export default Home;
