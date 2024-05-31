import { Avatar } from "@/components/avatar"
import { Input } from "@/components/input"
import { MenuButton } from "@/components/menu-button"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Image, Text, View } from "react-native"

export default function Home() {
  return (
    <View className="flex-1">
      <View className="flex-1 bg-gray-900 pt-14 p-4">
        <Input>
          <MenuButton />
          <Input.Field placeholder="Pesquisar" />
          <Avatar source={{ uri: "https://github.com/kierico.png" }} />
        </Input>
        <View className="flex-row items-center mb-6 mt-6">
          <Text className="flex-1 uppercase text-gray-400 text-sm font-subtitle">
            Igrejas
          </Text>
          <Text className="text-blue-500 text-sm font-heading">
            Adicionar
          </Text>
        </View>
        <View className="overflow-hidden w-80 rounded-xl">
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTd5WCL5c8mUGZF-fPjucC_hnZiuS7yFga5A&s" }}
            className="h-60 w-80 object-left-top"
            resizeMode="stretch"
          />
          <View className="absolute bottom-3 bg-orange-300 w-full h-20 pl-4 -mb-3">
            <Text className="text-gray-900 text-lg font-heading mt-2">Área 40 - Parq. Jerusalem 1</Text>
            <View className="flex-row gap-8 mt-1 items-center">
              <View className="flex-row gap-2 items-center">
                <MaterialIcons name="calendar-today" size={18} color={colors.gray[900]} />
                <Text className="text-gray-900 text-lg font-subtitle">1/4</Text>
              </View>
              <View className="flex-row gap-2 items-center">
                <MaterialIcons name="messenger" size={18} color={colors.gray[900]} />
                <Text className="text-gray-900 text-lg font-subtitle">3</Text>
              </View>
              <View className="flex-row gap-2 items-center">
                <MaterialIcons name="person" size={18} color={colors.gray[900]} />
                <Text className="text-gray-900 text-lg font-subtitle">500</Text>
              </View>
              <View className="flex-row gap-2 items-center">
                <MaterialIcons name="check" size={18} color={colors.gray[900]} />
              </View>
            </View>
          </View>
        </View>

        {/** Reuniões */}

        <View className="flex-col  mt-10 mb-6 border-t-2 border-gray-600 pt-6 w-full h-64 gap-4">
          <View className="flex-row items-center">
            <Text className="flex-1 uppercase text-gray-400 text-sm font-subtitle pb-2">
              Reuniões
            </Text>
            <Text className="text-blue-500 text-sm font-heading">
              Ver todas
            </Text>
          </View>
          <View className="flex-row bg-gray-800 rounded-xl">
            <View className="flex-col p-4 justify-center items-center">
              <View className="justify-center items-center">
                <Text className="text-gray-400 font-heading text-2xl">7</Text>
                <Text className="text-gray-400 font-heading text-xl">JUN</Text>
              </View>
              <View className="justify-center items-center">
                <Text className="text-gray-400 font-body text-sm">QUA</Text>
                <Text className="text-gray-400 font-body text-xs">19:00</Text>
              </View>
            </View>

            <View className="flex-col p-4">
              <Text className="text-blue-400 font-subtitle text-lg">Culto de Primícias</Text>
              <Text className="text-gray-400 font-body text-sm">daqui a 9 dias</Text>
              <View className="flex-row items-center gap-2 pt-5">
                <MaterialIcons name="notification-important" size={18} color={"red"} />
                <Text className="text-gray-400 font-body text-lg">0/10</Text>
              </View>
            </View>

          <View className="flex-1 justify-center items-end">
              <MaterialIcons name="notification-important" size={100} color={colors.orange[300]} className="opacity-5"/>
            </View>
          </View>
          
        </View>
      </View>
    </View>
  )
}
