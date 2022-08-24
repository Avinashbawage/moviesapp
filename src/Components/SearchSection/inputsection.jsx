import React, { Component } from "react";
import styles from "./input.module.css";

export class Inputsection extends Component {
  constructor() {
    super();
    this.state = {
      val:"",
      searchquery:"",
      filterdata:[]
    };
  }

  updatedata = (e) => {
    this.setState({
      val: e.target.value
    });
    
  
    let filterdata = this.state.userData.filter((user)=>{
      if (user.firstName.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    })

    console.log(filterdata)

    this.setState({
      searchquery:e.target.value,
      filterdata
    })

  };

  render() {
    return (
      <h1 className={styles.header}>
        <form action="" className={styles.search}>
          <input
            type="search"
            placeholder="Search for Movie Title ..."
            value={this.state.val}
            onChange={this.updatedata}
          />
        </form>
      </h1>
    );
  }
}

export default Inputsection;