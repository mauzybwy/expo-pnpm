/*****************************************************************************
 * Import
 *****************************************************************************/
import { View, Text } from "react-native"

/*****************************************************************************
 * Component
 *****************************************************************************/

export const Test = ({ name, message }: { name: string, message: string }) => {
  return (
    <View>
      <Text>
        {name}: {message}
      </Text>
    </View>
  );
}
