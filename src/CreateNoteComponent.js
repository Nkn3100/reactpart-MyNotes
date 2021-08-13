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
        this.setState({title: e.target.value});
       // console.log(this.title);
    }

    createNewNote =(event) =>{
        this.setState({note: event.target.value});
        //console.log(this.note);
    }
    render(){
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className= "text-center">Add Note</h3>
                            <div className = "card-body">
                                <form>
                                    <div className ="form-group">
                                        <label>Title:</label>
                                        <input placeholder="title" name="title" className="form-control"
                                        value={this.state.title} onChange={this.createNewTitle} />

                                    </div>
                                    <div className ="form-group">
                                        <label>Add Note:</label>
                                        <input placeholder="note" name="note" className="form-control"
                                        value={this.state.note} onChange={this.createNewNote} />

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveNote}>Save</button>
                                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> 
                                    <button type="button" className="btn btn-danger">Cancel</button></Link>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default CreateNoteComponent;