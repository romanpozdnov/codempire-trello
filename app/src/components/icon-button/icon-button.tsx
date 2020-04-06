import React from "react";
import { Icon } from "react-native-elements";

import { IconButtonStyle } from "./icon-button.style";
interface IIconButtonProps {
  handleIconButton: () => void;
}

export const IconButton: React.FC<IIconButtonProps> = (props) => {
  const { handleIconButton } = props;

  return (
    <IconButtonStyle.TouchableOpacity>
      <Icon
        reverse
        name="ios-add"
        type="ionicon"
        color="#517fa4"
        onPress={handleIconButton}
      />
    </IconButtonStyle.TouchableOpacity>
  );
};
