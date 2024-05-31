import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"

import { Avatar } from "@/components/avatar"
import { PeopleDataProps } from "@/utils/peoples"

type PeopleProps = {
  data: PeopleDataProps
}

export function People({ data }: PeopleProps) {
  return (
    <View className="w-full flex-row gap-4 bg-gray-800 rounded-lg items-center p-2">
      
      <Avatar source={{ uri: data.avatar }} className="w-16 h-16 rounded-full" />

      <View className="flex-1 bg-gray-800 w-full rounded-lg">
        
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yellow[600]/**data.marker === "importante" ? colors.yellow[600] : colors.gray[400]*/}
            />
          )}

          

          <Text className="text-lg font-subtitle text-blue-400 flex-1">
            {data.name}
          </Text>

          <Text className="text-sm font-body text-gray-400">{data.ministry}</Text>
        </View>

        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.address}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.contact}
          </Text>

          <MaterialIcons
            //name={data.start ? "star" : "star-outline"}
            size={22}
            color={data.start ? colors.blue[600] : colors.gray[400]}
          />
        </View>
      </View>
    </View>
  )
}
