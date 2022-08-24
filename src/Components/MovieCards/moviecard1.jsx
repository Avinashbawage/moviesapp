import React, { Component } from 'react'
import styles from "./moviecard.module.css";

export class Moviecard1 extends Component {

  state={
    showTitle:true
  }

  render() {
    const {posts}=this.props
    return (
      <div>
           <div className={styles.container}>
            <div className={styles.movies}>
              <div className={styles.movie} onMouseEnter={()=>{this.state.showTitle()}} onMouseLeave={()=>{this.setState({showTitle:false})}}>
                <img
                  src={`https://image.tmdb.org/t/p/original${posts.poster_path}`}
                  alt={posts.Poster}
                  className={styles.imgs}
                />
                <figcaption> 
                  <h6 className={styles.movietitle}>{posts.title}</h6>                
                  
                </figcaption>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Moviecard1;