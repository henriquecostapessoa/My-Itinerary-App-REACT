import React, { Component } from 'react'
import {Form, FormControl, Image} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCities } from '../store/actions/cityActions';

class Citiespage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cities: [],
          name:"",
          country:"",
          image:"",
          mySearch:"",
        
        };
      }

        componentWillMount() {
            this.props.fetchCities()
        }

        onChange = (e) => {
            this.setState({mySearch: e.target.value})
         }
         
        
    render() {
        const cities = this.props.cities.filter(city => {
            return city.name.toLowerCase().includes(this.state.mySearch.toLowerCase()) || city.country.toLowerCase().includes(this.state.mySearch.toLowerCase())})
            .map((city, index)=>{
        console.log(city.image)
            return (
                <div key={index}>
                <div className="customCities">
                <h1>{city.name}</h1> 
                </div>  
                <div className="customCities">
                <p>{city.country}</p>
                </div>
                <div className="customCities">
                <img src={city.image} alt="cityimage" height="200" width="250"></img>
                </div>
                </div>
            )
    
        })

        return (
            <div>
                
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChange} />
                </Form>

            {cities}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cities: state.cities.items
})

export default connect(mapStateToProps, {fetchCities})(Citiespage)
