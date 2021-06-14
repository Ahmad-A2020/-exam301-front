import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'


export class AnimeRender extends Component {
    render() {
        return (
            
            <div style={{display:'flex',flexWrap:'wrap'}} >

                { this.props.animeData.map(item=>{
                    return(
    
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                            {item.level}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>this.props.addFunction(item)}>Add Favirote</Button>
                        </Card.Body>
                        </Card>
                    )
    
    
                })}
                
            </div>
        )
    }
}

export default AnimeRender
