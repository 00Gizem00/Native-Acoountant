import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { BarChart, PieChart } from 'react-native-gifted-charts';
import { View, Card, Text, Colors } from 'react-native-ui-lib';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GroupedBars from './BarChartCom';

const Color = {
    babyblue: '#A0E3F2',
    bluex: '#0367A6',
    bluez: '#82B0D9',
    bluec: '#035AA6',
    whitex: '#F2F2F2',
    bluey: '#59CCD9',
    bluem: '#194B6B',
    };

const { width } = Dimensions.get('window');

const Dashboard = () => {
  const incomeExpenseData = [
    { value: 5000, label: 'Jan' },
    { value: 7000, label: 'Feb' },
    { value: 8000, label: 'Mar' },
    { value: 5500, label: 'Apr' },
  ];

  const expenseCategoriesData = [
    { value: 3000, label: 'Rent', color: Colors.blue60 },
    { value: 1500, label: 'Food', color: Color.bluex },
    { value: 500, label: 'Entertainment', color: Color.bluez },
    { value: 1000, label: 'Transport', color: Color.bluec },
  ];

  const recentDocuments = [
    { date: '2024-11-01', amount: '$500', category: 'Rent' },
    { date: '2024-11-05', amount: '$200', category: 'Food' },
    { date: '2024-11-10', amount: '$150', category: 'Transport' },
  ];
  

  return (
    <ScrollView>
      <View padding-10 flex>
        <Card marginT-5>
          <Text text50 color={Color.bluem} margin-20>Dashboard</Text>
        </Card>


        <Card marginB-20 marginT-20 style={{ minHeight: 100 }}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
            >
                <View row style={{ minHeight: 100, paddingHorizontal: 15 }}>
                    <Card 
                        padding-15 
                        bg-white
                        center 
                        br20 
                        marginR-15
                        style={{ elevation: 2 }}
                    >
                        <View center>
                            <Text grey30 text80>Total Income</Text>
                            <Text 
                                text60
                                marginT-8
                                style={{ color: Color.bluex, fontWeight: 'bold' }}
                            >
                                ${incomeExpenseData.reduce((acc, item) => acc + item.value, 0)}
                            </Text>
                        </View>
                    </Card>

                    <Card 
                        padding-15
                        center 
                        bg-white 
                        br20 
                        marginR-15
                        style={{ elevation: 2 }}
                    >
                        <View center>
                            <Text grey30 text80>Total Expence</Text>
                            <Text 
                                text60
                                marginT-8
                                style={{ color: Color.bluey, fontWeight: 'bold' }}
                            >
                                ${expenseCategoriesData.reduce((acc, item) => acc + item.value, 0)}
                            </Text>
                        </View>
                    </Card>

                    <Card 
                        padding-15
                        center 
                        bg-white 
                        br20
                        style={{ elevation: 2 }}
                    >
                        <View center>
                            <Text grey30 text80>Pending Docs</Text>
                            <Text 
                                text60
                                marginT-8
                                style={{ color: Color.bluec, fontWeight: 'bold' }}
                            >
                                {recentDocuments.length}
                            </Text>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </Card>

        <Card marginT-16 center>
          <Card.Section content={[{ text: 'Spending Categories', text70: true }]} />
          <PieChart
            data={expenseCategoriesData}
            donut
            showGradient
            sectionAutoFocus
            focusOnPress
            radius={90}
            innerRadius={60}
            innerCircleColor={'#fff'}
            centerLabelComponent={() => {
            return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                    style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
                    47%
                </Text>
                <Text style={{fontSize: 14, color: 'black'}}>Excellent</Text>
                </View>
            );
            }
            }
        />
        </Card>


        <Card marginT-16>
          <GroupedBars />
        </Card>


        <GestureHandlerRootView style={{ flex: 1 }}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Card marginT-16>
              <Card.Section content={[{ text: 'Recent Documents', text70: true }]} />
              <ScrollView horizontal style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
                <View spread paddingV-6>
                  <Text style={styles.headerText}>Date</Text>
                  <Text style={styles.headerText}>Amount</Text>
                  <Text style={styles.headerText}>Category</Text>
                </View>
                {recentDocuments.map((doc, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text>{doc.date}</Text>
                    <Text>{doc.amount}</Text>
                    <Text>{doc.category}</Text>
                  </View>
                ))}
              </ScrollView>
            </Card>
          </ScrollView>
        </GestureHandlerRootView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  horizontalScroll: {
    flexDirection: 'row',
  },
  tableHeader: {
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tableRow: {

    justifyContent: 'space-between',
    paddingVertical: 8,
    marginLeft: 12,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Dashboard;