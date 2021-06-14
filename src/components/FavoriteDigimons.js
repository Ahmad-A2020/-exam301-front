import React, { Component } from 'react'
import axios from 'axios';
import MyAnimeRender from './MyAnimeRender'
import UpdateForm from './UpdateForm'

export class FavoriteDigimons extends Component {
    constructor(props){
        super(props);
        this.state={
            serverLink:process.env.REACT_APP_SERVER,
            myanimeData:[],
            show:false,
            showForm:false,
            itemToShow:[],
        }
    }

    componentDidMount=async ()=>{
        let Data= await axios.get(`http://localhost:3020/getmyFavData`)
        console.log('asd',Data.data)
        this.setState({
            myanimeData:Data.data,
            show:true

        })
        console.log(this.state.myanimeData)

    }
    deleteFunction=async (item)=>{
        let id= item._id
        let DataAfterDelete= await axios.delete(`http://localhost:3020/deleteData/${id}`)
        this.setState({
            myanimeData:DataAfterDelete.data
        })
        console.log('delete',this.state.myanimeData)
    }

    showFormFunction=(item)=>{
        this.setState({
            showForm:true,
            itemToShow:item
        })

    }
    updateFunction=async (e)=>{
        e.preventDefault();
        let id= this.state.itemToShow._id;
        let newname=e.target.name.value;
        let newimg=e.target.img.value;
        let newlevel=e.target.level.value;
        let newdata={name:newname,img:newimg,level:newlevel}
        console.log('newdata',newdata)
        let DataAfterUpdate= await axios.put(`http://localhost:3020/updateData/${id}`,newdata);
        this.setState({
            myanimeData:DataAfterUpdate.data

        })

    }
    render() {
        return (
            <div>
                { this.state.showForm &&
                
                
                <UpdateForm
                itemToShow={this.state.itemToShow}
                updateFunction={this.updateFunction}

                
                />
                }
                {this.state.show &&
                <MyAnimeRender
                myanimeData={this.state.myanimeData}
                addFunction={this.addFunction}
                deleteFunction={this.deleteFunction}
                showFormFunction={this.showFormFunction}
                
                />

                
                }
                
            </div>
        )
    }
}

export default FavoriteDigimons
