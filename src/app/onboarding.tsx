import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedText style={styles.badge}>🚀 SCREEN 02 (COMING SOON)</ThemedText>
          <ThemedText type="subtitle" style={styles.title}>
            Onboarding & Setup
          </ThemedText>
          <ThemedText type="default" themeColor="textSecondary" style={styles.description}>
            This screen will guide users through initial language preferences, account setup, and quick-start tutorials.
          </ThemedText>

          <Pressable
            accessibilityRole="button"
            onPress={() => router.back()}
            style={({ pressed }) => [styles.backButton, pressed && { opacity: 0.8 }]}>
            <ThemedText style={styles.buttonText}>← Back to Welcome</ThemedText>
          </Pressable>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.four,
  },
  content: {
    width: '100%',
    maxWidth: 500,
  },
  card: {
    padding: Spacing.five,
    borderRadius: 20,
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.15)',
  },
  badge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#208AEF',
    letterSpacing: 0.5,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    lineHeight: 22,
  },
  backButton: {
    marginTop: Spacing.two,
    backgroundColor: '#208AEF',
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.five,
    borderRadius: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});
