import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { Language } from '@/constants/translations';
import { useTheme } from '@/hooks/use-theme';

interface LanguageToggleProps {
  currentLanguage: Language;
  onSelectLanguage: (language: Language) => void;
}

export function LanguageToggle({ currentLanguage, onSelectLanguage }: LanguageToggleProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ThemedView type="backgroundElement" style={styles.toggleTrack}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Switch to English"
          accessibilityState={{ selected: currentLanguage === 'en' }}
          onPress={() => onSelectLanguage('en')}
          style={[
            styles.toggleButton,
            currentLanguage === 'en' && { backgroundColor: theme.background, shadowColor: '#000' },
          ]}>
          <ThemedText
            type="small"
            style={[
              styles.buttonText,
              currentLanguage === 'en' ? styles.activeText : styles.inactiveText,
            ]}>
            English
          </ThemedText>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="తెలుగుకి మారండి (Switch to Telugu)"
          accessibilityState={{ selected: currentLanguage === 'te' }}
          onPress={() => onSelectLanguage('te')}
          style={[
            styles.toggleButton,
            currentLanguage === 'te' && { backgroundColor: theme.background, shadowColor: '#000' },
          ]}>
          <ThemedText
            type="small"
            style={[
              styles.buttonText,
              currentLanguage === 'te' ? styles.activeText : styles.inactiveText,
            ]}>
            తెలుగు
          </ThemedText>
        </Pressable>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleTrack: {
    flexDirection: 'row',
    padding: 3,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.15)',
  },
  toggleButton: {
    paddingVertical: Spacing.one + 2,
    paddingHorizontal: Spacing.three,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  activeText: {
    fontWeight: '700',
  },
  inactiveText: {
    opacity: 0.65,
  },
});
