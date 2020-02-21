import React, {useState} from 'react';
import { Pane, SearchInput } from 'evergreen-ui';
import classNames from 'classnames';

function Home() {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div className="home-page">
			<div className={classNames('search', searchValue && 'searching')}>
				<img src="logo.png" className="logo" />
				<SearchInput onChange={e => setSearchValue(e.target.value)} height={50} width={450} placeholder="What are you looking for today?" />
			</div>
		</div>
	);
}

export default Home;
