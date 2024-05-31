import { View, Text, FlatList } from "react-native"

import { Input } from "@/components/input"
import { People } from "@/components/people"
import { PEOPLES } from "@/utils/peoples"
import { Avatar } from "@/components/avatar"
import { MenuButton } from "@/components/menu-button"

export default function Peoples() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar" />
        <Avatar source={{ uri: "https://github.com/kierico.png" }} />
      </Input>

      <FlatList
        data={PEOPLES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <People data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Membros
          </Text>
        )}
      />
    </View>
  )
}