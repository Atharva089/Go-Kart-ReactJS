import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge bg-secondary">₹ {props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-outline-primary">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        ₹ {props.product.quantity * props.product.price}
      </div>

      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItem();
        }}
      >
        Remove
      </button>
    </div>
  );
}
