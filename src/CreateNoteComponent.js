import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import React from 'react';
import UserService from './service/UserService';

class CreateNoteComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: '',
            note: ''
        }
    }
    saveNote = (e) =>{
        e.preventDefault();
        let myNote = {title:this.state.title, note:this.state.note};   
        console.log('myNote => ' + JSON.stringify(myNote));
        UserService.createNote(myNote).then(res =>{
            this.props.history.push('/');
        });

    }

    createNewTitle =(e) =>{
        // let edited = e.target.value.replace(/\//g, "-");
        // console.log(edited);
        this.setState({title: e.target.value.replace(/\//g, "-")});
        console.log(this.title);
    }

    createNewNote =(event) =>{
        this.setState({note: event.target.value});
        //console.log(this.note);
    }
    render(){
        return (
            <div>


                                <Form style={{backgroundColor:"#DCDCDC",padding:"10px"}}>
                                    <h2>Create Note</h2><br/>
                                    <Form.Group controlId="title">
                                    <Form.Control maxLength="150" type="text" autoComplete="off" style={{width:"50%"}}
                                    name="title" placeholder="Enter Title" onChange={this.createNewTitle}/>
                                    </Form.Group><br/>
                                    <Form.Group controlId="note">
                                    
                                    <Form.Control maxLength="150" as="textarea" style={{width:"50%"}}
                                        name="note" placeholder="Description" onChange={this.createNewNote}/><br/><br/>
                                    </Form.Group>
                                    <Button className="btn btn-success" onClick={this.saveNote}>Save</Button>
                                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> 
                                    <Button style={{marginLeft:"15px"}} type="button" className="btn btn-danger">Cancel</Button></Link>
                                </Form>
            </div>
        )
    }
}
export default CreateNoteComponent;