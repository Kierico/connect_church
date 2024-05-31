import { Avatar } from "@/components/avatar"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export default function Config() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <View className="w-full h-30 bg-gray-800 rounded-full p-4 flex-row items-center gap-4">
        <Avatar source={{ uri: "https://github.com/kierico.png" }} />
        <View className="flex-1">
          <Text className="text-lg font-subtitle text-gray-400">
            Kiérico
          </Text>
          <Text
            className="text-base font-body text-gray-400"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            kiericograndao@gmail.com
          </Text>
        </View>
        <MaterialIcons name="navigate-next" size={22} color={colors.blue[600]} />
      </View>
      <Text className="text-white text-xl font-heading pt-4 pb-4">Configurações</Text>

      {/* Key Card */}
      <View className="flex-col w-full bg-gray-800 rounded-2xl p-4 items-center gap-4">
        <View className="flex-row items-center gap-7 w-full overflow-hidden">
          <MaterialIcons name="vpn-key" size={24} color={colors.gray[400]} />
          <View className="flex-row gap-4 items-center w-full border-b-2 border-gray-600">
            <Text className="text-gray-400 text-xl font-body pt-4 pb-4">Código:</Text>
            <Text className="flex-1 text-2xl font-body pt-4 pb-4 uppercase font-bold" style={{letterSpacing: 3, color:'#F6AEA9'}}>kfss</Text>
            <View className="flex-1 items-center">
              <MaterialIcons name="content-copy" size={24} color={colors.gray[400]} />              
            </View>
          </View>
        </View>

        <View className="flex-row items-center gap-7 w-full overflow-hidden">
          <MaterialIcons name="refresh" size={24} color={colors.gray[400]} />
          <View className="flex-row gap-4 items-center w-full border-b-2 border-gray-600">
            <Text className="text-gray-400 text-xl font-body pt-4 pb-4">Gerar novo código</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-7 w-full overflow-hidden">
          <MaterialIcons name="share" size={24} color={colors.gray[400]} />
          <View className="flex-row gap-4 items-center w-full border-b-2 border-gray-600">
            <Text className="text-gray-400 text-xl font-body pt-4 pb-4">Convidar Membro</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-7 w-full overflow-hidden pr-12">
          <MaterialIcons name="lock-open" size={24} color={colors.gray[400]} />
          <View className="flex-col gap-2 border-b-2 border-gray-600 pb-4">
            <Text className="text-gray-400 text-xl font-body pt-4">Portas abertas</Text>
            <Text
              className="text-base font-body text-gray-400"
              numberOfLines={2}
              lineBreakMode="tail"
            >
              Qualquer pessoa com o código conseguirá entrar no ministério
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-center gap-7 w-full border border-gray-400 rounded-full mt-4 mb-4">
          <MaterialIcons name="lock-open" size={24} color={colors.blue[600]} />
          <View className="pb-4">
            <Text className="text-xl font-body pt-4" style={{color:'#4285F4'}}>Fechar portas</Text>
          </View>
        </View>

      </View>

      <View className="flex-col w-full bg-gray-800 rounded-full p-4 items-center gap-4 mt-6">
        <View className="flex-row items-center gap-7 w-full overflow-hidden">
          <MaterialIcons name="delete" size={24} color={colors.gray[400]} />
          <View className="flex-row gap-4 items-center w-full">
            <Text className="text-gray-400 text-xl font-body pt-4 pb-4">Excluir Igreja</Text>
          </View>
        </View>        

      </View>
    </View>
  )
}
