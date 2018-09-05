import React from 'react';
import { View  } from 'react-native';

const CardSection = (props) => {
    return (
        //when style receives an array, the most to the right will overwrite the other styles (if present)
      <View style={[styles.containerStyle, props.style]}> 
        {props.children}
      </View>
    );
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export { CardSection } ;

