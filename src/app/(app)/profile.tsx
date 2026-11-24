import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <ThemedText type="subtitle">User Profile</ThemedText>
        <ThemedText type="default" themeColor="textSecondary">
          Account preferences, language settings, and cloud sync status.
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.four,
  },
  content: {
    flex: 1,
    gap: Spacing.two,
  },
});
