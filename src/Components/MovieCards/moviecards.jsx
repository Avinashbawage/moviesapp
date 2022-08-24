import React, { Component } from "react";
import axios from "axios";
import Moviecard1 from './moviecard1';
import styles from "./moviecard.module.css";

export class Moviecards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      filteredata:[],
      filters:[],
      searchquery:"",
 
    };
  }

  updatedata = (e) => {
 /*    this.setState({
      val: e.target.value
    });
     */
  
    let mydata = this.state.filters 
 
    console.log(mydata)

    this.setState({
      searchquery:e.target.value,      
      filteredata: mydata
    })

  };
  

  componentDidMount() {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
      .then((res) => {
        this.setState({
          userData: res.data.results           
        });
      })

      .catch((err) => {
        return err;
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchquery !== this.state.searchquery) {

      if (this.state.searchquery!==0) {
        axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${this.state.searchquery}&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then((res) => {
          this.setState({
            filters: res.data.results           
          });
        })
    
        .catch((err) => {
          return err;
        });
      }
   
    }
  }
 



  render() {
    return (
      <div>
      <h1 className={styles.header}>
      <form action="" className={styles.search}>
        <input
          type="search"
          placeholder="Search for Movie Title ..."
          value={this.state.searchquery}
          onChange={this.updatedata}
        />
      </form>
    </h1>
      <div className={styles.maincontainer}>
        {   this.state.searchquery.length===0 && this.state.searchquery ==="" ? 
        this.state.userData.map((posts) => (<Moviecard1 posts={posts}/>)):
        this.state.filteredata.map((posts) => (<Moviecard1 posts={posts}/>
        
        ))}
      </div>
      </div>
    );
  }
}

export default Moviecards;
