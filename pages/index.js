import Layout from '../components/Layout'
import withRedux from "next-redux-wrapper";
import { bindActionCreators } from 'redux'
import makeStore from '../redux/makeStore'
import * as ProductAction from '../redux/actions/products'

let Index = ({ products }) => {
  console.log(products); 
  return (
    <Layout>
      {
        products.data.map(product => {
          return <li>{ product.name }</li>
        })
      }
    </Layout>
  )
}

Index.getInitialProps = ({store, isServer, pathname, query}) => {
  store.dispatch(ProductAction.getProducts());
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  })
}

Index = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Index);

export default Index