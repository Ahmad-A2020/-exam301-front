import React, { Component } from 'react'
import axios from 'axios';
import AnimeRender from './AnimeRender.js'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            serverLink:process.env.REACT_APP_SERVER,
            animeData:[],
            show:false,

        }
    }

    componentDidMount=async ()=>{
        let importData= await axios.get(`http://localhost:3020/getData`)
        this.setState({
            animeData:importData.data,
            show:true

        })
        console.log(this.state.animeData)


    }
    addFunction=async (item)=>{
        let importData= await axios.post(`http://localhost:3020/addmyFavirote`,item)
        console.log(item)

    }
    render() {
        return (
            <div>

                {this.state.show &&
                <AnimeRender
                animeData={this.state.animeData}
                addFunction={this.addFunction}
                
                />
                
                }
                
            </div>
        )
    }
}

export default Main
