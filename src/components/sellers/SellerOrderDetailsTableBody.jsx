import React from 'react';
import PropTypes from 'prop-types';
import {
  TdIten,
  TdDescription,
  TdQuantity,
  TdUnitPrice,
  TdTotalPrice,
} from '../../styles/tablestyles/tableSltyles'

export default function
SellerOrderDetailsTableBody({ product, index, datId }) {
  const { name, salesProducts: { quantity }, price } = product;

  return (
    <tr key={ index }>
      <TdIten
        data-testid={ `${datId}-table-item-number-${index}` }
      >
        {index + 1}
      </TdIten>
      <TdDescription
        data-testid={ `${datId}-table-name-${index}` }
      >
        {name}
      </TdDescription>
      <TdQuantity
        data-testid={ `${datId}-table-quantity-${index}` }
      >
        {quantity}
      </TdQuantity>
      <TdUnitPrice
        data-testid={ `${datId}-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </TdUnitPrice>
      <TdTotalPrice
        data-testid={ `${datId}-table-sub-total-${index}` }
      >
        {(Number(price) * (quantity)).toFixed(2) }
      </TdTotalPrice>
    </tr>
  );
}

SellerOrderDetailsTableBody.propTypes = ({
  //products: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  datId: PropTypes.string,
}).isRequired;
