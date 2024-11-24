import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {Colors, View, Text} from 'react-native-ui-lib';

export default function GroupedBars() {
    const barData = [
        {
          value: 40,
          label: 'Jan',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#177AD5',
        },
        {value: 20, frontColor: '#59CCD9'},
        {
          value: 50,
          label: 'Feb',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#177AD5',
        },
        {value: 40, frontColor: '#59CCD9'},
        {
          value: 75,
          label: 'Mar',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#177AD5',
        },
        {value: 25, frontColor: '#59CCD9'},
        {
          value: 30,
          label: 'Apr',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#177AD5',
        },
        {value: 20, frontColor: '#59CCD9'},
        {
          value: 60,
          label: 'May',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#177AD5',
        },
        {value: 40, frontColor: '#59CCD9'},
        {
          value: 65,
          label: 'Jun',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#177AD5',
        },
        {value: 30, frontColor: '#59CCD9'},
      ];

      const renderTitle = () => {
          return(
            <View marginT-10>
            <View
                row
                bg-white
                marginT-24
              style={{
                justifyContent: 'space-evenly',
              }}>
              <View row center>
                <View
                    marginB-10
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#177AD5',
                    marginRight: 8,
                  }}
                />
                <Text
                    marginB-10
                  style={{
                    color: 'lightgray',
                  }}>
                  Income
                </Text>
              </View>
              <View row center>
                <View
                    marginB-10
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#59CCD9',
                    marginRight: 8,
                  }}
                />
                <Text
                    marginB-10
                  style={{
                    color: 'lightgray',
                  }}>
                  Expence
                </Text>
              </View>
            </View>
          </View>
          )
      }

    return (
        <View
        style={{
          backgroundColor: '#fff',
          paddingBottom: 40,
          borderRadius: 10,
          
        }}>
        {renderTitle()}
        <BarChart
          data={barData}
          barWidth={8}
          spacing={24}
          roundedTop
          roundedBottom
          hideRules
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'gray'}}
          noOfSections={3}
          maxValue={75}
          isAnimated
        />
      </View>
    );
};