import React from 'react';
import {ScrollView, RefreshControl,StyleSheet,Text,} from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);
  return (
    
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
      }>
        <Text>Pull down</Text>
      </ScrollView>

  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;