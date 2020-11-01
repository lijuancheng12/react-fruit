import React, { Component } from 'react'
import Product from'../proudct/Product'
import "../../scss/main.scss"


export default class Products extends Component {
    render() {
        return this.props.products.map((product) =>(
            // skapa ny array loppa genom alla  samma som v-for i vue.
        <Product  key ={product.id} product = {product}/>
        ))
        
    }
}

