import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List, FAB, useTheme, MD3Colors, IconButton} from 'react-native-paper';

export const GraceList = ({title, items = [], defaultItem = null}) => {
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    listItem: {
      marginBottom: 1,
      borderRadius: 8,
      marginHorizontal: 16,
      backgroundColor: theme.colors.surface,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <List.Section>
        {/* <List.Subheader>{title}</List.Subheader> */}
        {items?.map((item, index) => (
          <List.Item
            key={item.id}
            title={item.title}
            titleStyle={{color: theme.colors.onSurface}}
            style={styles.listItem}
            left={() => (
              <List.Icon
                color={theme.colors.primary}
                icon={item.icon || 'folder'}
              />
            )}
            right={() =>
              selectedItem === item.id && (
                <IconButton
                  icon="check"
                  iconColor={theme.colors.primary}
                  size={20}
                />
              )
            }
            onPress={() => setSelectedItem(item.id)}
          />
        ))}
      </List.Section>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('FAB pressed')}
      />
    </View>
  );
};
