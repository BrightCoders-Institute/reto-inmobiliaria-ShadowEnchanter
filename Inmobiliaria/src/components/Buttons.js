import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Buttons = () => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };
  
    return (
      <TouchableOpacity onPress={toggleFavorite}>
        <Icon
          name={isFavorite ? 'heart' : 'heart-o'}
          size={15}
          color={isFavorite ? 'white' : 'white'}
        />
      </TouchableOpacity>
    );
  };

  export default Buttons
