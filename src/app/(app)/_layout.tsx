import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppLayout() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#208AEF',
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: 'rgba(128, 128, 128, 0.15)',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
        }}
      />
      <Tabs.Screen
        name="planner"
        options={{
          title: 'Planner',
        }}
      />
      <Tabs.Screen
        name="shared"
        options={{
          title: 'Shared',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
