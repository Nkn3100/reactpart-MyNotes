import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import React from 'react';
import UserService from './service/UserService';

// import { withRouter } from 'react-router'

// import { BrowserRouter, Route } from 'react-router-dom';






class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }

    componentDidMount(){
        UserService.getNotes().then((response)=>{
            this.setState({ items:response.data})
        });
    }
    deleteNote(title){
        //rest api
        console.log(title);
        UserService.deleteNote(title).then(res=>{
            this.setState({items: this.state.items.filter(item => item.title !== title)});
            // this.props.history.push('/');
        });
    }

    render(){
        var {items}=this.state;
        return(
            <div className="container">
            <h2>My Notes | <Link to="/createNote" style={{ textDecoration: 'none', color: 'black' }}>Create Note   </Link></h2>
           
            <table className="table table-dark">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Note</th>
                    <th></th>
                    
                </tr>
                </thead>
                <tbody>
                {items.map(item=>(
                    <tr key={item.title}>
                        <td>{item.title}</td>
                        <td>{item.note}</td>
                        <td><Link to={`/updateNote/${item.title}` } ><button type="button" className="btn btn-outline-primary" >Edit</button></Link> 
                        
                        <button style={{marginLeft:"15px"}} onClick={ ()=>this.deleteNote(item.title)} type="button" className="btn btn-outline-danger">Remove</button></td>

                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )
    }
}
export default UserComponent;