import React, { Component } from 'react';
import SearchResultComponent from './SearchResultComponent';
import FavoritesComponent from './FavoritesComponent'
import { Route } from 'react-router-dom';
//import { search } from '../lib/SpotifyUtil';

class SearchFormComponent extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        search_text: this.props.match.params.search_text || '',
        search_type: this.props.match.params.search_type || '',
        search: (this.props.match.params.search_type && this.props.match.params.search_text)
      }
    }

    search(){
      this.props.history.push('/search/'+this.state.search_type+'/'+this.state.search_text+'/')
      this.setState({search:true})
    }

    render() {
      return (
        <div className="card">
          <div className="card-header">
            <h4 className="float-left">Welcome To Smartify Application</h4>
            <div className="float-right"><FavoritesComponent /></div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="row">
                <div className="col-sm-6">
                  <legend className="col-form-legend col-sm-12">What Are You Looking For ?</legend>
                  <input className="form-control" type='text' onChange={(e) => this.setState({search_text:e.target.value, search:false})} value={this.state.search_text} />
                </div>
                <div className="col-sm-6">
                  <fieldset className="form-group">
                    <div className="row">
                      <legend className="col-form-legend col-sm-12">Select Your Choice :</legend>
                      <div className="col-sm-12">
                        <select className="custom-select" onChange={(e) => this.setState({search_type:e.target.value, search:false})} value={this.state.search_type}>
                          <option value=''>Please choose the type ..</option>
                          <option value="artist">Artist</option>
                          <option value="album">Album</option>
                          <option value="track">Track</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="mx-auto">
                  <button onClick={(e) => this.search()} className="btn btn-primary" disabled={!this.state.search_text || !this.state.search_type}>Search</button>
                </div>

                <div className="col-sm-12">
                  {(this.state.search) &&
                    <Route path='/search/:search_type/:search_text/:art_id?/:alb_id?/:tra_id?' component={SearchResultComponent}/>}
                </div>
              </div>
            </div>
          </div>
        
        </div>
      );
    }
  }

  export default SearchFormComponent;