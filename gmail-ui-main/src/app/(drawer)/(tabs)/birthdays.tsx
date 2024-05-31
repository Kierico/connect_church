import { Avatar } from "@/components/avatar"
import { Input } from "@/components/input"
import { MenuButton } from "@/components/menu-button"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export default function Home() {
  return (
    <View className="flex-1">
      <View className="flex-1 bg-gray-900 pt-14 p-4">
        <Input>
          <MenuButton />
          <Input.Field placeholder="Pesquisar" />
          <Avatar source={{ uri: "https://github.com/kierico.png" }} />
        </Input>
        <View className="flex-row items-center mb-6">
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Aniversariantes
          </Text>
        </View>
      

        {/** --NiverCard-- */}

        <View className="w-full flex-row gap-4 pt-4">
          <View className="flex-1 bg-gray-800 w-full rounded-lg p-2">
            <View className="absolute justify-center w-full items-center">
              <Avatar source={{ uri: "https://github.com/kierico.png" }} className="h-16 w-16 rounded-full -mt-7 "/>
            </View>
            <View className="flex-row items-center gap-1">
              <Text className="text-lg font-subtitle text-blue-400 flex-1">
                Kiérico Souza
              </Text>

              <Text className="text-sm font-body text-gray-400">20 de Jun.</Text>
            </View>

            <Text
              className="text-base font-body text-gray-400"
              numberOfLines={1}
              lineBreakMode="tail"
            >
              Aniversatiante do mês
            </Text>

            <View className="flex-row items-center gap-4">
              <Text
                className="text-base font-body text-gray-400 flex-1"
                numberOfLines={1}
                lineBreakMode="tail"
              >
                Parabéns para você, Kiérico!!!
              </Text>

              <MaterialIcons
                //name={data.start ? "star" : "star-outline"}
                name="celebration"
                size={22}
                color={colors.yellow[600]}
              />
            </View>
          </View>
      </View>

      {/* Card 2 */}

      <View className="w-full flex-row gap-4 pt-4 mt-8">
          <View className="flex-1 bg-gray-800 w-full rounded-lg p-2">
            <View className="absolute justify-center w-full items-center">
              <Avatar source={{ uri: "https://mighty.tools/mockmind-api/content/human/44.jpg" }} className="h-16 w-16 rounded-full -mt-7 "/>
            </View>
            <View className="flex-row items-center gap-1">
              <Text className="text-lg font-subtitle text-blue-400 flex-1">
                Alice Souza
              </Text>

              <Text className="text-sm font-body text-gray-400">22 de Jun.</Text>
            </View>

            <Text
              className="text-base font-body text-gray-400"
              numberOfLines={1}
              lineBreakMode="tail"
            >
              Aniversatiante do mês
            </Text>

            <View className="flex-row items-center gap-4">
              <Text
                className="text-base font-body text-gray-400 flex-1"
                numberOfLines={1}
                lineBreakMode="tail"
              >
                Parabéns para você, Alice!!!
              </Text>

              <MaterialIcons
                //name={data.start ? "star" : "star-outline"}
                name="celebration"
                size={22}
                color={colors.yellow[600]}
              />
            </View>
          </View>
      </View>

    </View>

    </View>
  )
}
