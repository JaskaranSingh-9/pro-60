import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import db from '../config';

class SummaryScreen extends React.Component{
  constructor() {
    super();
      this.state = {
        present_students: [],
        absent_students: [],
      };
  }

  getTodaysDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  componentDidMount = async () => {
    var today = await this.getTodaysDate();

    var students_ref = db.ref('/').on('value',(data)=>{
      var class_a = data.val();
      var present_students = []
      var absent_students = []
      for(var i in class_a){
        if(class_a[i][today] === 'present'){
          present_students.push(class_a[i])
        }
        if(class_a[i][today] === 'absent'){
          absent_students.push(class_a[i])
        }
      }

      
  
      

      this.setState({
        present_students : present_students,
        absent_students : absent_students
      })
    })
  };


  render() {
    return (
        <View style={styles.attendenceContainer}>

<Text style={styles.texthead}>Total Students</Text>

          <Text style={styles.textContainer}>Present Students : {this.state.present_students.length}</Text>
          <Text style={styles.textContainer}>Absent Students : {this.state.absent_students.length}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  attendenceContainer :{
    flex:1, 
    flexDirection:'column', 
    alignItems:'center',
    marginTop:30
  },
  textContainer:{
    fontSize:20,
    color:"black",
    margin:15,
    backgroundColor:'yellow'
  },
  texthead:{
    fontSize:40,
    color:"green",
    margin:15,
    backgroundColor:'yellow'
    
  }

})
export default SummaryScreen;