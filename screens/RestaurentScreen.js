import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {THEME} from '../theme';
class RestaurentScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.statusBarColor}
        />

        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  statusBarColor: {
    color: THEME.colors.limegreen,
  },
  scrollView: {
    backgroundColor: THEME.colors.light,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: THEME.colors.light,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: THEME.colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: THEME.colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: THEME.colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default RestaurentScreen;
