import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class Screen1 extends React.Component {

  render() {
    let { t, i18n} = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Button
          transparent
          onPress={() => i18n.changeLanguage('en')}
          title={t('change_language_english')}/>
        <Button
          transparent
          onPress={() => i18n.changeLanguage('fr')}
          title={t('change_language_french')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252b47',
    paddingTop: 20
  },
});
