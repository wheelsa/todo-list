import React from 'react';
import './App.css';
import { Container, Header, Segment, Form, Input, List } from 'semantic-ui-react';

export default class App extends React.Component {
  state = {name: '', todos:[]}

  handleSubmit = e => {
    e.preventDefault()
    const {name, todos} = this.state
    this.setState({ todos: [name, ...todos], name:'' })
  }
  render(){
    const {name, todos} = this.state
    return(
      <Container>
        <Segment> 
          <Header as='h3'>
            Todo List
          </Header>
          <Form onSubmit={this.handleSubmit}>
            <Input
              required
              value={name}
              onChange={ e => this.setState({name: e.target.value})}   
            />
          </Form>
          <List>
            {todos.map((todo,i) => 
            <List.Item key ={i}>{todo}</List.Item>)}
          </List>
        </Segment>
      </Container>
    )
  }
}