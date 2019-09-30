import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {ReciepeView} from '../components/ReciepeView';

class ReciepeScreen extends React.Component {
  static navigationOptions = {
    title: 'Recipes',
  };
  constructor(props) {
    super(props);
    this.state = {
      foodList: [],
    };
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/qmew9')
      .then(res => res.json())
      .then(res => {
        this.setState({foodList: res});
      });
  }
  render() {
    return (
      <>
        <SafeAreaView>
          <FlatList
            data={this.state.foodList.data}
            renderItem={({item}) => <ReciepeView data={item} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default ReciepeScreen;
