import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');

//import Loader from './loading/Loader';

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        //loading: false,
      }
    };
  }
  async getWeather() {
    
  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric'
    );
     
    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}


  render() {
    return (
    <View style={styles.containerMain}>

    <View style={styles.box1}>
            <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Perkiraan Cuaca</Text>
    </View>

      < View style={styles.kolomsearch}>
          <Text style={{ padding: 10, textAlign: 'center', color: '#0D47A1', fontSize: 20 }}> Masukan Nama Kota </Text>
          <TextInput style={{ height: 50, color: 'black'}}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="#2196F3"
              padding="20"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>

      <View style={styles.box4}>
        <View style={styles.box41}>
            <View style={styles.button}>
              <Text> City : { this.state.city} </Text>
            </View>

            <View style={styles.button}>
                  <View style={styles.iconContainer}>
                        <Image source={tempIcon} style={styles.icon} />
                   </View>
                          <Text> Temp : { this.state.forecast.temp} </Text>
            </View>

        </View>
      </View>

      <View style={styles.box4}>
        <View style={styles.box41}>
             <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Main : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Main Desc : { this.state.forecast.description} </Text>
        </View>

        </View>
      </View>

       <View style={styles.box4}>
        <View style={styles.box41}>
        
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunrise : { this.state.forecast.sunrise} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunset : { this.state.forecast.sunset} </Text>
        </View>
        
        </View>
      </View>


      <View style={styles.box4}>
      <View style={styles.box41}>

      <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Pressure : { this.state.forecast.pressure} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Humidity : { this.state.forecast.humidity} </Text>
        </View>

       </View>
      </View>


      <View style={styles.box4}>
        <View style={styles.box41}>
    
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Sea Level : { this.state.forecast.sea_level} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Ground Level : { this.state.forecast.grnd_level} </Text>
        </View>

        </View>
      </View>

     <View style={styles.box1}>
        <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Copyright @Putri Ayu Hernawati</Text>
    </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1, //2:6
    backgroundColor: '#2196F3',
    // flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  box2: {
    flex: 1, //2:6
    backgroundColor: '#0D47A1',
    // flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  kolomsearch: {
    flex: 2, //1:6
    backgroundColor: '#90CAF9',
    flexDirection: 'column',
    margin:5,
    padding: 1
  },
  box4: {
    flex: 1,
    backgroundColor: '#90CAF9',
    margin: 5,
    // justifyContent: 'space-around',
    flexDirection: 'column'
  },
  box41: {
    flex: 1,
    backgroundColor: '#90CAF9',
    margin: 5,
    // justifyContent: 'space-around',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#1565C0',
    margin: 10
  },
  button: {
    width: 170,
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: '#fff',
    height: 20,
    width: 20,
  }
});
