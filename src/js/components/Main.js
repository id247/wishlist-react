import React from 'react';

import Catalog from '../components/catalog/Catalog';
import Wishlist from '../components/wishlist/Wishlist';

const Main = (props) => (
	<section className={( (props.mix ? props.mix : '') + ' main')} id="main">

		<div className="main__wrap wrap">

			<h1 className="main__title">Товары для школы</h1>

			<div className="main__content">
			
				<Catalog mix="main__catalog" />
				
				<Wishlist mix="main__wishlist" /> 

			</div>

			<div className="main__button-placeholder">

				<a 
					href="https://www.ozon.ru/context/back-to-school/?partner=dnevnik_ru" 
					className="main__button button button--m button--blue"
					target="_blank"
				>
					Все товары для школы
				</a>

			</div>
			
		</div>

	</section>
);

Main.propTypes = {
	mix: React.PropTypes.string,
};


export default Main;
