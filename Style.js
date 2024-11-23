import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F7F8',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    input_div:{
        backgroundColor : '#EEF7FF',
        borderWidth : 1,
        borderColor : '#102C57',
        borderRadius : 10,
        display : 'flex',
        flexDirection : 'row',
        // minWidth : '80%',
        paddingLeft : 2,
        marginBottom : 5,
        margin : 5,
        minHeight : '5%',
        alignItems : 'center',
        justifyContent : 'space-between',
        

    },
    button:{
        backgroundColor : '#6439FF',
        minWidth : 50,
        borderRadius : 10,
        margin : 2,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    symbol :{
        fontWeight : 'bold',
        fontSize : 30,
        color : "#fff"
        
    },
    input:{
        // minWidth : '80%',
        color : '#1A1A1D',
        fontStyle : 'italic',
        flex : 1
        
        
        

    },
    message_con :{
        minHeight : 'auto',
        backgroundColor : '#F5F7F8',
        // backgroundColor : '#859F3D', test block
        minWidth : '90%',
        margin : 10,
        display : 'scroll'
        
    },
    message : {


    },
    status_con :{
        backgroundColor :"#F5F7F8",
        flex : 1,
        maxHeight : 55,
        width : "100%",
        justifyContent : 'flex-end',
        alignItems : 'center'
        
    }
  });