import React, { useState } from 'react';
import { connect } from 'react-redux';
import Categories from '../containers/Categories';
import CategoryDetails from '../containers/CategoryDetails';
import Loader from '../components/loader';
import { getCategories } from '../actions/index';

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: categories => {
    dispatch(getCategories(categories));
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories,
      isLoading: true,
      toggle: true,
    };
    this.handleGetData = this.handleGetData.bind(this);
  }
  handleGetData(categoriesData) {
    const { getCategories } = this.props.categories;
    // getCategories(categoriesData);
  }

  componentDidMount() {
    try {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        this.setState({isLoading: false})
        this.handleGetData(data.categories);
      });
    } catch (e) {
      console.log(e);
    }
  }
  toggleChecked(e) {
    this.setState({ toggle: !e})
  }

  render() {
    const { categories, toggle, isLoading} = this.state;
    console.log(categories);
      if (toggle){
        if (!isLoading){
          return (
            <>
              <Categories categories={categories}/>
              <button type="button" onClick={() => this.toggleChecked(toggle)}>
                  Toggle
              </button>
            </>
          );
        }
        return <Loader />
      }
      return (
        <>
            <CategoryDetails /> 
            <button type="button" onClick={() => this.toggleChecked(toggle)}>
                Toggle
            </button>
        </>
      );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);