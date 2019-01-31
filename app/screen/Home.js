import React, { Component } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  KeyboardAvoidingView
} from "react-native";
import EstyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";

import { postTodolist } from "../action/toDoList";

class Home extends Component {
  state = {
    text: "",
    id: 0
  };

  inputText = () => (
    <KeyboardAvoidingView>
      <TextInput
        placeholder={"Write your Activity"}
        onChangeText={text => this.setState({ text })}
        style={{
          width: 100,
          height: 20,
          marginTop: 10,
          backgroundColor: "red",
          marginBottom: 20
        }}
        onSubmitEditing={this.addList}
      />
    </KeyboardAvoidingView>
  );

  addList = () => {
    this.setState({ id: this.state.id + 1 }, () =>
      this.props.dispatch(postTodolist(this.state.id, this.state.text))
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {!this.props.post ? (
          <View>
            <Text> Empty to do list. create one now</Text>
            {this.inputText()}
          </View>
        ) : (
          <View>
            {this.props.post.map(post => (
              <Text>{post.post}</Text>
            ))}
            {this.inputText()}
          </View>
        )}
      </View>
    );
  }
}

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = state => {
  return {
    post: state.post.data
  };
};
export default connect(mapStateToProps)(Home);
