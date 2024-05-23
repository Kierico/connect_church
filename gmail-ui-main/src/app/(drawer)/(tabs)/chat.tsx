/**
import { Text, View } from "react-native"

export default function Chat() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4 items-center justify-center">
      <Text className="text-white text-2xl font-heading">Chat</Text>
    </View>
  )
}
*/

import { View, Text, FlatList } from "react-native"

import { EMAILS } from "@/utils/emails"
import { Input } from "@/components/input"
import { Email } from "@/components/email"
import { Avatar } from "@/components/avatar"
import { MenuButton } from "@/components/menu-button"
import { FloatButton } from "@/components/float-button"

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar" />
        <Avatar source={{ uri: "https://github.com/kierico.png" }} />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />

      <FloatButton />
    </View>
  )
}